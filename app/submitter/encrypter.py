from cryptography.hazmat.backends.openssl.backend import backend
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding
from app import settings

import jwt
import os
import base64

KID = 'EDCSR'


class Encrypter (object):
    def __init__(self):
        private_key_bytes = self._to_bytes(settings.EQ_SUBMISSION_SR_PRIVATE_SIGNING_KEY)
        public_key_bytes = self._to_bytes(settings.EQ_SUBMISSION_SDX_PUBLIC_KEY)
        self.private_key = serialization.load_pem_private_key(private_key_bytes,
                                                              password=self._to_bytes(settings.EQ_SUBMISSION_SR_PRIVATE_SIGNING_KEY_PASSWORD),
                                                              backend=backend)

        self.public_key = serialization.load_pem_public_key(public_key_bytes, backend=backend)

        # first generate a random key
        self.cek = os.urandom(32)  # 256 bit random CEK

        # now generate a random IV
        self.iv = os.urandom(12)  # 96 bit random IV

    def _to_bytes(self, bytes_or_str):
        if isinstance(bytes_or_str, str):
            value = bytes_or_str.encode()
        else:
            value = bytes_or_str
        return value

    def _to_str(self, bytes_or_str):
        if isinstance(bytes_or_str, bytes):
            value = bytes_or_str.decode()
        else:
            value = bytes_or_str
        return value

    def _jwe_protected_header(self):
        return self._base_64_encode(b'{"alg":"RSA-OAEP","enc":"A256GCM"}')

    def _encrypted_key(self, cek):
        ciphertext = self.public_key.encrypt(cek, padding.OAEP(mgf=padding.MGF1(algorithm=hashes.SHA1()), algorithm=hashes.SHA1(), label=None))
        return self._base_64_encode(ciphertext)

    def _encode_iv(self, iv):
        return self._base_64_encode(iv)

    def _base_64_encode(self, text):
        # strip the trailing = as they are padding to make the result a multiple of 4
        # the RFC does the same, as do other base64 libraries so this is a safe operation
        return base64.urlsafe_b64encode(text).decode().strip("=").encode()

    def _encode_and_signed(self, payload):
        return jwt.encode(payload, self.private_key, algorithm="RS256", headers={'kid': KID, 'typ': 'jwt'})

    def encrypt(self, json):
        payload = self._encode_and_signed(json)
        jwe_protected_header = self._jwe_protected_header()
        encrypted_key = self._encrypted_key(self.cek)

        cipher = Cipher(algorithms.AES(self.cek), modes.GCM(self.iv), backend=backend)
        encryptor = cipher.encryptor()

        encryptor.authenticate_additional_data(jwe_protected_header)

        ciphertext = encryptor.update(payload) + encryptor.finalize()

        tag = encryptor.tag

        encoded_ciphertext = self._base_64_encode(ciphertext)
        encoded_tag = self._base_64_encode(tag)

        # assemble result
        jwe = jwe_protected_header + b"." + encrypted_key + b"." + self._encode_iv(self.iv) + b"." + encoded_ciphertext + b"." + encoded_tag

        return self._to_str(jwe)
from app.storage.database_storage import DatabaseStore
from app.storage.session_storage import FlaskSessionStore
from app.storage.memory_storage import InMemoryStorage
from app.storage.encrypted_storage import EncryptedServerStorageDecorator
from app import settings
import logging

logger = logging.getLogger(__name__)


class StorageFactory(object):

    @staticmethod
    def get_storage_mechanism():
        if settings.EQ_SERVER_SIDE_STORAGE:
            logger.debug("Using server side storage %s ", settings.EQ_SERVER_SIDE_STORAGE_TYPE)
            if settings.EQ_SERVER_SIDE_STORAGE_TYPE.upper() == 'DATABASE':
                storage = DatabaseStore()
            else:
                storage = InMemoryStorage()
        else:
                storage = FlaskSessionStore()

        if settings.EQ_SERVER_SIDE_STORAGE and settings.EQ_SERVER_SIDE_STORAGE_ENCRYPTION:
            # wrap the storage in an encrypted decorator
            return EncryptedServerStorageDecorator(storage)
        else:
            return storage

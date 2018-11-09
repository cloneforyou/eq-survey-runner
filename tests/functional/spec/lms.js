// To build the pages, run `./generate_pages.py ../../data/en/ ./generated_pages -r "../../base_pages" -p 'lms_2'`

const helpers = require('../helpers');

const PrimaryHouseholdMemberBlockPage = require('../generated_pages/lms_2/primary-household-member-block.page.js');
const AddressCheckBlockPage = require('../generated_pages/lms_2/address-check-block.page.js');
const OtherHouseholdMemberAnyoneElseBlockPage = require('../generated_pages/lms_2/other-household-member-anyone-else-block.page.js');
const OtherHouseholdMemberNameBlockPage = require('../generated_pages/lms_2/other-household-member-name-block.page.js');
const StudentHouseholdMemberAnyoneElseBlockPage = require('../generated_pages/lms_2/student-household-member-anyone-else-block.page.js');
const StudentHouseholdMemberNameBlockPage = require('../generated_pages/lms_2/student-household-member-name-block.page.js');
const AddressTypeBlockNoPrimaryPage = require('../generated_pages/lms_2/address-type-block-no-primary.page.js');
const HouseholdCheckBlockNoPrimaryPage = require('../generated_pages/lms_2/household-check-block-no-primary.page.js');
const OtherHouseholdMemberNameBlockNoPrimaryPage = require('../generated_pages/lms_2/other-household-member-name-block-no-primary.page.js');
const OtherHouseholdMemberAnyoneElseBlockNoPrimaryPage = require('../generated_pages/lms_2/other-household-member-anyone-else-block-no-primary.page.js');
const StudentHouseholdMemberAnyoneElseBlockNoPrimaryPage = require('../generated_pages/lms_2/student-household-member-anyone-else-block-no-primary.page.js');
const StudentHouseholdMemberNameBlockNoPrimaryPage = require('../generated_pages/lms_2/student-household-member-name-block-no-primary.page.js');
const HouseholdSummaryNoPrimaryPage = require('../generated_pages/lms_2/household-summary-no-primary.page.js');
const HouseholdSummaryPage = require('../generated_pages/lms_2/household-summary.page.js');
const ShareCookingBlockPage = require('../generated_pages/lms_2/share-cooking-block.page.js');
const ShareLivingBlockPage = require('../generated_pages/lms_2/share-living-block.page.js');
const ShareCookingBlockNoPrimaryPage = require('../generated_pages/lms_2/share-cooking-block-no-primary.page.js');
const ShareLivingBlockNoPrimaryPage = require('../generated_pages/lms_2/share-living-block-no-primary.page.js');
const NoPrimaryHouseholdRelationshipsBlockPage = require('../generated_pages/lms_2/no-primary-household-relationships-block.page.js');
const HouseholdRelationshipsBlockPage = require('../generated_pages/lms_2/household-relationships-block.page.js');
const HouseholdMemberBeginPage = require('../generated_pages/lms_2/household-member-begin.page.js');
const ProxyCheckPage = require('../generated_pages/lms_2/proxy-check.page.js');
const AlternativeAddressPage = require('../generated_pages/lms_2/alternative-address.page.js');
const AlternativeAddressTypePage = require('../generated_pages/lms_2/alternative-address-type.page.js');
const TimeAwayPage = require('../generated_pages/lms_2/time-away.page.js');
const SexPage = require('../generated_pages/lms_2/sex.page.js');
const DateOfBirthPage = require('../generated_pages/lms_2/date-of-birth.page.js');
const DateOfBirthAgePage = require('../generated_pages/lms_2/date-of-birth-age.page.js');
const MaritalStatusPage = require('../generated_pages/lms_2/marital-status.page.js');
const NationalityPage = require('../generated_pages/lms_2/nationality.page.js');
const CountryOfBirthWalesPage = require('../generated_pages/lms_2/country-of-birth-wales.page.js');
const CountryOfBirthScotlandPage = require('../generated_pages/lms_2/country-of-birth-scotland.page.js');
const CountryOfBirthEnglandPage = require('../generated_pages/lms_2/country-of-birth-england.page.js');
const FirstArriveInUkPage = require('../generated_pages/lms_2/first-arrive-in-uk.page.js');
const ContinuousInUkPage = require('../generated_pages/lms_2/continuous-in-uk.page.js');
const Camyr2BlockPage = require('../generated_pages/lms_2/camyr2-block.page.js');
const WhyUkPage = require('../generated_pages/lms_2/why-uk.page.js');
const WhyUkContinuousPage = require('../generated_pages/lms_2/why-uk-continuous.page.js');
const NationalIdentityPage = require('../generated_pages/lms_2/national-identity.page.js');
const UnderstandWelshPage = require('../generated_pages/lms_2/understand-welsh.page.js');
const WelshFrequencyPage = require('../generated_pages/lms_2/welsh-frequency.page.js');
const EthnicGroupPage = require('../generated_pages/lms_2/ethnic-group.page.js');
const WhiteEthnicGroupPage = require('../generated_pages/lms_2/white-ethnic-group.page.js');
const MixedEthnicGroupPage = require('../generated_pages/lms_2/mixed-ethnic-group.page.js');
const AsianEthnicGroupPage = require('../generated_pages/lms_2/asian-ethnic-group.page.js');
const BlackEthnicGroupPage = require('../generated_pages/lms_2/black-ethnic-group.page.js');
const OtherEthnicGroupPage = require('../generated_pages/lms_2/other-ethnic-group.page.js');
const ReligionPage = require('../generated_pages/lms_2/religion.page.js');
const PaidJobQ1Page = require('../generated_pages/lms_2/paid-job-q1.page.js');
const SecondJobW2Page = require('../generated_pages/lms_2/second-job-w2.page.js');
const TwoJobsJ1EmpStatusW31Page = require('../generated_pages/lms_2/two-jobs-j1-emp-status-w3-1.page.js');
const TwoJobsJ2EmpStatusW32Page = require('../generated_pages/lms_2/two-jobs-j2-emp-status-w3-2.page.js');
const TwoJobsJ1EmpStatusW31ProxyPage = require('../generated_pages/lms_2/two-jobs-j1-emp-status-w3-1-proxy.page.js');
const TwoJobsJ2EmpStatusW32ProxyPage = require('../generated_pages/lms_2/two-jobs-j2-emp-status-w3-2-proxy.page.js');
const OneJobEmpStatusW3Page = require('../generated_pages/lms_2/one-job-emp-status-w3.page.js');
const OneJobEmpStatusW3ProxyPage = require('../generated_pages/lms_2/one-job-emp-status-w3-proxy.page.js');
const NotWorkingCasualWorkNw2Page = require('../generated_pages/lms_2/not-working-casual-work-nw-2.page.js');
const WorkingHoursFlex10Page = require('../generated_pages/lms_2/working-hours-flex10.page.js');
const WorkingDaysW5Page = require('../generated_pages/lms_2/working-days-w5.page.js');
const OvertimeW6Page = require('../generated_pages/lms_2/overtime-w6.page.js');
const UnpaidOvertimeW10Page = require('../generated_pages/lms_2/unpaid-overtime-w10.page.js');
const PaidOvertimeW11Page = require('../generated_pages/lms_2/paid-overtime-w-11.page.js');
const OneJobUsualHoursW12Page = require('../generated_pages/lms_2/one-job-usual-hours-w12.page.js');
const OneJobActualHoursW12Page = require('../generated_pages/lms_2/one-job-actual-hours-w12.page.js');
const OneJobActualHoursConfirmationW121Page = require('../generated_pages/lms_2/one-job-actual-hours-confirmation-w12-1.page.js');
const TwoJobsJ1UnpaidOvertimeW101Page = require('../generated_pages/lms_2/two-jobs-j1-unpaid-overtime-w-10-1.page.js');
const TwoJobsJ2UnpaidOvertimeW102Page = require('../generated_pages/lms_2/two-jobs-j2-unpaid-overtime-w-10-2.page.js');
const TwoJobsJ1PaidOvertimeW111Page = require('../generated_pages/lms_2/two-jobs-j1-paid-overtime-w-11-1.page.js');
const TwoJobsJ2PaidOvertimeW112Page = require('../generated_pages/lms_2/two-jobs-j2-paid-overtime-w-11-2.page.js');
const TwoJobsJ1UsualHoursW121Page = require('../generated_pages/lms_2/two-jobs-j1-usual-hours-w12-1.page.js');
const TwoJobsJ1ActualHoursW1211Page = require('../generated_pages/lms_2/two-jobs-j1-actual-hours-w12-1-1.page.js');
const TwoJobsJ1ActualHoursConfirmationW1211Page = require('../generated_pages/lms_2/two-jobs-j1-actual-hours-confirmation-w12-1-1.page.js');
const TwoJobsJ2UsualHoursW122Page = require('../generated_pages/lms_2/two-jobs-j2-usual-hours-w12-2.page.js');
const TwoJobsJ2ActualHoursW1222Page = require('../generated_pages/lms_2/two-jobs-j2-actual-hours-w12-22.page.js');
const TwoJobsJ2ActualHoursConfirmationW12221Page = require('../generated_pages/lms_2/two-jobs-j2-actual-hours-confirmation-w12-22-1.page.js');
const CasualHoursWorkedCasacPage = require('../generated_pages/lms_2/casual-hours-worked-casac.page.js');
const OneJobHoursTotalizedW13Page = require('../generated_pages/lms_2/one-job-hours-totalized-w13.page.js');
const TwoJobsHoursTotalizedW131Page = require('../generated_pages/lms_2/two-jobs-hours-totalized-w13-1.page.js');
const ReasonWhyFewerHoursThanUsualSelfEmployedW14SempPage = require('../generated_pages/lms_2/reason-why-fewer-hours-than-usual-self-employed-w14-semp.page.js');
const WhenStartWorkingCurrentBusinessRed6SempPage = require('../generated_pages/lms_2/when-start-working-current-business-red6-semp.page.js');
const ReasonWhyFewerHoursThanUsualEmployeeW14EmpPage = require('../generated_pages/lms_2/reason-why-fewer-hours-than-usual-employee-w14-emp.page.js');
const ReceivingHalfSalaryW15Page = require('../generated_pages/lms_2/receiving-half-salary-w15.page.js');
const ReceivingHalfSalaryW15ProxyPage = require('../generated_pages/lms_2/receiving-half-salary-w15-proxy.page.js');
const MainJobWhenStartWorkingCurrentBusinessRed6EmpPage = require('../generated_pages/lms_2/main-job-when-start-working-current-business-red6-emp.page.js');
const LeftPaidJobRed3Page = require('../generated_pages/lms_2/left-paid-job-red3.page.js');
const DidYouLookForPaidWorkNw3Page = require('../generated_pages/lms_2/did-you-look-for-paid-work-nw3.page.js');
const HowLongHaveYouBeenLookingDur1Page = require('../generated_pages/lms_2/how-long-have-you-been-looking-dur1.page.js');
const IfOfferedWouldStartNw5Page = require('../generated_pages/lms_2/if-offered-would-start-nw5.page.js');
const NotBeAbleToStartReasonNw6Page = require('../generated_pages/lms_2/not-be-able-to-start-reason-nw6.page.js');
const NotLookingForWorkReasonNw4Page = require('../generated_pages/lms_2/not-looking-for-work-reason-nw4.page.js');
const HowLongHaveYouBeenLookingBeforeStartDur2Page = require('../generated_pages/lms_2/how-long-have-you-been-looking-before-start-dur2.page.js');
const UnpaidOrVoluntaryWorkNw7Page = require('../generated_pages/lms_2/unpaid-or-voluntary-work-nw7.page.js');
const WhenLeftLastPaidJobRed11Page = require('../generated_pages/lms_2/when-left-last-paid-job-red-1-1.page.js');
const ReasonLeavingPaidJobRed4Page = require('../generated_pages/lms_2/reason-leaving-paid-job-red4.page.js');
const MadeRedundantRed5Page = require('../generated_pages/lms_2/made-redundant-red5.page.js');
const EnrolledEducationCourseQe1Page = require('../generated_pages/lms_2/enrolled-education-course-qe1.page.js');
const CourseTypeQe2Page = require('../generated_pages/lms_2/course-type-qe2.page.js');
const Attend18Page = require('../generated_pages/lms_2/attend18.page.js');
const HouseholdMemberCompletedPage = require('../generated_pages/lms_2/household-member-completed.page.js');
const NoPrimaryHouseholdMemberBeginPage = require('../generated_pages/lms_2/no-primary-household-member-begin.page.js');
const NoPrimaryProxyCheckPage = require('../generated_pages/lms_2/no-primary-proxy-check.page.js');
const NoPrimaryAlternativeAddressPage = require('../generated_pages/lms_2/no-primary-alternative-address.page.js');
const NoPrimaryAlternativeAddressTypePage = require('../generated_pages/lms_2/no-primary-alternative-address-type.page.js');
const NoPrimaryTimeAwayPage = require('../generated_pages/lms_2/no-primary-time-away.page.js');
const NoPrimarySexPage = require('../generated_pages/lms_2/no-primary-sex.page.js');
const NoPrimaryDateOfBirthPage = require('../generated_pages/lms_2/no-primary-date-of-birth.page.js');
const NoPrimaryDateOfBirthAgePage = require('../generated_pages/lms_2/no-primary-date-of-birth-age.page.js');
const NoPrimaryMaritalStatusPage = require('../generated_pages/lms_2/no-primary-marital-status.page.js');
const NoPrimaryNationalityPage = require('../generated_pages/lms_2/no-primary-nationality.page.js');
const NoPrimaryCountryOfBirthWalesPage = require('../generated_pages/lms_2/no-primary-country-of-birth-wales.page.js');
const NoPrimaryCountryOfBirthScotlandPage = require('../generated_pages/lms_2/no-primary-country-of-birth-scotland.page.js');
const NoPrimaryCountryOfBirthEnglandPage = require('../generated_pages/lms_2/no-primary-country-of-birth-england.page.js');
const NoPrimaryFirstArriveInUkPage = require('../generated_pages/lms_2/no-primary-first-arrive-in-uk.page.js');
const NoPrimaryContinuousInUkPage = require('../generated_pages/lms_2/no-primary-continuous-in-uk.page.js');
const NoPrimaryCamyr2BlockPage = require('../generated_pages/lms_2/no-primary-camyr2-block.page.js');
const NoPrimaryWhyUkPage = require('../generated_pages/lms_2/no-primary-why-uk.page.js');
const NoPrimaryWhyUkContinuousPage = require('../generated_pages/lms_2/no-primary-why-uk-continuous.page.js');
const NoPrimaryNationalIdentityPage = require('../generated_pages/lms_2/no-primary-national-identity.page.js');
const NoPrimaryUnderstandWelshPage = require('../generated_pages/lms_2/no-primary-understand-welsh.page.js');
const NoPrimaryWelshFrequencyPage = require('../generated_pages/lms_2/no-primary-welsh-frequency.page.js');
const NoPrimaryEthnicGroupPage = require('../generated_pages/lms_2/no-primary-ethnic-group.page.js');
const NoPrimaryWhiteEthnicGroupPage = require('../generated_pages/lms_2/no-primary-white-ethnic-group.page.js');
const NoPrimaryMixedEthnicGroupPage = require('../generated_pages/lms_2/no-primary-mixed-ethnic-group.page.js');
const NoPrimaryAsianEthnicGroupPage = require('../generated_pages/lms_2/no-primary-asian-ethnic-group.page.js');
const NoPrimaryBlackEthnicGroupPage = require('../generated_pages/lms_2/no-primary-black-ethnic-group.page.js');
const NoPrimaryOtherEthnicGroupPage = require('../generated_pages/lms_2/no-primary-other-ethnic-group.page.js');
const NoPrimaryReligionPage = require('../generated_pages/lms_2/no-primary-religion.page.js');
const NoPrimaryPaidJobQ1Page = require('../generated_pages/lms_2/no-primary-paid-job-q1.page.js');
const NoPrimarySecondJobW2Page = require('../generated_pages/lms_2/no-primary-second-job-w2.page.js');
const NoPrimaryTwoJobsJ1EmpStatusW31Page = require('../generated_pages/lms_2/no-primary-two-jobs-j1-emp-status-w3-1.page.js');
const NoPrimaryTwoJobsJ2EmpStatusW32Page = require('../generated_pages/lms_2/no-primary-two-jobs-j2-emp-status-w3-2.page.js');
const NoPrimaryTwoJobsJ1EmpStatusW31ProxyPage = require('../generated_pages/lms_2/no-primary-two-jobs-j1-emp-status-w3-1-proxy.page.js');
const NoPrimaryTwoJobsJ2EmpStatusW32ProxyPage = require('../generated_pages/lms_2/no-primary-two-jobs-j2-emp-status-w3-2-proxy.page.js');
const NoPrimaryOneJobEmpStatusW3Page = require('../generated_pages/lms_2/no-primary-one-job-emp-status-w3.page.js');
const NoPrimaryOneJobEmpStatusW3ProxyPage = require('../generated_pages/lms_2/no-primary-one-job-emp-status-w3-proxy.page.js');
const NoPrimaryNotWorkingCasualWorkNw2Page = require('../generated_pages/lms_2/no-primary-not-working-casual-work-nw-2.page.js');
const NoPrimaryWorkingHoursFlex10Page = require('../generated_pages/lms_2/no-primary-working-hours-flex10.page.js');
const NoPrimaryWorkingDaysW5Page = require('../generated_pages/lms_2/no-primary-working-days-w5.page.js');
const NoPrimaryOvertimeW6Page = require('../generated_pages/lms_2/no-primary-overtime-w6.page.js');
const NoPrimaryUnpaidOvertimeW10Page = require('../generated_pages/lms_2/no-primary-unpaid-overtime-w10.page.js');
const NoPrimaryPaidOvertimeW11Page = require('../generated_pages/lms_2/no-primary-paid-overtime-w-11.page.js');
const NoPrimaryOneJobUsualHoursW12Page = require('../generated_pages/lms_2/no-primary-one-job-usual-hours-w12.page.js');
const NoPrimaryOneJobActualHoursW12Page = require('../generated_pages/lms_2/no-primary-one-job-actual-hours-w12.page.js');
const NoPrimaryOneJobActualHoursConfirmationW121Page = require('../generated_pages/lms_2/no-primary-one-job-actual-hours-confirmation-w12-1.page.js');
const NoPrimaryTwoJobsJ1UnpaidOvertimeW101Page = require('../generated_pages/lms_2/no-primary-two-jobs-j1-unpaid-overtime-w-10-1.page.js');
const NoPrimaryTwoJobsJ2UnpaidOvertimeW102Page = require('../generated_pages/lms_2/no-primary-two-jobs-j2-unpaid-overtime-w-10-2.page.js');
const NoPrimaryTwoJobsJ1PaidOvertimeW111Page = require('../generated_pages/lms_2/no-primary-two-jobs-j1-paid-overtime-w-11-1.page.js');
const NoPrimaryTwoJobsJ2PaidOvertimeW112Page = require('../generated_pages/lms_2/no-primary-two-jobs-j2-paid-overtime-w-11-2.page.js');
const NoPrimaryTwoJobsJ1UsualHoursW121Page = require('../generated_pages/lms_2/no-primary-two-jobs-j1-usual-hours-w12-1.page.js');
const NoPrimaryTwoJobsJ1ActualHoursW1211Page = require('../generated_pages/lms_2/no-primary-two-jobs-j1-actual-hours-w12-1-1.page.js');
const NoPrimaryTwoJobsJ1ActualHoursConfirmationW1211Page = require('../generated_pages/lms_2/no-primary-two-jobs-j1-actual-hours-confirmation-w12-1-1.page.js');
const NoPrimaryTwoJobsJ2UsualHoursW122Page = require('../generated_pages/lms_2/no-primary-two-jobs-j2-usual-hours-w12-2.page.js');
const NoPrimaryTwoJobsJ2ActualHoursW1222Page = require('../generated_pages/lms_2/no-primary-two-jobs-j2-actual-hours-w12-22.page.js');
const NoPrimaryTwoJobsJ2ActualHoursConfirmationW12221Page = require('../generated_pages/lms_2/no-primary-two-jobs-j2-actual-hours-confirmation-w12-22-1.page.js');
const NoPrimaryCasualHoursWorkedCasacPage = require('../generated_pages/lms_2/no-primary-casual-hours-worked-casac.page.js');
const NoPrimaryOneJobHoursTotalizedW13Page = require('../generated_pages/lms_2/no-primary-one-job-hours-totalized-w13.page.js');
const NoPrimaryTwoJobsHoursTotalizedW131Page = require('../generated_pages/lms_2/no-primary-two-jobs-hours-totalized-w13-1.page.js');
const NoPrimaryReasonWhyFewerHoursThanUsualSelfEmployedW14SempPage = require('../generated_pages/lms_2/no-primary-reason-why-fewer-hours-than-usual-self-employed-w14-semp.page.js');
const NoPrimaryWhenStartWorkingCurrentBusinessRed6SempPage = require('../generated_pages/lms_2/no-primary-when-start-working-current-business-red6-semp.page.js');
const NoPrimaryReasonWhyFewerHoursThanUsualEmployeeW14EmpPage = require('../generated_pages/lms_2/no-primary-reason-why-fewer-hours-than-usual-employee-w14-emp.page.js');
const NoPrimaryReceivingHalfSalaryW15Page = require('../generated_pages/lms_2/no-primary-receiving-half-salary-w15.page.js');
const NoPrimaryReceivingHalfSalaryW15ProxyPage = require('../generated_pages/lms_2/no-primary-receiving-half-salary-w15-proxy.page.js');
const NoPrimaryMainJobWhenStartWorkingCurrentBusinessRed6EmpPage = require('../generated_pages/lms_2/no-primary-main-job-when-start-working-current-business-red6-emp.page.js');
const NoPrimaryLeftPaidJobRed3Page = require('../generated_pages/lms_2/no-primary-left-paid-job-red3.page.js');
const NoPrimaryDidYouLookForPaidWorkNw3Page = require('../generated_pages/lms_2/no-primary-did-you-look-for-paid-work-nw3.page.js');
const NoPrimaryHowLongHaveYouBeenLookingDur1Page = require('../generated_pages/lms_2/no-primary-how-long-have-you-been-looking-dur1.page.js');
const NoPrimaryIfOfferedWouldStartNw5Page = require('../generated_pages/lms_2/no-primary-if-offered-would-start-nw5.page.js');
const NoPrimaryNotBeAbleToStartReasonNw6Page = require('../generated_pages/lms_2/no-primary-not-be-able-to-start-reason-nw6.page.js');
const NoPrimaryNotLookingForWorkReasonNw4Page = require('../generated_pages/lms_2/no-primary-not-looking-for-work-reason-nw4.page.js');
const NoPrimaryHowLongHaveYouBeenLookingBeforeStartDur2Page = require('../generated_pages/lms_2/no-primary-how-long-have-you-been-looking-before-start-dur2.page.js');
const NoPrimaryUnpaidOrVoluntaryWorkNw7Page = require('../generated_pages/lms_2/no-primary-unpaid-or-voluntary-work-nw7.page.js');
const NoPrimaryWhenLeftLastPaidJobRed11Page = require('../generated_pages/lms_2/no-primary-when-left-last-paid-job-red-1-1.page.js');
const NoPrimaryReasonLeavingPaidJobRed4Page = require('../generated_pages/lms_2/no-primary-reason-leaving-paid-job-red4.page.js');
const NoPrimaryMadeRedundantRed5Page = require('../generated_pages/lms_2/no-primary-made-redundant-red5.page.js');
const NoPrimaryEnrolledEducationCourseQe1Page = require('../generated_pages/lms_2/no-primary-enrolled-education-course-qe1.page.js');
const NoPrimaryCourseTypeQe2Page = require('../generated_pages/lms_2/no-primary-course-type-qe2.page.js');
const NoPrimaryAttend18Page = require('../generated_pages/lms_2/no-primary-attend18.page.js');
const NoPrimaryHouseholdMemberCompletedPage = require('../generated_pages/lms_2/no-primary-household-member-completed.page.js');
const ThankYouBlockPage = require('../generated_pages/lms_2/thank-you-block.page.js');
const FeedbackBlockPage = require('../generated_pages/lms_2/feedback-block.page.js');

describe('LMS', function() {

  const lms_schema = 'lms_2.json';
  const numberRepeats = 5;

  it('@watch Large Path', function() {
    return helpers.openQuestionnaire(lms_schema).then(() => {
      return browser
        .setValue(PrimaryHouseholdMemberBlockPage.primaryHouseholdMemberFirstName(), 'PrimaryFirst')
        .setValue(PrimaryHouseholdMemberBlockPage.primaryHouseholdMemberLastName(), 'PrimaryLast')
        .click(PrimaryHouseholdMemberBlockPage.submit())

        .click(AddressCheckBlockPage.yes())
        .click(AddressCheckBlockPage.submit())

        // 10 People
        .then(function(data) { return repeatAddingHousehold(numberRepeats); })

        .click(OtherHouseholdMemberAnyoneElseBlockPage.no())
        .click(OtherHouseholdMemberAnyoneElseBlockPage.submit())

        .click(StudentHouseholdMemberAnyoneElseBlockPage.no())
        .click(StudentHouseholdMemberAnyoneElseBlockPage.submit())

        .click(HouseholdSummaryPage.submit())
        .click(ShareCookingBlockPage.yes())
        .click(ShareCookingBlockPage.submit())
        .click(ShareLivingBlockPage.yes())
        .click(ShareLivingBlockPage.submit())

        .then(function(data) { return completeRelationships(numberRepeats); })

        .then(function(data) { return completeHouseholdMember(numberRepeats + 1); })

        .setValue(ThankYouBlockPage.phoneNumber(), '0988765543333')
        .setValue(ThankYouBlockPage.email(), 'email@email.com')
        .setValue(ThankYouBlockPage.confirmEmail(), 'email@email.com')
        .click(ThankYouBlockPage.submit())

        .click(FeedbackBlockPage.submit())

    });
  }).timeout(600000000);
});

function repeatAddingHousehold(numberOfRepeats) {

  let chain = browser.pause(0);

  for (let i = 1; i <= numberOfRepeats; i++) {
    chain = chain.then(() => {
      return browser
        .click(OtherHouseholdMemberAnyoneElseBlockPage.yes())
        .click(OtherHouseholdMemberAnyoneElseBlockPage.submit())

        .setValue(OtherHouseholdMemberNameBlockPage.otherHouseholdMemberFirstName(), 'OtherFirst' + i)
        .setValue(OtherHouseholdMemberNameBlockPage.otherHouseholdMemberLastName(), 'OtherLast' + i)
        .click(OtherHouseholdMemberNameBlockPage.submit())
    });
  }

  return chain
}

function completeRelationships(numberOfRepeats) {
  let chain = browser.pause(0);

  let decreaseingCount = numberOfRepeats

  for (let i = 0; i < numberOfRepeats; i++) {
    for (let j = 0; j < decreaseingCount; j++) {
      chain = chain.then(() => {
        return browser
          .click(HouseholdRelationshipsBlockPage.relationship(j, 'Husband, wife or same sex civil partner'))
      });
    }
    chain = chain.then(() => {
        return browser
          .click(OtherHouseholdMemberNameBlockPage.submit())
      })

    decreaseingCount--
  }

  return chain
}


function completeHouseholdMember(numberOfRepeats) {

  let chain = browser.pause(0);

  for (let i = 1; i <= numberOfRepeats; i++) {
    chain = chain.then(() => {
      return browser
        .click(HouseholdMemberBeginPage.submit())

        .click(ProxyCheckPage.noProxy())
        .click(ProxyCheckPage.submit())

        .click(AlternativeAddressPage.no())
        .click(AlternativeAddressPage.submit())

        .click(SexPage.male())
        .click(SexPage.submit())

        .setValue(DateOfBirthPage.day(), 1)
        .selectByValue(DateOfBirthPage.month(), 3)
        .setValue(DateOfBirthPage.year(), 1980)
        .click(DateOfBirthPage.submit())

        .click(MaritalStatusPage.married())
        .click(MaritalStatusPage.submit())

        .click(NationalityPage.british())
        .click(NationalityPage.submit())

        .click(CountryOfBirthEnglandPage.england())
        .click(CountryOfBirthEnglandPage.submit())

        .click(NationalIdentityPage.englandBritish())
        .click(NationalIdentityPage.submit())

        .click(EthnicGroupPage.white())
        .click(EthnicGroupPage.submit())

        .click(WhiteEthnicGroupPage.englishWelshScottishNorthernIrishOrBritish())
        .click(WhiteEthnicGroupPage.submit())

        .click(ReligionPage.christian())
        .click(ReligionPage.submit())

        .click(PaidJobQ1Page.yes())
        .click(PaidJobQ1Page.submit())

        .click(SecondJobW2Page.yes())
        .click(SecondJobW2Page.submit())

        .click(TwoJobsJ1EmpStatusW31Page.twoJobsJ1EmpStatusEmpOrSelfEmployee())
        .click(TwoJobsJ1EmpStatusW31Page.twoJobsJ1EmpStatusFullOrPartTimeFullTime())
        .click(TwoJobsJ1EmpStatusW31Page.submit())

        .click(TwoJobsJ2EmpStatusW32Page.twoJobsJ2EmpStatusEmpOrSelfEmployee())
        .click(TwoJobsJ2EmpStatusW32Page.twoJobsJ2EmpStatusFullOrPartTimeFullTime())
        .click(TwoJobsJ2EmpStatusW32Page.submit())

        .click(WorkingHoursFlex10Page.workingHoursZeroHoursContract())
        .click(WorkingHoursFlex10Page.submit())

        .click(WorkingDaysW5Page.workingDaysMonday())
        .click(WorkingDaysW5Page.workingDaysTuesday())
        .click(WorkingDaysW5Page.workingDaysFriday())
        .click(WorkingDaysW5Page.submit())

        .click(OvertimeW6Page.paidAndUnpaidOvertime())
        .click(OvertimeW6Page.submit())

        .setValue(TwoJobsJ1UnpaidOvertimeW101Page.twoJobsJ1UnpaidOvertime(), 10)
        .click(TwoJobsJ1UnpaidOvertimeW101Page.submit())

        .setValue(TwoJobsJ2UnpaidOvertimeW102Page.twoJobsJ2UnpaidOvertime(), 10)
        .click(TwoJobsJ2UnpaidOvertimeW102Page.submit())

        .setValue(TwoJobsJ1PaidOvertimeW111Page.twoJobsJ1PaidOvertime(), 5)
        .click(TwoJobsJ1PaidOvertimeW111Page.submit())

        .setValue(TwoJobsJ2PaidOvertimeW112Page.twoJobsJ2PaidOvertime(), 5)
        .click(TwoJobsJ2PaidOvertimeW112Page.submit())

        .setValue(TwoJobsJ1UsualHoursW121Page.twoJobsJ1UsualHours(), 30)
        .click(TwoJobsJ1UsualHoursW121Page.submit())

        .setValue(TwoJobsJ1ActualHoursW1211Page.twoJobsJ1ActualHours(), 30)
        .click(TwoJobsJ1UsualHoursW121Page.submit())

        .setValue(TwoJobsJ2UsualHoursW122Page.twoJobsJ2UsualHours(), 20)
        .click(TwoJobsJ2UsualHoursW122Page.submit())

        .setValue(TwoJobsJ2ActualHoursW1222Page.twoJobsJ2ActualHours(), 20)
        .click(TwoJobsJ2ActualHoursW1222Page.submit())

        .click(TwoJobsHoursTotalizedW131Page.submit())

        .selectByValue(MainJobWhenStartWorkingCurrentBusinessRed6EmpPage.Month(), 3)
        .setValue(MainJobWhenStartWorkingCurrentBusinessRed6EmpPage.Year(), 2016)
        .click(MainJobWhenStartWorkingCurrentBusinessRed6EmpPage.submit())

        .click(MadeRedundantRed5Page.yes())
        .click(MadeRedundantRed5Page.submit())

        .click(EnrolledEducationCourseQe1Page.yes())
        .click(EnrolledEducationCourseQe1Page.submit())

        .click(CourseTypeQe2Page.aFullTimeCourseAtUniversityOrCollegeIncluding6ThFormCollege())
        .click(CourseTypeQe2Page.submit())

        .click(Attend18Page.stillAttending())
        .click(Attend18Page.submit())

        .click(HouseholdMemberCompletedPage.submit())
    });
  }

  return chain
}

const helpers = require('../helpers');

const PrimaryHouseholdMemberBlockPage = require('../pages/surveys/lms/primary-household-member-block.page.js');
const AddressCheckBlockPage = require('../pages/surveys/lms/address-check-block.page.js');
const OtherHouseholdMemberAnyoneElseBlockPage = require('../pages/surveys/lms/other-household-member-anyone-else-block.page.js');
const OtherHouseholdMemberNameBlockPage = require('../pages/surveys/lms/other-household-member-name-block.page.js');
const StudentHouseholdMemberAnyoneElseBlockPage = require('../pages/surveys/lms/student-household-member-anyone-else-block.page.js');
const StudentHouseholdMemberNameBlockPage = require('../pages/surveys/lms/student-household-member-name-block.page.js');
const AddressTypeBlockNoPrimaryPage = require('../pages/surveys/lms/address-type-block-no-primary.page.js');
const HouseholdCheckBlockNoPrimaryPage = require('../pages/surveys/lms/household-check-block-no-primary.page.js');
const OtherHouseholdMemberNameBlockNoPrimaryPage = require('../pages/surveys/lms/other-household-member-name-block-no-primary.page.js');
const OtherHouseholdMemberAnyoneElseBlockNoPrimaryPage = require('../pages/surveys/lms/other-household-member-anyone-else-block-no-primary.page.js');
const StudentHouseholdMemberAnyoneElseBlockNoPrimaryPage = require('../pages/surveys/lms/student-household-member-anyone-else-block-no-primary.page.js');
const StudentHouseholdMemberNameBlockNoPrimaryPage = require('../pages/surveys/lms/student-household-member-name-block-no-primary.page.js');
const HouseholdSummaryNoPrimaryPage = require('../pages/surveys/lms/household-summary-no-primary.page.js');
const HouseholdSummaryPage = require('../pages/surveys/lms/household-summary.page.js');
const ShareCookingBlockPage = require('../pages/surveys/lms/share-cooking-block.page.js');
const ShareLivingBlockPage = require('../pages/surveys/lms/share-living-block.page.js');
const ShareCookingBlockNoPrimaryPage = require('../pages/surveys/lms/share-cooking-block-no-primary.page.js');
const ShareLivingBlockNoPrimaryPage = require('../pages/surveys/lms/share-living-block-no-primary.page.js');
const NoPrimaryHouseholdRelationshipsBlockPage = require('../pages/surveys/lms/no-primary-household-relationships-block.page.js');
const HouseholdRelationshipsBlockPage = require('../pages/surveys/lms/household-relationships-block.page.js');
const HouseholdMemberBeginPage = require('../pages/surveys/lms/household-member-begin.page.js');
const ProxyCheckPage = require('../pages/surveys/lms/proxy-check.page.js');
const AlternativeAddressPage = require('../pages/surveys/lms/alternative-address.page.js');
const AlternativeAddressTypePage = require('../pages/surveys/lms/alternative-address-type.page.js');
const TimeAwayPage = require('../pages/surveys/lms/time-away.page.js');
const SexPage = require('../pages/surveys/lms/sex.page.js');
const DateOfBirthPage = require('../pages/surveys/lms/date-of-birth.page.js');
const DateOfBirthAgePage = require('../pages/surveys/lms/date-of-birth-age.page.js');
const MaritalStatusPage = require('../pages/surveys/lms/marital-status.page.js');
const NationalityPage = require('../pages/surveys/lms/nationality.page.js');
const CountryOfBirthWalesPage = require('../pages/surveys/lms/country-of-birth-wales.page.js');
const CountryOfBirthScotlandPage = require('../pages/surveys/lms/country-of-birth-scotland.page.js');
const CountryOfBirthEnglandPage = require('../pages/surveys/lms/country-of-birth-england.page.js');
const FirstArriveInUkPage = require('../pages/surveys/lms/first-arrive-in-uk.page.js');
const ContinuousInUkPage = require('../pages/surveys/lms/continuous-in-uk.page.js');
const Camyr2BlockPage = require('../pages/surveys/lms/camyr2-block.page.js');
const WhyUkPage = require('../pages/surveys/lms/why-uk.page.js');
const WhyUkContinuousPage = require('../pages/surveys/lms/why-uk-continuous.page.js');
const NationalIdentityPage = require('../pages/surveys/lms/national-identity.page.js');
const UnderstandWelshPage = require('../pages/surveys/lms/understand-welsh.page.js');
const WelshFrequencyPage = require('../pages/surveys/lms/welsh-frequency.page.js');
const EthnicGroupPage = require('../pages/surveys/lms/ethnic-group.page.js');
const WhiteEthnicGroupPage = require('../pages/surveys/lms/white-ethnic-group.page.js');
const MixedEthnicGroupPage = require('../pages/surveys/lms/mixed-ethnic-group.page.js');
const AsianEthnicGroupPage = require('../pages/surveys/lms/asian-ethnic-group.page.js');
const BlackEthnicGroupPage = require('../pages/surveys/lms/black-ethnic-group.page.js');
const OtherEthnicGroupPage = require('../pages/surveys/lms/other-ethnic-group.page.js');
const ReligionPage = require('../pages/surveys/lms/religion.page.js');
const PaidJobQ1Page = require('../pages/surveys/lms/paid-job-q1.page.js');
const SecondJobW2Page = require('../pages/surveys/lms/second-job-w2.page.js');
const TwoJobsJ1EmpStatusW31Page = require('../pages/surveys/lms/two-jobs-j1-emp-status-w3-1.page.js');
const TwoJobsJ2EmpStatusW32Page = require('../pages/surveys/lms/two-jobs-j2-emp-status-w3-2.page.js');
const TwoJobsJ1EmpStatusW31ProxyPage = require('../pages/surveys/lms/two-jobs-j1-emp-status-w3-1-proxy.page.js');
const TwoJobsJ2EmpStatusW32ProxyPage = require('../pages/surveys/lms/two-jobs-j2-emp-status-w3-2-proxy.page.js');
const OneJobEmpStatusW3Page = require('../pages/surveys/lms/one-job-emp-status-w3.page.js');
const OneJobEmpStatusW3ProxyPage = require('../pages/surveys/lms/one-job-emp-status-w3-proxy.page.js');
const NotWorkingCasualWorkNw2Page = require('../pages/surveys/lms/not-working-casual-work-nw-2.page.js');
const WorkingHoursFlex10Page = require('../pages/surveys/lms/working-hours-flex10.page.js');
const WorkingDaysW5Page = require('../pages/surveys/lms/working-days-w5.page.js');
const OvertimeW6Page = require('../pages/surveys/lms/overtime-w6.page.js');
const UnpaidOvertimeW10Page = require('../pages/surveys/lms/unpaid-overtime-w10.page.js');
const PaidOvertimeW11Page = require('../pages/surveys/lms/paid-overtime-w-11.page.js');
const OneJobUsualHoursW12Page = require('../pages/surveys/lms/one-job-usual-hours-w12.page.js');
const OneJobActualHoursW12Page = require('../pages/surveys/lms/one-job-actual-hours-w12.page.js');
const OneJobActualHoursConfirmationW121Page = require('../pages/surveys/lms/one-job-actual-hours-confirmation-w12-1.page.js');
const TwoJobsJ1UnpaidOvertimeW101Page = require('../pages/surveys/lms/two-jobs-j1-unpaid-overtime-w-10-1.page.js');
const TwoJobsJ2UnpaidOvertimeW102Page = require('../pages/surveys/lms/two-jobs-j2-unpaid-overtime-w-10-2.page.js');
const TwoJobsJ1PaidOvertimeW111Page = require('../pages/surveys/lms/two-jobs-j1-paid-overtime-w-11-1.page.js');
const TwoJobsJ2PaidOvertimeW112Page = require('../pages/surveys/lms/two-jobs-j2-paid-overtime-w-11-2.page.js');
const TwoJobsJ1UsualHoursW121Page = require('../pages/surveys/lms/two-jobs-j1-usual-hours-w12-1.page.js');
const TwoJobsJ1ActualHoursW1211Page = require('../pages/surveys/lms/two-jobs-j1-actual-hours-w12-1-1.page.js');
const TwoJobsJ1ActualHoursConfirmationW1211Page = require('../pages/surveys/lms/two-jobs-j1-actual-hours-confirmation-w12-1-1.page.js');
const TwoJobsJ2UsualHoursW122Page = require('../pages/surveys/lms/two-jobs-j2-usual-hours-w12-2.page.js');
const TwoJobsJ2ActualHoursW1222Page = require('../pages/surveys/lms/two-jobs-j2-actual-hours-w12-22.page.js');
const TwoJobsJ2ActualHoursConfirmationW12221Page = require('../pages/surveys/lms/two-jobs-j2-actual-hours-confirmation-w12-22-1.page.js');
const CasualHoursWorkedCasacPage = require('../pages/surveys/lms/casual-hours-worked-casac.page.js');
const OneJobHoursTotalizedW13Page = require('../pages/surveys/lms/one-job-hours-totalized-w13.page.js');
const TwoJobsHoursTotalizedW131Page = require('../pages/surveys/lms/two-jobs-hours-totalized-w13-1.page.js');
const ReasonWhyFewerHoursThanUsualSelfEmployedW14SempPage = require('../pages/surveys/lms/reason-why-fewer-hours-than-usual-self-employed-w14-semp.page.js');
const WhenStartWorkingCurrentBusinessRed6SempPage = require('../pages/surveys/lms/when-start-working-current-business-red6-semp.page.js');
const ReasonWhyFewerHoursThanUsualEmployeeW14EmpPage = require('../pages/surveys/lms/reason-why-fewer-hours-than-usual-employee-w14-emp.page.js');
const ReceivingHalfSalaryW15Page = require('../pages/surveys/lms/receiving-half-salary-w15.page.js');
const ReceivingHalfSalaryW15ProxyPage = require('../pages/surveys/lms/receiving-half-salary-w15-proxy.page.js');
const MainJobWhenStartWorkingCurrentBusinessRed6EmpPage = require('../pages/surveys/lms/main-job-when-start-working-current-business-red6-emp.page.js');
const LeftPaidJobRed3Page = require('../pages/surveys/lms/left-paid-job-red3.page.js');
const DidYouLookForPaidWorkNw3Page = require('../pages/surveys/lms/did-you-look-for-paid-work-nw3.page.js');
const HowLongHaveYouBeenLookingDur1Page = require('../pages/surveys/lms/how-long-have-you-been-looking-dur1.page.js');
const IfOfferedWouldStartNw5Page = require('../pages/surveys/lms/if-offered-would-start-nw5.page.js');
const NotBeAbleToStartReasonNw6Page = require('../pages/surveys/lms/not-be-able-to-start-reason-nw6.page.js');
const NotLookingForWorkReasonNw4Page = require('../pages/surveys/lms/not-looking-for-work-reason-nw4.page.js');
const HowLongHaveYouBeenLookingBeforeStartDur2Page = require('../pages/surveys/lms/how-long-have-you-been-looking-before-start-dur2.page.js');
const UnpaidOrVoluntaryWorkNw7Page = require('../pages/surveys/lms/unpaid-or-voluntary-work-nw7.page.js');
const WhenLeftLastPaidJobRed11Page = require('../pages/surveys/lms/when-left-last-paid-job-red-1-1.page.js');
const ReasonLeavingPaidJobRed4Page = require('../pages/surveys/lms/reason-leaving-paid-job-red4.page.js');
const MadeRedundantRed5Page = require('../pages/surveys/lms/made-redundant-red5.page.js');
const EnrolledEducationCourseQe1Page = require('../pages/surveys/lms/enrolled-education-course-qe1.page.js');
const CourseTypeQe2Page = require('../pages/surveys/lms/course-type-qe2.page.js');
const Attend18Page = require('../pages/surveys/lms/attend18.page.js');
const HouseholdMemberCompletedPage = require('../pages/surveys/lms/household-member-completed.page.js');
const NoPrimaryHouseholdMemberBeginPage = require('../pages/surveys/lms/no-primary-household-member-begin.page.js');
const NoPrimaryProxyCheckPage = require('../pages/surveys/lms/no-primary-proxy-check.page.js');
const NoPrimaryAlternativeAddressPage = require('../pages/surveys/lms/no-primary-alternative-address.page.js');
const NoPrimaryAlternativeAddressTypePage = require('../pages/surveys/lms/no-primary-alternative-address-type.page.js');
const NoPrimaryTimeAwayPage = require('../pages/surveys/lms/no-primary-time-away.page.js');
const NoPrimarySexPage = require('../pages/surveys/lms/no-primary-sex.page.js');
const NoPrimaryDateOfBirthPage = require('../pages/surveys/lms/no-primary-date-of-birth.page.js');
const NoPrimaryDateOfBirthAgePage = require('../pages/surveys/lms/no-primary-date-of-birth-age.page.js');
const NoPrimaryMaritalStatusPage = require('../pages/surveys/lms/no-primary-marital-status.page.js');
const NoPrimaryNationalityPage = require('../pages/surveys/lms/no-primary-nationality.page.js');
const NoPrimaryCountryOfBirthWalesPage = require('../pages/surveys/lms/no-primary-country-of-birth-wales.page.js');
const NoPrimaryCountryOfBirthScotlandPage = require('../pages/surveys/lms/no-primary-country-of-birth-scotland.page.js');
const NoPrimaryCountryOfBirthEnglandPage = require('../pages/surveys/lms/no-primary-country-of-birth-england.page.js');
const NoPrimaryFirstArriveInUkPage = require('../pages/surveys/lms/no-primary-first-arrive-in-uk.page.js');
const NoPrimaryContinuousInUkPage = require('../pages/surveys/lms/no-primary-continuous-in-uk.page.js');
const NoPrimaryCamyr2BlockPage = require('../pages/surveys/lms/no-primary-camyr2-block.page.js');
const NoPrimaryWhyUkPage = require('../pages/surveys/lms/no-primary-why-uk.page.js');
const NoPrimaryWhyUkContinuousPage = require('../pages/surveys/lms/no-primary-why-uk-continuous.page.js');
const NoPrimaryNationalIdentityPage = require('../pages/surveys/lms/no-primary-national-identity.page.js');
const NoPrimaryUnderstandWelshPage = require('../pages/surveys/lms/no-primary-understand-welsh.page.js');
const NoPrimaryWelshFrequencyPage = require('../pages/surveys/lms/no-primary-welsh-frequency.page.js');
const NoPrimaryEthnicGroupPage = require('../pages/surveys/lms/no-primary-ethnic-group.page.js');
const NoPrimaryWhiteEthnicGroupPage = require('../pages/surveys/lms/no-primary-white-ethnic-group.page.js');
const NoPrimaryMixedEthnicGroupPage = require('../pages/surveys/lms/no-primary-mixed-ethnic-group.page.js');
const NoPrimaryAsianEthnicGroupPage = require('../pages/surveys/lms/no-primary-asian-ethnic-group.page.js');
const NoPrimaryBlackEthnicGroupPage = require('../pages/surveys/lms/no-primary-black-ethnic-group.page.js');
const NoPrimaryOtherEthnicGroupPage = require('../pages/surveys/lms/no-primary-other-ethnic-group.page.js');
const NoPrimaryReligionPage = require('../pages/surveys/lms/no-primary-religion.page.js');
const NoPrimaryPaidJobQ1Page = require('../pages/surveys/lms/no-primary-paid-job-q1.page.js');
const NoPrimarySecondJobW2Page = require('../pages/surveys/lms/no-primary-second-job-w2.page.js');
const NoPrimaryTwoJobsJ1EmpStatusW31Page = require('../pages/surveys/lms/no-primary-two-jobs-j1-emp-status-w3-1.page.js');
const NoPrimaryTwoJobsJ2EmpStatusW32Page = require('../pages/surveys/lms/no-primary-two-jobs-j2-emp-status-w3-2.page.js');
const NoPrimaryTwoJobsJ1EmpStatusW31ProxyPage = require('../pages/surveys/lms/no-primary-two-jobs-j1-emp-status-w3-1-proxy.page.js');
const NoPrimaryTwoJobsJ2EmpStatusW32ProxyPage = require('../pages/surveys/lms/no-primary-two-jobs-j2-emp-status-w3-2-proxy.page.js');
const NoPrimaryOneJobEmpStatusW3Page = require('../pages/surveys/lms/no-primary-one-job-emp-status-w3.page.js');
const NoPrimaryOneJobEmpStatusW3ProxyPage = require('../pages/surveys/lms/no-primary-one-job-emp-status-w3-proxy.page.js');
const NoPrimaryNotWorkingCasualWorkNw2Page = require('../pages/surveys/lms/no-primary-not-working-casual-work-nw-2.page.js');
const NoPrimaryWorkingHoursFlex10Page = require('../pages/surveys/lms/no-primary-working-hours-flex10.page.js');
const NoPrimaryWorkingDaysW5Page = require('../pages/surveys/lms/no-primary-working-days-w5.page.js');
const NoPrimaryOvertimeW6Page = require('../pages/surveys/lms/no-primary-overtime-w6.page.js');
const NoPrimaryUnpaidOvertimeW10Page = require('../pages/surveys/lms/no-primary-unpaid-overtime-w10.page.js');
const NoPrimaryPaidOvertimeW11Page = require('../pages/surveys/lms/no-primary-paid-overtime-w-11.page.js');
const NoPrimaryOneJobUsualHoursW12Page = require('../pages/surveys/lms/no-primary-one-job-usual-hours-w12.page.js');
const NoPrimaryOneJobActualHoursW12Page = require('../pages/surveys/lms/no-primary-one-job-actual-hours-w12.page.js');
const NoPrimaryOneJobActualHoursConfirmationW121Page = require('../pages/surveys/lms/no-primary-one-job-actual-hours-confirmation-w12-1.page.js');
const NoPrimaryTwoJobsJ1UnpaidOvertimeW101Page = require('../pages/surveys/lms/no-primary-two-jobs-j1-unpaid-overtime-w-10-1.page.js');
const NoPrimaryTwoJobsJ2UnpaidOvertimeW102Page = require('../pages/surveys/lms/no-primary-two-jobs-j2-unpaid-overtime-w-10-2.page.js');
const NoPrimaryTwoJobsJ1PaidOvertimeW111Page = require('../pages/surveys/lms/no-primary-two-jobs-j1-paid-overtime-w-11-1.page.js');
const NoPrimaryTwoJobsJ2PaidOvertimeW112Page = require('../pages/surveys/lms/no-primary-two-jobs-j2-paid-overtime-w-11-2.page.js');
const NoPrimaryTwoJobsJ1UsualHoursW121Page = require('../pages/surveys/lms/no-primary-two-jobs-j1-usual-hours-w12-1.page.js');
const NoPrimaryTwoJobsJ1ActualHoursW1211Page = require('../pages/surveys/lms/no-primary-two-jobs-j1-actual-hours-w12-1-1.page.js');
const NoPrimaryTwoJobsJ1ActualHoursConfirmationW1211Page = require('../pages/surveys/lms/no-primary-two-jobs-j1-actual-hours-confirmation-w12-1-1.page.js');
const NoPrimaryTwoJobsJ2UsualHoursW122Page = require('../pages/surveys/lms/no-primary-two-jobs-j2-usual-hours-w12-2.page.js');
const NoPrimaryTwoJobsJ2ActualHoursW1222Page = require('../pages/surveys/lms/no-primary-two-jobs-j2-actual-hours-w12-22.page.js');
const NoPrimaryTwoJobsJ2ActualHoursConfirmationW12221Page = require('../pages/surveys/lms/no-primary-two-jobs-j2-actual-hours-confirmation-w12-22-1.page.js');
const NoPrimaryCasualHoursWorkedCasacPage = require('../pages/surveys/lms/no-primary-casual-hours-worked-casac.page.js');
const NoPrimaryOneJobHoursTotalizedW13Page = require('../pages/surveys/lms/no-primary-one-job-hours-totalized-w13.page.js');
const NoPrimaryTwoJobsHoursTotalizedW131Page = require('../pages/surveys/lms/no-primary-two-jobs-hours-totalized-w13-1.page.js');
const NoPrimaryReasonWhyFewerHoursThanUsualSelfEmployedW14SempPage = require('../pages/surveys/lms/no-primary-reason-why-fewer-hours-than-usual-self-employed-w14-semp.page.js');
const NoPrimaryWhenStartWorkingCurrentBusinessRed6SempPage = require('../pages/surveys/lms/no-primary-when-start-working-current-business-red6-semp.page.js');
const NoPrimaryReasonWhyFewerHoursThanUsualEmployeeW14EmpPage = require('../pages/surveys/lms/no-primary-reason-why-fewer-hours-than-usual-employee-w14-emp.page.js');
const NoPrimaryReceivingHalfSalaryW15Page = require('../pages/surveys/lms/no-primary-receiving-half-salary-w15.page.js');
const NoPrimaryReceivingHalfSalaryW15ProxyPage = require('../pages/surveys/lms/no-primary-receiving-half-salary-w15-proxy.page.js');
const NoPrimaryMainJobWhenStartWorkingCurrentBusinessRed6EmpPage = require('../pages/surveys/lms/no-primary-main-job-when-start-working-current-business-red6-emp.page.js');
const NoPrimaryLeftPaidJobRed3Page = require('../pages/surveys/lms/no-primary-left-paid-job-red3.page.js');
const NoPrimaryDidYouLookForPaidWorkNw3Page = require('../pages/surveys/lms/no-primary-did-you-look-for-paid-work-nw3.page.js');
const NoPrimaryHowLongHaveYouBeenLookingDur1Page = require('../pages/surveys/lms/no-primary-how-long-have-you-been-looking-dur1.page.js');
const NoPrimaryIfOfferedWouldStartNw5Page = require('../pages/surveys/lms/no-primary-if-offered-would-start-nw5.page.js');
const NoPrimaryNotBeAbleToStartReasonNw6Page = require('../pages/surveys/lms/no-primary-not-be-able-to-start-reason-nw6.page.js');
const NoPrimaryNotLookingForWorkReasonNw4Page = require('../pages/surveys/lms/no-primary-not-looking-for-work-reason-nw4.page.js');
const NoPrimaryHowLongHaveYouBeenLookingBeforeStartDur2Page = require('../pages/surveys/lms/no-primary-how-long-have-you-been-looking-before-start-dur2.page.js');
const NoPrimaryUnpaidOrVoluntaryWorkNw7Page = require('../pages/surveys/lms/no-primary-unpaid-or-voluntary-work-nw7.page.js');
const NoPrimaryWhenLeftLastPaidJobRed11Page = require('../pages/surveys/lms/no-primary-when-left-last-paid-job-red-1-1.page.js');
const NoPrimaryReasonLeavingPaidJobRed4Page = require('../pages/surveys/lms/no-primary-reason-leaving-paid-job-red4.page.js');
const NoPrimaryMadeRedundantRed5Page = require('../pages/surveys/lms/no-primary-made-redundant-red5.page.js');
const NoPrimaryEnrolledEducationCourseQe1Page = require('../pages/surveys/lms/no-primary-enrolled-education-course-qe1.page.js');
const NoPrimaryCourseTypeQe2Page = require('../pages/surveys/lms/no-primary-course-type-qe2.page.js');
const NoPrimaryAttend18Page = require('../pages/surveys/lms/no-primary-attend18.page.js');
const NoPrimaryHouseholdMemberCompletedPage = require('../pages/surveys/lms/no-primary-household-member-completed.page.js');
const ThankYouBlockPage = require('../pages/surveys/lms/thank-you-block.page.js');
const FeedbackBlockPage = require('../pages/surveys/lms/feedback-block.page.js');

describe('LMS', function() {

  const lms_schema = 'lms_2.json';

  it('@watch Large Path', function() {
    return helpers.openQuestionnaire(lms_schema).then(() => {
      return browser
        .setValue(PrimaryHouseholdMemberBlockPage.primaryHouseholdMemberFirstName(), 'PrimaryFirst')
        .setValue(PrimaryHouseholdMemberBlockPage.primaryHouseholdMemberLastName(), 'PrimaryLast')
        .click(PrimaryHouseholdMemberBlockPage.submit())

        .click(AddressCheckBlockPage.yes())
        .click(AddressCheckBlockPage.submit())

        // 10 People
        .then(function(data) { return repeatAddingHousehold(20); })

        .click(OtherHouseholdMemberAnyoneElseBlockPage.no())
        .click(OtherHouseholdMemberAnyoneElseBlockPage.submit())

        .click(StudentHouseholdMemberAnyoneElseBlockPage.no())
        .click(StudentHouseholdMemberAnyoneElseBlockPage.submit())

        .click(HouseholdSummaryPage.submit())
        .click(ShareCookingBlockPage.yes())
        .click(ShareCookingBlockPage.submit())
        .click(ShareLivingBlockPage.yes())
        .click(ShareLivingBlockPage.submit())

        .then(function(data) { return completeRelationships(20); })

        .then(function(data) { return completeHouseholdMember(21); })

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

        .setValue(TwoJobsJ1UnpaidOvertimeW101Page.answer(), 10)
        .click(TwoJobsJ1UnpaidOvertimeW101Page.submit())

        .setValue(TwoJobsJ2UnpaidOvertimeW102Page.answer(), 10)
        .click(TwoJobsJ2UnpaidOvertimeW102Page.submit())

        .setValue(TwoJobsJ1PaidOvertimeW111Page.answer(), 5)
        .click(TwoJobsJ1PaidOvertimeW111Page.submit())

        .setValue(TwoJobsJ2PaidOvertimeW112Page.answer(), 5)
        .click(TwoJobsJ2PaidOvertimeW112Page.submit())

        .setValue(TwoJobsJ1UsualHoursW121Page.answer(), 30)
        .click(TwoJobsJ1UsualHoursW121Page.submit())

        .setValue(TwoJobsJ1ActualHoursW1211Page.answer(), 30)
        .click(TwoJobsJ1UsualHoursW121Page.submit())

        .setValue(TwoJobsJ2UsualHoursW122Page.answer(), 20)
        .click(TwoJobsJ2UsualHoursW122Page.submit())

        .setValue(TwoJobsJ2ActualHoursW1222Page.answer(), 20)
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

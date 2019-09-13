import React from 'react';
import posed from 'react-native-pose';
import SignInWithPhone from './SignInWithPhone';
import AuthCodeVerification from './AuthCodeVerification';
import UserInformationConfirmation from './UserInformationConfirmation';

const AnimatedAuthStepContainer = posed.View({
  visible: { x: 0, opacity: 1, transition: { duration: 200 } },
  hidden: { x: -600, opacity: 0, transition: { duration: 200 } },
});

export const EnterPhoneNumberStep = ({
  authStep,
  theme,
  onSetFocusToPhoneInput,
  onSignInWithAnotherMethods,
  AUTH_STEPS,
}: {
  authStep: string;
  theme: any;
  onSetFocusToPhoneInput: any;
  onSignInWithAnotherMethods: any;
  AUTH_STEPS: any;
}) => {
  return (
    <AnimatedAuthStepContainer
      style={{ height: authStep === AUTH_STEPS.ENTER_PHONE_NUMBER ? 'auto' : 0 }}
      pose={authStep === AUTH_STEPS.ENTER_PHONE_NUMBER ? 'visible' : 'hidden'}
    >
      <SignInWithPhone
        theme={theme}
        onSignInWithAnotherMethods={onSignInWithAnotherMethods}
        onInputFocus={() => onSetFocusToPhoneInput(true)}
      />
    </AnimatedAuthStepContainer>
  );
};

export const VerifyPhoneNumberStep = ({
  theme,
  authStep,
  onNextAuthStep,
  AUTH_STEPS,
}: {
  theme: any;
  onNextAuthStep: any;
  authStep: string;
  AUTH_STEPS: any;
}) => (
  <AnimatedAuthStepContainer
    style={{ height: authStep === AUTH_STEPS.VERIFY_PHONE_NUMBER ? 'auto' : 0 }}
    pose={authStep === AUTH_STEPS.VERIFY_PHONE_NUMBER ? 'visible' : 'hidden'}
  >
    <AuthCodeVerification
      onNextAuthStep={onNextAuthStep}
      theme={theme}
      autoFocus={authStep === AUTH_STEPS.VERIFY_PHONE_NUMBER}
    />
  </AnimatedAuthStepContainer>
);

export const UserInformationStep = ({ authStep, AUTH_STEPS }: { authStep: string; AUTH_STEPS: any }) => (
  <AnimatedAuthStepContainer
    style={{ height: authStep === AUTH_STEPS.USER_INFORMATION_CONFIRMATION ? 'auto' : 0 }}
    pose={authStep === AUTH_STEPS.USER_INFORMATION_CONFIRMATION ? 'visible' : 'hidden'}
  >
    <UserInformationConfirmation autoFocus={authStep === AUTH_STEPS.USER_INFORMATION_CONFIRMATION} />
  </AnimatedAuthStepContainer>
);

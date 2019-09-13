import React from 'react';
import Text from '../../components/Typography/Text';

export default function AuthStepDescription({ authStep, AUTH_STEPS }) {
  return (
    <>
      {authStep === AUTH_STEPS.ENTER_PHONE_NUMBER && (
        <Text color={'gray'} textProps={{ style: { flex: 4 } }}>
          A verify code will send to your phone.
        </Text>
      )}
      {authStep === AUTH_STEPS.VERIFY_PHONE_NUMBER && (
        <Text color={'gray'} textProps={{ style: { flex: 4 } }}>
          Enter the code we have sent to your phone.
        </Text>
      )}
      {authStep === AUTH_STEPS.USER_INFORMATION_CONFIRMATION && (
        <Text color={'gray'} textProps={{ style: { flex: 4 } }}>
          Let's tell us about you. It's last step.
        </Text>
      )}
      {authStep === AUTH_STEPS.SIGN_IN_INFORMATION && (
        <Text color={'gray'} textProps={{ style: { flex: 4 } }}>
          You can sign in with email and password.
        </Text>
      )}
    </>
  );
}

import React from 'react';
import Text from '../../components/Typography/Text';
export default function AuthStepDescription(_a) {
    var authStep = _a.authStep, AUTH_STEPS = _a.AUTH_STEPS;
    return (React.createElement(React.Fragment, null,
        authStep === AUTH_STEPS.ENTER_PHONE_NUMBER && (React.createElement(Text, { color: 'gray', textProps: { style: { flex: 4 } } }, "A verify code will send to your phone.")),
        authStep === AUTH_STEPS.VERIFY_PHONE_NUMBER && (React.createElement(Text, { color: 'gray', textProps: { style: { flex: 4 } } }, "Enter the code we have sent to your phone.")),
        authStep === AUTH_STEPS.USER_INFORMATION_CONFIRMATION && (React.createElement(Text, { color: 'gray', textProps: { style: { flex: 4 } } }, "Let's tell us about you. It's last step.")),
        authStep === AUTH_STEPS.SIGN_IN_INFORMATION && (React.createElement(Text, { color: 'gray', textProps: { style: { flex: 4 } } }, "You can sign in with email and password."))));
}
//# sourceMappingURL=AuthStepDescription.js.map
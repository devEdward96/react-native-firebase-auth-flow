import React from 'react';
import posed from 'react-native-pose';
import SignInWithPhone from './SignInWithPhone';
import AuthCodeVerification from './AuthCodeVerification';
import UserInformationConfirmation from './UserInformationConfirmation';
var AnimatedAuthStepContainer = posed.View({
    visible: { x: 0, opacity: 1, transition: { duration: 200 } },
    hidden: { x: -600, opacity: 0, transition: { duration: 200 } },
});
export var EnterPhoneNumberStep = function (_a) {
    var authStep = _a.authStep, onSetFocusToPhoneInput = _a.onSetFocusToPhoneInput, onSignInWithAnotherMethods = _a.onSignInWithAnotherMethods, AUTH_STEPS = _a.AUTH_STEPS;
    return (React.createElement(AnimatedAuthStepContainer, { style: { height: authStep === AUTH_STEPS.ENTER_PHONE_NUMBER ? 'auto' : 0 }, pose: authStep === AUTH_STEPS.ENTER_PHONE_NUMBER ? 'visible' : 'hidden' },
        React.createElement(SignInWithPhone, { onSignInWithAnotherMethods: onSignInWithAnotherMethods, onInputFocus: function () { return onSetFocusToPhoneInput(true); } })));
};
export var VerifyPhoneNumberStep = function (_a) {
    var theme = _a.theme, authStep = _a.authStep, onNextAuthStep = _a.onNextAuthStep, AUTH_STEPS = _a.AUTH_STEPS;
    return (React.createElement(AnimatedAuthStepContainer, { style: { height: authStep === AUTH_STEPS.VERIFY_PHONE_NUMBER ? 'auto' : 0 }, pose: authStep === AUTH_STEPS.VERIFY_PHONE_NUMBER ? 'visible' : 'hidden' },
        React.createElement(AuthCodeVerification, { onNextAuthStep: onNextAuthStep, theme: theme, autoFocus: authStep === AUTH_STEPS.VERIFY_PHONE_NUMBER })));
};
export var UserInformationStep = function (_a) {
    var authStep = _a.authStep, AUTH_STEPS = _a.AUTH_STEPS;
    return (React.createElement(AnimatedAuthStepContainer, { style: { height: authStep === AUTH_STEPS.USER_INFORMATION_CONFIRMATION ? 'auto' : 0 }, pose: authStep === AUTH_STEPS.USER_INFORMATION_CONFIRMATION ? 'visible' : 'hidden' },
        React.createElement(UserInformationConfirmation, { autoFocus: authStep === AUTH_STEPS.USER_INFORMATION_CONFIRMATION })));
};
//# sourceMappingURL=AuthSteps.js.map
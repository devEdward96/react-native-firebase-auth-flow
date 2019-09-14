var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { View, KeyboardAvoidingView, Dimensions, Platform, NativeModules, StatusBar, Keyboard } from 'react-native';
import posed from 'react-native-pose';
import { Snackbar } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import Styled from './Styled';
import AuthContextProvider, { AuthContext } from '../../contexts/AuthContext';
import { EnterPhoneNumberStep, VerifyPhoneNumberStep, UserInformationStep } from './AuthSteps';
import Brand from './Brand';
import SubmitButton from './SubmitButton';
import SignInWithAnotherMethods from './SignInWithAnotherMethods';
import defaultTheme from '../../themes/default';
var deviceLanguage = Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
console.log(deviceLanguage);
export var DefaultSignInTheme = defaultTheme;
var AnimatedHeaderWithCover = posed.View({
    visible: { y: 0, opacity: 1 },
    hidden: { y: -600, opacity: 0 },
});
var AnimatedHeaderWithActions = posed.View({
    visible: { x: 0 },
    hidden: { x: -60 },
});
var AnimatedSignInWithAnotherMethods = posed.View({
    visible: { y: 0 },
    hidden: { y: 240 },
});
var AUTH_STEPS = {
    ENTER_PHONE_NUMBER: 'ENTER_PHONE_NUMBER',
    VERIFY_PHONE_NUMBER: 'VERIFY_PHONE_NUMBER',
    USER_INFORMATION_CONFIRMATION: 'USER_INFORMATION_CONFIRMATION',
};
function getSnackbarColor(type, theme) {
    if (type === 'success')
        return theme.colors.green;
    if (type === 'error')
        return theme.colors.red;
    return theme.colors.black;
}
var SignIn = /** @class */ (function (_super) {
    __extends(SignIn, _super);
    function SignIn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            authStep: AUTH_STEPS.ENTER_PHONE_NUMBER,
            focusToPhoneInput: false,
            openSignInWithAnotherMethods: false,
        };
        _this.onNextAuthStep = function () {
            var currentAuthStepIndex = Object.keys(AUTH_STEPS).findIndex(function (key) { return key === _this.state.authStep; });
            _this.setState({ authStep: AUTH_STEPS[Object.keys(AUTH_STEPS)[currentAuthStepIndex + 1]] });
        };
        _this.onBackAuthStep = function () {
            var currentAuthStepIndex = Object.keys(AUTH_STEPS).findIndex(function (key) { return key === _this.state.authStep; });
            if (currentAuthStepIndex === 0) {
                Keyboard.dismiss();
                return _this.setState({
                    authStep: AUTH_STEPS.ENTER_PHONE_NUMBER,
                    focusToPhoneInput: false,
                    openSignInWithAnotherMethods: false,
                });
            }
            _this.setState({ authStep: AUTH_STEPS[Object.keys(AUTH_STEPS)[currentAuthStepIndex - 1]] });
        };
        _this.onRenderBrand = function () {
            if (_this.props.brand)
                return _this.props.brand;
            return (React.createElement(View, { style: {
                    height: Dimensions.get('window').height * 0.7,
                    backgroundColor: _this.props.theme.colors.primary,
                } },
                React.createElement(Brand, null)));
        };
        return _this;
    }
    SignIn.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (!this.state.focusToPhoneInput && !this.state.openSignInWithAnotherMethods) {
            if (this.props.onChangeStatusbarStyle) {
                this.props.onChangeStatusbarStyle('light');
            }
        }
        if (this.state.focusToPhoneInput || this.state.openSignInWithAnotherMethods) {
            if (this.props.onChangeStatusbarStyle) {
                this.props.onChangeStatusbarStyle('dark');
            }
        }
    };
    SignIn.prototype.render = function () {
        var _this = this;
        var _a = this.state, focusToPhoneInput = _a.focusToPhoneInput, authStep = _a.authStep, openSignInWithAnotherMethods = _a.openSignInWithAnotherMethods;
        var _b = this.props, theme = _b.theme, firebase = _b.firebase, onLoggedIn = _b.onLoggedIn, signUpKeyboardOffset = _b.signUpKeyboardOffset, privacyUrl = _b.privacyUrl;
        return (React.createElement(PaperProvider, { theme: __assign({}, DefaultTheme, { colors: __assign({}, DefaultTheme.colors, { primary: theme.colors.primary }), fonts: __assign({}, DefaultTheme.fonts) }) },
            React.createElement(ThemeProvider, { theme: theme },
                React.createElement(AuthContextProvider, { firebase: firebase, onLoggedIn: onLoggedIn },
                    React.createElement(View, { style: { flex: 1 } },
                        Platform.OS === 'ios' && (React.createElement(StatusBar, { barStyle: !focusToPhoneInput && !openSignInWithAnotherMethods ? 'light-content' : 'dark-content' })),
                        React.createElement(AnimatedHeaderWithCover, { pose: !focusToPhoneInput && !openSignInWithAnotherMethods ? 'visible' : 'hidden' }, !focusToPhoneInput && !openSignInWithAnotherMethods && this.onRenderBrand()),
                        React.createElement(AnimatedHeaderWithActions, { style: {
                                height: focusToPhoneInput || openSignInWithAnotherMethods ? 36 : 0,
                                marginTop: focusToPhoneInput || openSignInWithAnotherMethods ? (Platform.OS === 'ios' ? 48 : 12) : 0,
                            }, pose: focusToPhoneInput || openSignInWithAnotherMethods ? 'visible' : 'hidden' }, (focusToPhoneInput || openSignInWithAnotherMethods) && (React.createElement(Styled.SignIn.HeaderActionButton, { onPress: this.onBackAuthStep, underlayColor: '#f1f1f1' },
                            React.createElement(Styled.SignIn.HeaderIcon, { name: 'arrow-left' })))),
                        React.createElement(KeyboardAvoidingView, { style: { flex: 1 }, behavior: Platform.OS === 'ios' ? 'padding' : 'padding', enabled: Platform.OS === 'ios' },
                            React.createElement(Styled.SignIn.GetStarted, null,
                                !openSignInWithAnotherMethods && (React.createElement(EnterPhoneNumberStep, { authStep: authStep, theme: theme, onSignInWithAnotherMethods: function () {
                                        return _this.setState({ openSignInWithAnotherMethods: true, focusToPhoneInput: false });
                                    }, AUTH_STEPS: AUTH_STEPS, onSetFocusToPhoneInput: function () { return _this.setState({ focusToPhoneInput: true }); } })),
                                !openSignInWithAnotherMethods && (React.createElement(VerifyPhoneNumberStep, { onNextAuthStep: this.onNextAuthStep, theme: theme, authStep: authStep, AUTH_STEPS: AUTH_STEPS })),
                                !openSignInWithAnotherMethods && React.createElement(UserInformationStep, { authStep: authStep, AUTH_STEPS: AUTH_STEPS }),
                                focusToPhoneInput && (React.createElement(SubmitButton, { theme: theme, AUTH_STEPS: AUTH_STEPS, authStep: authStep, onNextAuthStep: this.onNextAuthStep })),
                                React.createElement(AnimatedSignInWithAnotherMethods, { pose: openSignInWithAnotherMethods ? 'visible' : 'hidden' }, openSignInWithAnotherMethods && (React.createElement(SignInWithAnotherMethods, { privacyUrl: privacyUrl, theme: theme, signUpKeyboardOffset: signUpKeyboardOffset })))))),
                    React.createElement(AuthContext.Consumer, null, function (context) { return (React.createElement(Snackbar, { visible: !!context.globalMessage, onDismiss: function () { return context.onDisplayGlobalMessage(null); }, style: context.globalMessage
                            ? { backgroundColor: getSnackbarColor(context.globalMessage.type, theme) }
                            : {} }, context.globalMessage && context.globalMessage.message)); })))));
    };
    SignIn.navigationOptions = { header: null };
    return SignIn;
}(React.PureComponent));
export default SignIn;
SignIn.navigationOptions = {
    header: null,
};
//# sourceMappingURL=SignIn.js.map
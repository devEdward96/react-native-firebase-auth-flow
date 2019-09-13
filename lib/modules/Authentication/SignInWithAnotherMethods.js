import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Styled from './Styled';
import BaseTabBar from '../../components/Tabs/BaseTabBar';
import EmailPasswordSignInForm from './EmailPasswordSignInForm';
import EmailPasswordSignUpForm from './EmailPasswordSignUpForm';
var SignInWithAnotherMethods = function (props) {
    return (React.createElement(Styled.SignInWithAnotherMethods.Container, { style: { height: Dimensions.get('window').height - 160 } },
        React.createElement(ScrollableTabView, { renderTabBar: function () { return (React.createElement(BaseTabBar, { initialTabs: [{ icon: null, label: 'SIGN IN' }, { icon: null, label: 'SIGN UP' }] })); } },
            React.createElement(ScrollView, { keyboardShouldPersistTaps: 'handled' },
                React.createElement(Styled.SignInWithAnotherMethods.SignIn, null,
                    React.createElement(EmailPasswordSignInForm, { theme: props.theme }))),
            React.createElement(ScrollView, { keyboardShouldPersistTaps: 'handled' },
                React.createElement(KeyboardAvoidingView, { style: { flex: 1 }, behavior: Platform.OS === 'ios' ? 'position' : 'padding', keyboardVerticalOffset: props.signUpKeyboardOffset || 120 },
                    React.createElement(Styled.SignInWithAnotherMethods.SignUp, null,
                        React.createElement(EmailPasswordSignUpForm, { theme: props.theme })))))));
};
export default SignInWithAnotherMethods;
//# sourceMappingURL=SignInWithAnotherMethods.js.map
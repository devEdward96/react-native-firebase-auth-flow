import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Styled from './Styled';
import BaseTabBar from '../../components/Tabs/BaseTabBar';
import EmailPasswordSignInForm from './EmailPasswordSignInForm';
import EmailPasswordSignUpForm from './EmailPasswordSignUpForm';

interface BaseProps {
  testId?: string;
  theme: any;
  privacyUrl: string;
  signUpKeyboardOffset?: number;
}

const SignInWithAnotherMethods = (props: BaseProps) => {
  return (
    <Styled.SignInWithAnotherMethods.Container style={{ height: Dimensions.get('window').height - 160 }}>
      <ScrollableTabView
        renderTabBar={() => (
          <BaseTabBar initialTabs={[{ icon: null, label: 'SIGN IN' }, { icon: null, label: 'SIGN UP' }]} />
        )}
      >
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <Styled.SignInWithAnotherMethods.SignIn>
            <EmailPasswordSignInForm theme={props.theme} />
          </Styled.SignInWithAnotherMethods.SignIn>
        </ScrollView>
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'position' : 'padding'}
            keyboardVerticalOffset={props.signUpKeyboardOffset || 120}
          >
            <Styled.SignInWithAnotherMethods.SignUp>
              <EmailPasswordSignUpForm privacyUrl={props.privacyUrl} theme={props.theme} />
            </Styled.SignInWithAnotherMethods.SignUp>
          </KeyboardAvoidingView>
        </ScrollView>
      </ScrollableTabView>
    </Styled.SignInWithAnotherMethods.Container>
  );
};

export default SignInWithAnotherMethods;

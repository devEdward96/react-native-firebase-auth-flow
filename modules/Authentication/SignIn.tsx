import React from 'react';
import { ScrollView, View, KeyboardAvoidingView, Platform, NativeModules, StatusBar, Keyboard } from 'react-native';
import posed from 'react-native-pose';
import { Snackbar } from 'react-native-paper';
import { Firebase, RNFirebase } from 'react-native-firebase';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import Styled from './Styled';
import AuthContextProvider, { AuthContext } from '../../contexts/AuthContext';
import { EnterPhoneNumberStep, VerifyPhoneNumberStep, UserInformationStep } from './AuthSteps';
import Brand from './Brand';
import SubmitButton from './SubmitButton';
import SignInWithAnotherMethods from './SignInWithAnotherMethods';
import defaultTheme from '../../themes/default';

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

console.log(deviceLanguage);

export const DefaultSignInTheme = defaultTheme;

const AnimatedHeaderWithCover = posed.View({
  visible: { y: 0, opacity: 1 },
  hidden: { y: -600, opacity: 0 },
});

const AnimatedHeaderWithActions = posed.View({
  visible: { x: 0 },
  hidden: { x: -60 },
});

const AnimatedSignInWithAnotherMethods = posed.View({
  visible: { y: 0 },
  hidden: { y: 240 },
});

const AUTH_STEPS = {
  ENTER_PHONE_NUMBER: 'ENTER_PHONE_NUMBER',
  VERIFY_PHONE_NUMBER: 'VERIFY_PHONE_NUMBER',
  USER_INFORMATION_CONFIRMATION: 'USER_INFORMATION_CONFIRMATION',
};

function getSnackbarColor(type, theme) {
  if (type === 'success') return theme.colors.green;
  if (type === 'error') return theme.colors.red;
  return theme.colors.black;
}

interface SignInProps {
  firebase: Firebase;
  onLoggedIn: (user: RNFirebase.User) => void;
  theme: typeof defaultTheme;
  brand?: React.ReactElement<any>;
}

interface SignInStates {
  authStep: string;
  focusToPhoneInput: boolean;
  openSignInWithAnotherMethods: boolean;
}

export default class SignIn extends React.PureComponent<SignInProps, SignInStates> {
  static navigationOptions = { header: null };

  state = {
    authStep: AUTH_STEPS.ENTER_PHONE_NUMBER,
    focusToPhoneInput: false,
    openSignInWithAnotherMethods: false,
  };

  onNextAuthStep = () => {
    const currentAuthStepIndex = Object.keys(AUTH_STEPS).findIndex(key => key === this.state.authStep);
    this.setState({ authStep: AUTH_STEPS[Object.keys(AUTH_STEPS)[currentAuthStepIndex + 1]] });
  };

  onBackAuthStep = () => {
    const currentAuthStepIndex = Object.keys(AUTH_STEPS).findIndex(key => key === this.state.authStep);
    if (currentAuthStepIndex === 0) {
      Keyboard.dismiss();
      return this.setState({
        authStep: AUTH_STEPS.ENTER_PHONE_NUMBER,
        focusToPhoneInput: false,
        openSignInWithAnotherMethods: false,
      });
    }
    this.setState({ authStep: AUTH_STEPS[Object.keys(AUTH_STEPS)[currentAuthStepIndex - 1]] });
  };

  onRenderBrand = () => {
    if (this.props.brand) return this.props.brand;
    return (
      <View
        style={{
          height: 600,
          backgroundColor: this.props.theme.colors.primary,
        }}
      >
        <Brand />
      </View>
    );
  };

  render() {
    const { focusToPhoneInput, authStep, openSignInWithAnotherMethods } = this.state;
    const { theme, firebase, onLoggedIn } = this.props;
    return (
      <PaperProvider
        theme={{
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, primary: theme.colors.primary },
          fonts: {
            ...DefaultTheme.fonts,
          },
        }}
      >
        <ThemeProvider theme={theme}>
          <AuthContextProvider firebase={firebase} onLoggedIn={onLoggedIn}>
            <ScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps={'handled'}>
              {Platform.OS === 'ios' && (
                <StatusBar
                  barStyle={!focusToPhoneInput && !openSignInWithAnotherMethods ? 'light-content' : 'dark-content'}
                />
              )}
              <AnimatedHeaderWithCover
                pose={!focusToPhoneInput && !openSignInWithAnotherMethods ? 'visible' : 'hidden'}
              >
                {!focusToPhoneInput && !openSignInWithAnotherMethods && this.onRenderBrand()}
              </AnimatedHeaderWithCover>
              <AnimatedHeaderWithActions
                style={{
                  height: focusToPhoneInput || openSignInWithAnotherMethods ? 60 : 0,
                  marginTop: focusToPhoneInput || openSignInWithAnotherMethods ? 48 : 0,
                }}
                pose={focusToPhoneInput || openSignInWithAnotherMethods ? 'visible' : 'hidden'}
              >
                {(focusToPhoneInput || openSignInWithAnotherMethods) && (
                  <Styled.SignIn.HeaderActionButton onPress={this.onBackAuthStep} underlayColor={'#f1f1f1'}>
                    <Styled.SignIn.HeaderIcon name={'arrow-left'} />
                  </Styled.SignIn.HeaderActionButton>
                )}
              </AnimatedHeaderWithActions>
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
                enabled
              >
                <Styled.SignIn.GetStarted>
                  {!openSignInWithAnotherMethods && (
                    <EnterPhoneNumberStep
                      authStep={authStep}
                      onSignInWithAnotherMethods={() =>
                        this.setState({ openSignInWithAnotherMethods: true, focusToPhoneInput: false })
                      }
                      AUTH_STEPS={AUTH_STEPS}
                      onSetFocusToPhoneInput={() => this.setState({ focusToPhoneInput: true })}
                    />
                  )}
                  {!openSignInWithAnotherMethods && (
                    <VerifyPhoneNumberStep
                      onNextAuthStep={this.onNextAuthStep}
                      theme={theme}
                      authStep={authStep}
                      AUTH_STEPS={AUTH_STEPS}
                    />
                  )}
                  {!openSignInWithAnotherMethods && <UserInformationStep authStep={authStep} AUTH_STEPS={AUTH_STEPS} />}
                  {focusToPhoneInput && (
                    <SubmitButton AUTH_STEPS={AUTH_STEPS} authStep={authStep} onNextAuthStep={this.onNextAuthStep} />
                  )}
                  <AnimatedSignInWithAnotherMethods pose={openSignInWithAnotherMethods ? 'visible' : 'hidden'}>
                    {openSignInWithAnotherMethods && <SignInWithAnotherMethods />}
                  </AnimatedSignInWithAnotherMethods>
                </Styled.SignIn.GetStarted>
              </KeyboardAvoidingView>
            </ScrollView>
            <AuthContext.Consumer>
              {context => (
                <Snackbar
                  visible={!!context.globalMessage}
                  onDismiss={() => context.onDisplayGlobalMessage(null)}
                  style={
                    context.globalMessage
                      ? { backgroundColor: getSnackbarColor(context.globalMessage.type, theme) }
                      : {}
                  }
                >
                  {context.globalMessage && context.globalMessage.message}
                </Snackbar>
              )}
            </AuthContext.Consumer>
          </AuthContextProvider>
        </ThemeProvider>
      </PaperProvider>
    );
  }
}

SignIn.navigationOptions = {
  header: null,
};

import React, { Component } from 'react';
import { Firebase, RNFirebase } from 'react-native-firebase';

export interface AuthContextInterface {
  phoneNumber?: string;
  globalMessage?: GlobalMessage;
  completingStep: boolean;
  phoneNumberConfirmResult?: RNFirebase.ConfirmationResult;
  onUpdateContext?: (context: AuthContextInterface) => void;
  onSendPhoneNumberVerification?: () => Promise<any>;
  onSetPhoneNumber?: (dialCode: string, phone: string) => void;
  onConfirmPhoneNumber?: (code: string) => Promise<RNFirebase.User>;
  onUpdateCurrentUserData?: () => any;
  onSignOut: () => Promise<void>;
  onSignUp: (signUpData: SignUpData) => Promise<any>;
  onSetSignUpData: (signUpData: any) => Promise<any>;
  onSignIn: (signInData: SignInData) => Promise<any>;
  onDisplayGlobalMessage: (message?: GlobalMessage | null) => any;
}

interface GlobalMessage {
  message: string;
  type: 'success' | 'info' | 'error' | string;
}

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

export const AuthContext = React.createContext<AuthContextInterface>({
  phoneNumber: null,
  globalMessage: null,
  completingStep: false,
  phoneNumberConfirmResult: null,
  onUpdateContext: context => context,
  onSetPhoneNumber: context => context,
  onSendPhoneNumberVerification: () => null,
  onSignOut: () => null,
  onConfirmPhoneNumber: () => null,
  onSetSignUpData: () => null,
  onDisplayGlobalMessage: () => null,
  onUpdateCurrentUserData: () => null,
  onSignUp: (signUpData: SignUpData) => Promise.resolve(signUpData),
  onSignIn: (signInData: SignInData) => Promise.resolve(signInData),
});

interface AuthProviderProps {
  firebase: Firebase;
  onLoggedIn: (user: RNFirebase.User) => void;
}

export class AuthProvider extends Component<AuthProviderProps> {
  firebaseAuthChangedListener;
  signUpData: SignUpData;

  componentDidMount() {
    this.firebaseAuthChangedListener = this.props.firebase.auth().onAuthStateChanged(async user => {
      if (user !== null) {
        if (this.signUpData) {
          await this.props.firebase.auth().currentUser.updateProfile({
            displayName: `${this.signUpData.firstName} ${this.signUpData.lastName}`,
          });
          this.signUpData = null;
          return this.props.onLoggedIn(this.props.firebase.auth().currentUser);
        }
        if (!user.displayName) return;
        this.props.onLoggedIn(this.props.firebase.auth().currentUser);
      }
    });
  }

  componentWillUnmount() {
    if (this.firebaseAuthChangedListener) this.firebaseAuthChangedListener();
  }

  onUpdateContext = context => {
    const newContext = { ...this.state, ...context };
    this.setState(newContext);
  };

  onSetPhoneNumber = (dialCode, phone) => {
    this.state.phoneNumber = `${dialCode}${phone}`;
  };

  onSendPhoneNumberVerification = async (): Promise<RNFirebase.ConfirmationResult | null> => {
    if (!this.state.phoneNumber) return null;
    if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(this.state.phoneNumber)) {
      this.onDisplayGlobalMessage({ message: 'Please enter a valid phone number!', type: 'info' });
      return null;
    }
    this.setState({ completingStep: true });
    try {
      const phoneNumberConfirmResult = await this.props.firebase
        .auth()
        .signInWithPhoneNumber(this.state.phoneNumber, true);
      if (phoneNumberConfirmResult) {
        this.state.phoneNumberConfirmResult = phoneNumberConfirmResult;
      }
      this.setState({ completingStep: false });
      return phoneNumberConfirmResult;
    } catch (e) {
      console.error(e);
      this.setState({ completingStep: false });
      this.onDisplayGlobalMessage({ type: 'error', message: e.message });
      return null;
    }
  };

  onConfirmPhoneNumber = async (code: string): Promise<RNFirebase.User> => {
    this.setState({ completingStep: true });
    try {
      const user = await this.state.phoneNumberConfirmResult.confirm(code);
      this.setState({ completingStep: false });
      return user;
    } catch (e) {
      console.error(e);
      this.setState({ completingStep: false });
      this.onDisplayGlobalMessage({ type: 'error', message: e.message });
      return null;
    }
  };

  onSignUp = async (signUpData: SignUpData) => {
    this.signUpData = signUpData;
    const userCredential = await this.props.firebase
      .auth()
      .createUserWithEmailAndPassword(signUpData.email, signUpData.password);
    return userCredential && userCredential.user;
  };

  onSignIn = async (signInData: SignInData) => {
    const userCredential = await this.props.firebase
      .auth()
      .signInWithEmailAndPassword(signInData.email, signInData.password);
    return userCredential && userCredential.user;
  };

  onSetSignUpData = async (signUpData: any) => {
    this.signUpData = { ...(this.signUpData || {}), ...signUpData };
  };

  onUpdateCurrentUserData = async () => {
    if (!this.signUpData || !this.signUpData.firstName || !this.signUpData.lastName) {
      return this.onDisplayGlobalMessage({ type: 'error', message: 'Please enter your name!' });
    }
    this.setState({ completingStep: true });
    await this.props.firebase
      .auth()
      .currentUser.updateProfile({ displayName: `${this.signUpData.firstName} ${this.signUpData.lastName}` });
    setTimeout(() => {
      this.setState({
        completingStep: false,
        globalMessage: {
          type: 'success',
          message: "Sign in successfully! Let's get started to using the app.",
        },
      });
      this.props.onLoggedIn(this.props.firebase.auth().currentUser);
    }, 1500);
    return this.props.firebase.auth().currentUser;
  };

  onDisplayGlobalMessage = (message: GlobalMessage) => {
    this.setState({ globalMessage: message });
  };

  onSignOut = async () => {
    if (!this.props.firebase.auth().currentUser) return null;
    return await this.props.firebase.auth().signOut();
  };

  state = {
    phoneNumber: null,
    phoneNumberConfirmResult: null,
    globalMessage: null,
    completingStep: false,
    onUpdateContext: this.onUpdateContext,
    onSetPhoneNumber: this.onSetPhoneNumber,
    onSendPhoneNumberVerification: this.onSendPhoneNumberVerification,
    onSignOut: this.onSignOut,
    onSignUp: this.onSignUp,
    onSignIn: this.onSignIn,
    onDisplayGlobalMessage: this.onDisplayGlobalMessage,
    onConfirmPhoneNumber: this.onConfirmPhoneNumber,
    onSetSignUpData: this.onSetSignUpData,
    onUpdateCurrentUserData: this.onUpdateCurrentUserData,
  };

  render() {
    return <AuthContext.Provider value={{ ...this.state }}>{this.props.children}</AuthContext.Provider>;
  }
}

export default AuthProvider;

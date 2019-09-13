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
export declare const AuthContext: React.Context<AuthContextInterface>;
interface AuthProviderProps {
    firebase: Firebase;
    onLoggedIn: (user: RNFirebase.User) => void;
}
export declare class AuthProvider extends Component<AuthProviderProps> {
    firebaseAuthChangedListener: any;
    signUpData: SignUpData;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onUpdateContext: (context: any) => void;
    onSetPhoneNumber: (dialCode: any, phone: any) => void;
    onSendPhoneNumberVerification: () => Promise<RNFirebase.ConfirmationResult>;
    onConfirmPhoneNumber: (code: string) => Promise<RNFirebase.User>;
    onSignUp: (signUpData: SignUpData) => Promise<RNFirebase.User>;
    onSignIn: (signInData: SignInData) => Promise<RNFirebase.User>;
    onSetSignUpData: (signUpData: any) => Promise<void>;
    onUpdateCurrentUserData: () => Promise<void | RNFirebase.User>;
    onDisplayGlobalMessage: (message: GlobalMessage) => void;
    onSignOut: () => Promise<void>;
    state: {
        phoneNumber: any;
        phoneNumberConfirmResult: any;
        globalMessage: any;
        completingStep: boolean;
        onUpdateContext: (context: any) => void;
        onSetPhoneNumber: (dialCode: any, phone: any) => void;
        onSendPhoneNumberVerification: () => Promise<RNFirebase.ConfirmationResult>;
        onSignOut: () => Promise<void>;
        onSignUp: (signUpData: SignUpData) => Promise<RNFirebase.User>;
        onSignIn: (signInData: SignInData) => Promise<RNFirebase.User>;
        onDisplayGlobalMessage: (message: GlobalMessage) => void;
        onConfirmPhoneNumber: (code: string) => Promise<RNFirebase.User>;
        onSetSignUpData: (signUpData: any) => Promise<void>;
        onUpdateCurrentUserData: () => Promise<void | RNFirebase.User>;
    };
    render(): JSX.Element;
}
export default AuthProvider;

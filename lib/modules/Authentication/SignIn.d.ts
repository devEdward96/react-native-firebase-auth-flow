import React from 'react';
import { Firebase, RNFirebase } from 'react-native-firebase';
import defaultTheme from '../../themes/default';
export declare const DefaultSignInTheme: {
    colors: {
        primary: string;
        red: string;
        white: string;
        yellow: string;
        black: string;
        green: string;
        blue: string;
        violet: string;
        gray: string;
        midGray: string;
        lightGrey: string;
        greenSea: string;
        brightYarrow: string;
    };
};
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
    static navigationOptions: {
        header: any;
    };
    state: {
        authStep: string;
        focusToPhoneInput: boolean;
        openSignInWithAnotherMethods: boolean;
    };
    onNextAuthStep: () => void;
    onBackAuthStep: () => void;
    onRenderBrand: () => JSX.Element;
    render(): JSX.Element;
}
export {};

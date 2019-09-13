import React from 'react';
import { AuthContextInterface } from '../../contexts/AuthContext';
export default class SignInWithPhone extends React.PureComponent<{
    onInputFocus: any;
    theme: any;
    onSignInWithAnotherMethods: any;
}> {
    phoneInputRef: any;
    static contextType: React.Context<AuthContextInterface>;
    context: AuthContextInterface;
    componentDidMount(): Promise<void>;
    state: {
        phoneNumber: any;
        fetchingCountry: boolean;
        openCountrySelector: boolean;
        country: any;
    };
    render(): JSX.Element;
}

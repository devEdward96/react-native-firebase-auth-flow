import React from 'react';
import { AuthContextInterface } from '../../contexts/AuthContext';
export default class AuthCodeVerification extends React.PureComponent<{
    autoFocus: boolean;
    onNextAuthStep: any;
    theme: any;
}> {
    inputRef: any;
    static contextType: React.Context<AuthContextInterface>;
    context: AuthContextInterface;
    componentDidUpdate(prevProps: Readonly<{
        autoFocus: boolean;
        onNextAuthStep: any;
        theme: any;
    }>, prevState: Readonly<{}>, snapshot?: any): void;
    onVerify: (code: any) => Promise<void>;
    render(): JSX.Element;
}

import React from 'react';
import { AuthContextInterface } from '../../contexts/AuthContext';
declare class EmailPasswordSignInForm extends React.PureComponent<{
    theme: any;
    privacyUrl: string;
}> {
    static contextType: React.Context<AuthContextInterface>;
    context: AuthContextInterface;
    render(): JSX.Element;
}
export default EmailPasswordSignInForm;

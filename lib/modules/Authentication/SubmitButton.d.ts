import React from 'react';
import { AuthContextInterface } from '../../contexts/AuthContext';
interface BaseProps {
    authStep: string;
    AUTH_STEPS: any;
    onNextAuthStep: any;
    theme: any;
}
declare class SubmitButton extends React.PureComponent<BaseProps> {
    static contextType: React.Context<AuthContextInterface>;
    context: AuthContextInterface;
    onSubmit: () => Promise<void>;
    render(): JSX.Element;
}
export default SubmitButton;

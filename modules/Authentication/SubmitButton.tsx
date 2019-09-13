import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { Keyboard } from 'react-native';
import AuthStepDescription from './AuthStepDescription';
import Styled from './Styled';
import { AuthContext, AuthContextInterface } from '../../contexts/AuthContext';

interface BaseProps {
  authStep: string;
  AUTH_STEPS: any;
  onNextAuthStep: any;
}

class SubmitButton extends React.PureComponent<BaseProps> {
  static contextType = AuthContext;
  context: AuthContextInterface;
  onSubmit = async () => {
    if (this.props.authStep === this.props.AUTH_STEPS.ENTER_PHONE_NUMBER) {
      const result = await this.context.onSendPhoneNumberVerification();
      if (result) {
        this.props.onNextAuthStep();
      }
      return;
    }
    if (this.props.authStep === this.props.AUTH_STEPS.USER_INFORMATION_CONFIRMATION) {
      Keyboard.dismiss();
      requestAnimationFrame(async () => {
        await this.context.onUpdateCurrentUserData();
        return;
      });
    }
  };

  render() {
    const { completingStep } = this.context;
    return (
      <Styled.SignIn.Actions>
        <AuthStepDescription authStep={this.props.authStep} AUTH_STEPS={this.props.AUTH_STEPS} />
        <Styled.SignIn.NextButtonWrapper>
          <Styled.SignIn.NextButton onPress={this.onSubmit}>
            <Styled.SignIn.NextButtonInner>
              {!completingStep && this.props.authStep !== this.props.AUTH_STEPS.USER_INFORMATION_CONFIRMATION && (
                <Styled.SignIn.NextButtonIcon name={'arrow-right'} />
              )}
              {!completingStep && this.props.authStep === this.props.AUTH_STEPS.USER_INFORMATION_CONFIRMATION && (
                <Styled.SignIn.NextButtonIcon name={'check'} />
              )}
              {completingStep && <ActivityIndicator size={'small'} color={'#fff'} />}
            </Styled.SignIn.NextButtonInner>
          </Styled.SignIn.NextButton>
        </Styled.SignIn.NextButtonWrapper>
      </Styled.SignIn.Actions>
    );
  }
}

export default SubmitButton;

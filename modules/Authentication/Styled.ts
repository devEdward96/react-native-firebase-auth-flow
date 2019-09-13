import styled from 'styled-components';
import { TouchableHighlight, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default {
  SignIn: {
    GetStarted: styled(View)`
      height: 160px;
      width: 100%;
      padding: 20px;
      flex: 1;
      background: #fff;
    `,
    PhoneInput: styled(View)``,
    PhoneInputContent: styled(View)`
      background: #f8f8f8;
      border: 1px solid #eee;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 3px;
      margin-top: 10px;
      padding: 10px;
    `,
    FlagAndPrefix: styled(TouchableHighlight)``,
    FlagAndPrefixContent: styled(View)`
      display: flex;
      flex: 6;
      flex-direction: row;
      align-items: center;
      margin-right: 10px;
    `,
    CountryArrow: styled(Feather)`
      font-size: 12px;
      color: ${props => props.theme.colors.gray};
      margin-left: 3px;
    `,
    Header: styled(View)`
      width: 100%;
      height: 100%;
      padding: 78px 16px 48px 16px;
      display: flex;
      background: ${props => props.theme.colors.blue};
      flex-direction: column;
    `,
    HeaderActionButton: styled(TouchableHighlight)`
      width: 48px;
      height: 48px;
      margin-left: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    `,
    LoginWithAnotherMethods: styled(TouchableHighlight)`
      height: 38px;
      background: #fff;
      display: flex;
      margin-top: 15px;
      flex-direction: row;
      align-items: center;
    `,
    Logo: styled(Feather)`
      color: ${props => props.theme.colors.white};
      font-size: 56px;
    `,
    HeaderIcon: styled(Feather)`
      color: ${props => props.theme.colors.gray};
      font-size: 26px;
    `,
    Brand: styled(View)`
      margin-left: 10px;
    `,
    PhoneInputDivider: styled(View)`
      width: 1px;
      height: 28px;
      background: #ddd;
    `,
    Actions: styled(View)`
      z-index: 2;
      width: 100%;
      left: 20px;
      position: absolute;
      bottom: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `,
    NextButtonWrapper: styled(View)`
      flex: 2;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    `,
    NextButton: styled(TouchableHighlight)`
      background: ${props => props.theme.colors.black};
      width: 56px;
      height: 56px;
      border-radius: 28px;
    `,
    NextButtonInner: styled(View)`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    NextButtonIcon: styled(Feather)`
      font-size: 22px;
      color: ${props => props.theme.colors.white};
    `,
  },
  SignInWithAnotherMethods: {
    Container: styled(View)`
      height: 600px;
      margin-left: -20px;
      margin-right: -20px;
      background: #fff;
    `,
    SignIn: styled(View)`
      padding: 20px;
    `,
    SignUp: styled(View)`
      padding: 20px;
    `,
    SocialButtons: styled(View)`
      height: 100px;
      padding: 20px;
      background: #fff;
    `,
  },
  SocialButton: styled(TouchableHighlight)`
    height: 48px;
    width: 100%;
  `,
  SocialButtonContent: styled(View)`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 3px;
    box-shadow: 0 0 3px #ddd;
    background: #fff;
    justify-content: center;
    width: 100%;
  `,
  EmailPasswordSignInForm: styled(View)`
    margin-top: 40px;
  `,
  EmailPasswordSignInFormItem: styled(View)`
    margin: 10px 0;
  `,
  TermsAndPrivacy: styled(View)`
    margin-top: 5px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  EmailPasswordSignInButton: styled(TouchableHighlight)`
    height: 48px;
    width: 120px;
    justify-content: center;
    background: ${props => props.theme.colors.blue};
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 3px;
  `,
};

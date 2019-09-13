import React from 'react';
import { View } from 'react-native';
import CodeInput from 'react-native-confirmation-code-field';
import Text from '../../components/Typography/Text';
import { AuthContext, AuthContextInterface } from '../../contexts/AuthContext';

export default class AuthCodeVerification extends React.PureComponent<{
  autoFocus: boolean;
  onNextAuthStep: any;
  theme: any;
}> {
  inputRef: any;
  static contextType = AuthContext;
  context: AuthContextInterface;

  componentDidUpdate(
    prevProps: Readonly<{ autoFocus: boolean; onNextAuthStep: any; theme: any }>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    if (!prevProps.autoFocus && this.props.autoFocus) {
      setTimeout(() => {
        this.inputRef.focus();
      }, 500);
    }
  }

  onVerify = async code => {
    const user = await this.context.onConfirmPhoneNumber(code);
    if (!user.displayName) {
      this.props.onNextAuthStep();
    }
  };

  render() {
    const { theme } = this.props;
    return (
      <View>
        <Text medium size={16}>
          Verify phone number
        </Text>
        <View style={{ height: 200, marginTop: 20 }}>
          <CodeInput
            ref={ref => {
              this.inputRef = ref;
            }}
            size={48}
            inputPosition={'full-width'}
            cellBorderWidth={1.5}
            cellProps={{ style: { borderRadius: 3 } }}
            activeColor={theme.colors.blue}
            inactiveColor={theme.colors.lightGrey}
            onFulfill={this.onVerify}
            codeLength={6}
          />
        </View>
      </View>
    );
  }
}

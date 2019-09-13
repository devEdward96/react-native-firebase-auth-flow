import React from 'react';
import { View } from 'react-native';
import Text from '../../components/Typography/Text';
import Input from '../../components/Forms/Input';
import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';
import { AuthContext, AuthContextInterface } from '../../contexts/AuthContext';

export default class AuthCodeVerification extends React.PureComponent<{ autoFocus: boolean }> {
  firstNameInput: any;

  static contextType = AuthContext;
  context: AuthContextInterface;

  componentDidUpdate(
    prevProps: Readonly<{ autoFocus: boolean; onNextAuthStep: any; theme: any }>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    if (!prevProps.autoFocus && this.props.autoFocus) {
      setTimeout(() => {
        this.firstNameInput.focus();
      }, 500);
    }
  }

  render() {
    return (
      <View>
        <Text medium size={16}>
          How about you?
        </Text>
        <View style={{ marginTop: 20 }}>
          <Row gutter={5}>
            <Col gutter={5}>
              <Input
                onChangeText={text => this.context.onSetSignUpData({ firstName: text })}
                getRef={ref => {
                  this.firstNameInput = ref;
                }}
                placeholder={'First name'}
              />
            </Col>
            <Col gutter={5}>
              <Input
                onChangeText={text => this.context.onSetSignUpData({ lastName: text })}
                placeholder={'Last name'}
              />
            </Col>
          </Row>
        </View>
      </View>
    );
  }
}

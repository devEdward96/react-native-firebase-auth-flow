import React from 'react';
import { View } from 'react-native';
import Text from '../../components/Typography/Text';
import Input from '../../components/Forms/Input';
import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';

export default function SignInInformation({ autoFocus }) {
  return (
    <View>
      <Text medium size={16}>
        Sign in information
      </Text>
      <View style={{ marginTop: 20 }}>
        <Row gutter={5}>
          <Col gutter={5}>
            <Input placeholder={'Your email: abc@example.com'} />
          </Col>
          <Col gutter={5}>
            <Input placeholder={'Password'} />
          </Col>
        </Row>
      </View>
    </View>
  );
}

import React from 'react';
import { TextInputProps, View } from 'react-native';
import Styled from './Styled';

function Input(props: TextInputProps & { icon?: string; getRef?: any }) {
  return (
    <View>
      {props.icon && <Styled.InputIcon name={props.icon} />}
      <Styled.Input
        hasIcon={!!props.icon}
        ref={ref => (props.getRef ? props.getRef(ref) : ref)}
        autoCorrect={false}
        placeholder={'Enter here...'}
        placeholderTextColor={'#777'}
        {...props}
      />
    </View>
  );
}

export default React.memo(Input);

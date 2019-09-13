import React from 'react';
import { TextInputProps } from 'react-native';
import Styled from './Styled';
import BaseText from '../Typography/Text';

const Button = ({ children, active = false, isFirst, isLast }) => (
  <Styled.RadioButtonGroup.Button active={active} isFirst={isFirst} isLast={isLast}>
    {children}
  </Styled.RadioButtonGroup.Button>
);

function RadioButtonGroup(props: TextInputProps) {
  return (
    <Styled.RadioButtonGroup.Container>
      <Button isFirst={true} active={true} isLast={false}>
        <BaseText color={'white'} medium size={14}>Personal</BaseText>
      </Button>
      <Button isFirst={false} isLast={false}>
        <BaseText medium size={14} color={'gray'}>Team</BaseText>
      </Button>
      <Button isFirst={false} isLast={true}>
        <BaseText medium size={14} color={'gray'}>Group</BaseText>
      </Button>
    </Styled.RadioButtonGroup.Container>
  );
}

export default React.memo(RadioButtonGroup);

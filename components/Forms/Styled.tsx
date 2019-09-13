import styled from 'styled-components/native';
import { TextInput, TouchableHighlight, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default {
  Input: styled(TextInput)<{ hasIcon: boolean }>`
    height: 48px;
    background: #f8f8f8;
    border-radius: 3px;
    color: ${props => props.theme.colors.black};
    line-height: 16px;
    padding: ${props => (props.hasIcon ? '0 45px' : '0 15px')};
  `,
  InputIcon: styled(Feather)`
    color: ${props => props.theme.colors.midGray};
    font-size: 18px;
    position: absolute;
    z-index: 2;
    left: 15px;
    top: 14px;
  `,
  RadioButtonGroup: {
    Container: styled(View)`
      display: flex;
      flex-direction: row;
    `,
    Button: styled(TouchableHighlight)<{ isLast: boolean; active: boolean; isFirst: boolean }>`
      padding: 13px 26px;
      border: 0.5px solid ${props => (props.active ? props.theme.colors.black : '#eee')};
      background: ${props => (props.active ? props.theme.colors.black : 'transparent')};
      border-right-width: ${props => (props.isFirst ? '0' : '0.5px')};
      border-left-width: ${props => (props.isLast ? '0' : '0.5px')};
      border-top-left-radius: ${props => (props.isFirst ? '3px' : 0)};
      border-bottom-left-radius: ${props => (props.isFirst ? '3px' : 0)};
      border-top-right-radius: ${props => (props.isLast ? '3px' : 0)};
      border-bottom-right-radius: ${props => (props.isLast ? '3px' : 0)};
    `,
  },
};

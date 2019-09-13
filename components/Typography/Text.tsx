import React from 'react';
import { Text, TextProps } from 'react-native';
import styled from 'styled-components/native';
import defaultTheme from '../../themes/default';

const StyledText = styled<typeof Text & BaseTextProps>(Text)`
  font-size: ${props => props.theme.size}px;
  color: ${props => defaultTheme.colors[props.theme.color]};
  font-weight: ${props => (props.theme.light ? '300' : props.theme.bold ? '600' : props.theme.medium ? '500' : '400')};
  line-height: ${props => (props.theme.lightHeight ? `${props.theme.lightHeight}px` : `${props.theme.size + 2}px`)};
`;

interface BaseTextProps {
  textProps?: TextProps;
  children?: React.ReactElement<any, any> | string;
  color?: keyof typeof defaultTheme.colors;
  bold?: boolean;
  medium?: boolean;
  light?: boolean;
  lightHeight?: number;
  size?: number;
}

const BaseText = ({
  children,
  textProps,
  color = 'black',
  lightHeight,
  size = 14,
  bold,
  medium,
  light,
}: BaseTextProps) => {
  return (
    <StyledText {...textProps} theme={{ bold, color, medium, light, size, lightHeight }}>
      {children}
    </StyledText>
  );
};

export default BaseText;

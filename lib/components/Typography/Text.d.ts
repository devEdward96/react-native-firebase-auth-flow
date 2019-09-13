import React from 'react';
import { TextProps } from 'react-native';
import defaultTheme from '../../themes/default';
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
declare const BaseText: ({ children, textProps, color, lightHeight, size, bold, medium, light, }: BaseTextProps) => JSX.Element;
export default BaseText;

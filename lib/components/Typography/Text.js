var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import defaultTheme from '../../themes/default';
var StyledText = styled(Text)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", "px;\n  color: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"], ["\n  font-size: ", "px;\n  color: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"])), function (props) { return props.theme.size; }, function (props) { return defaultTheme.colors[props.theme.color]; }, function (props) { return (props.theme.light ? '300' : props.theme.bold ? '600' : props.theme.medium ? '500' : '400'); }, function (props) { return (props.theme.lightHeight ? props.theme.lightHeight + "px" : props.theme.size + 2 + "px"); });
var BaseText = function (_a) {
    var children = _a.children, textProps = _a.textProps, _b = _a.color, color = _b === void 0 ? 'black' : _b, lightHeight = _a.lightHeight, _c = _a.size, size = _c === void 0 ? 14 : _c, bold = _a.bold, medium = _a.medium, light = _a.light;
    return (React.createElement(StyledText, __assign({}, textProps, { theme: { bold: bold, color: color, medium: medium, light: light, size: size, lightHeight: lightHeight } }), children));
};
export default BaseText;
var templateObject_1;
//# sourceMappingURL=Text.js.map
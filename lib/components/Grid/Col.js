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
import styled from 'styled-components';
import { View } from 'react-native';
var StyledContainer = styled(View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  margin-left: ", ";\n  margin-right: ", ";\n"], ["\n  flex: 1;\n  margin-left: ", ";\n  margin-right: ", ";\n"])), function (props) { return props.gutter + "px"; }, function (props) { return props.gutter + "px"; });
var Col = function (props) {
    return (React.createElement(StyledContainer, __assign({ gutter: props.gutter }, props.colProps), props.children));
};
export default Col;
var templateObject_1;
//# sourceMappingURL=Col.js.map
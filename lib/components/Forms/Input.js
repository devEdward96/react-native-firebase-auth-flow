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
import { View } from 'react-native';
import Styled from './Styled';
function Input(props) {
    return (React.createElement(View, null,
        props.icon && React.createElement(Styled.InputIcon, { name: props.icon }),
        React.createElement(Styled.Input, __assign({ hasIcon: !!props.icon, ref: function (ref) { return (props.getRef ? props.getRef(ref) : ref); }, autoCorrect: false, placeholder: 'Enter here...', placeholderTextColor: '#777' }, props))));
}
export default React.memo(Input);
//# sourceMappingURL=Input.js.map
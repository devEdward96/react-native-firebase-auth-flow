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
import Styled from '../../modules/Authentication/Styled';
import Input from './Input';
import Text from '../Typography/Text';
var FormItem = function (_a) {
    var formProps = _a.formProps, field = _a.field, icon = _a.icon, placeholder = _a.placeholder, _b = _a.inputProps, inputProps = _b === void 0 ? {} : _b;
    return (React.createElement(Styled.EmailPasswordSignInFormItem, null,
        React.createElement(Input, __assign({}, inputProps, { style: formProps.touched[field] && formProps.errors[field] ? { borderWidth: 1, borderColor: 'red' } : {}, onChangeText: formProps.handleChange(field), onBlur: formProps.handleBlur(field), value: formProps.values[field], icon: icon, placeholder: placeholder })),
        formProps.touched[field] && formProps.errors[field] ? (React.createElement(Text, { color: 'red', medium: true, textProps: { style: { marginTop: 3 } } }, formProps.errors[field].toString())) : null));
};
export default FormItem;
//# sourceMappingURL=FormItemInput.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import Styled from './Styled';
import Text from '../../components/Typography/Text';
import { AuthContext } from '../../contexts/AuthContext';
import FormItemInput from '../../components/Forms/FormItemInput';
var EmailPasswordSignInForm = /** @class */ (function (_super) {
    __extends(EmailPasswordSignInForm, _super);
    function EmailPasswordSignInForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailPasswordSignInForm.prototype.render = function () {
        var _this = this;
        var _a = this.context, onDisplayGlobalMessage = _a.onDisplayGlobalMessage, onSignIn = _a.onSignIn;
        return (React.createElement(Styled.EmailPasswordSignInForm, null,
            React.createElement(Text, { medium: true, textProps: { style: { textAlign: 'center', margin: 20 } } }, "Or Using Your Credentials"),
            React.createElement(Formik, { initialValues: { email: '', password: '' }, validationSchema: Yup.object({
                    password: Yup.string().required('Required!'),
                    email: Yup.string()
                        .email('Invalid email address!')
                        .required('Required!'),
                }), onSubmit: function (values, actions) { return __awaiter(_this, void 0, void 0, function () {
                    var success, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, onSignIn(values)];
                            case 1:
                                success = _a.sent();
                                if (success) {
                                    actions.setSubmitting(false);
                                    actions.resetForm();
                                    onDisplayGlobalMessage({
                                        message: "Sign in successfully! Let's get started to using Eco Apps.",
                                        type: 'success',
                                    });
                                }
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _a.sent();
                                actions.setSubmitting(false);
                                onDisplayGlobalMessage({
                                    message: error_1.toString(),
                                    type: 'error',
                                });
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); } }, function (formProps) { return (React.createElement(View, null,
                React.createElement(FormItemInput, { formProps: formProps, placeholder: 'Your email', icon: 'mail', field: 'email', inputProps: { keyboardType: 'email-address' } }),
                React.createElement(FormItemInput, { formProps: formProps, placeholder: 'Your password', icon: 'lock', field: 'password', inputProps: { secureTextEntry: true } }),
                React.createElement(Styled.EmailPasswordSignInFormItem, { style: { alignItems: 'center' } },
                    React.createElement(Button, { onPress: formProps.handleSubmit, contentStyle: { height: 48, width: 200 }, loading: formProps.isSubmitting, disabled: formProps.isSubmitting, mode: "contained" }, formProps.isSubmitting ? 'SIGNING IN' : 'SIGN IN')))); })));
    };
    EmailPasswordSignInForm.contextType = AuthContext;
    return EmailPasswordSignInForm;
}(React.PureComponent));
export default EmailPasswordSignInForm;
//# sourceMappingURL=EmailPasswordSignInForm.js.map
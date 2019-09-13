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
import PhoneInput from 'react-native-phone-input';
import { View } from 'react-native';
import Country from 'react-native-phone-input/lib/country';
import { ActivityIndicator } from 'react-native-paper';
import Styled from './Styled';
import Text from '../../components/Typography/Text';
import Input from '../../components/Forms/Input';
import CountrySelector from '../../components/Selectors/CountrySelector';
import { AuthContext } from '../../contexts/AuthContext';
var SignInWithPhone = /** @class */ (function (_super) {
    __extends(SignInWithPhone, _super);
    function SignInWithPhone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            phoneNumber: null,
            fetchingCountry: true,
            openCountrySelector: false,
            country: Country.getCountryDataByCode('vn'),
        };
        return _this;
    }
    SignInWithPhone.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, ipData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('http://ip-api.com/json/')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        ipData = _a.sent();
                        setTimeout(function () {
                            _this.setState({
                                fetchingCountry: false,
                                country: Country.getCountryDataByCode(ipData.countryCode.toLowerCase()),
                            });
                        }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    SignInWithPhone.prototype.render = function () {
        var _this = this;
        var _a = this.state, country = _a.country, openCountrySelector = _a.openCountrySelector, phoneNumber = _a.phoneNumber, fetchingCountry = _a.fetchingCountry;
        var _b = this.props, onInputFocus = _b.onInputFocus, onSignInWithAnotherMethods = _b.onSignInWithAnotherMethods, theme = _b.theme;
        return (React.createElement(View, null,
            React.createElement(Text, { medium: true, size: 16 }, "Use your phone number to get started"),
            React.createElement(Styled.SignIn.PhoneInput, null,
                React.createElement(Styled.SignIn.PhoneInputContent, null,
                    React.createElement(Styled.SignIn.FlagAndPrefix, { underlayColor: '#f1f1f1', onPress: function () {
                            requestAnimationFrame(function () { return _this.setState({ openCountrySelector: true }); });
                        } },
                        React.createElement(Styled.SignIn.FlagAndPrefixContent, null,
                            fetchingCountry && (React.createElement(View, { style: { width: 80 } },
                                React.createElement(ActivityIndicator, { size: 'small' }))),
                            !fetchingCountry && (React.createElement(PhoneInput, { allowZeroAfterCountryCode: false, initialCountry: 'vn', ref: function (ref) {
                                    _this.phoneInputRef = ref;
                                }, onPressFlag: function () { return _this.setState({ openCountrySelector: true }); }, style: { width: 40 } })),
                            !fetchingCountry && React.createElement(Text, null, "+" + country.dialCode),
                            !fetchingCountry && React.createElement(Styled.SignIn.CountryArrow, { name: 'chevron-down' }))),
                    React.createElement(Styled.SignIn.PhoneInputDivider, null),
                    React.createElement(View, { style: { flex: 12, height: 32 } },
                        React.createElement(Input, { keyboardType: 'number-pad', onFocus: onInputFocus, onChangeText: function (text) {
                                _this.state.phoneNumber = text;
                                _this.context.onSetPhoneNumber("+" + country.dialCode, text);
                            }, style: { height: 32 }, placeholder: '918235234' }))),
                React.createElement(Styled.SignIn.LoginWithAnotherMethods, { underlayColor: '#f1f1f1', onPress: onSignInWithAnotherMethods },
                    React.createElement(Text, { color: 'blue', textProps: { style: { color: theme.colors.primary } } }, "Or login with another methods")),
                React.createElement(CountrySelector, { onChange: function (ct) {
                        if (_this.phoneInputRef) {
                            _this.phoneInputRef.selectCountry(ct.iso2.toLowerCase());
                        }
                        _this.setState({ country: ct });
                        _this.context.onSetPhoneNumber("+" + ct.dialCode, phoneNumber);
                        requestAnimationFrame(function () {
                            _this.setState({ openCountrySelector: false });
                        });
                    }, visible: openCountrySelector, onClose: function () {
                        requestAnimationFrame(function () {
                            _this.setState({ openCountrySelector: false });
                        });
                    } }))));
    };
    SignInWithPhone.contextType = AuthContext;
    return SignInWithPhone;
}(React.PureComponent));
export default SignInWithPhone;
//# sourceMappingURL=SignInWithPhone.js.map
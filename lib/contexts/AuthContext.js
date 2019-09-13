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
import React, { Component } from 'react';
export var AuthContext = React.createContext({
    phoneNumber: null,
    globalMessage: null,
    completingStep: false,
    phoneNumberConfirmResult: null,
    onUpdateContext: function (context) { return context; },
    onSetPhoneNumber: function (context) { return context; },
    onSendPhoneNumberVerification: function () { return null; },
    onSignOut: function () { return null; },
    onConfirmPhoneNumber: function () { return null; },
    onSetSignUpData: function () { return null; },
    onDisplayGlobalMessage: function () { return null; },
    onUpdateCurrentUserData: function () { return null; },
    onSignUp: function (signUpData) { return Promise.resolve(signUpData); },
    onSignIn: function (signInData) { return Promise.resolve(signInData); },
});
var AuthProvider = /** @class */ (function (_super) {
    __extends(AuthProvider, _super);
    function AuthProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onUpdateContext = function (context) {
            var newContext = __assign({}, _this.state, context);
            _this.setState(newContext);
        };
        _this.onSetPhoneNumber = function (dialCode, phone) {
            _this.state.phoneNumber = "" + dialCode + phone;
        };
        _this.onSendPhoneNumberVerification = function () { return __awaiter(_this, void 0, void 0, function () {
            var phoneNumberConfirmResult, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.state.phoneNumber)
                            return [2 /*return*/, null];
                        if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(this.state.phoneNumber)) {
                            this.onDisplayGlobalMessage({ message: 'Please enter a valid phone number!', type: 'info' });
                            return [2 /*return*/, null];
                        }
                        this.setState({ completingStep: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.props.firebase
                                .auth()
                                .signInWithPhoneNumber(this.state.phoneNumber, true)];
                    case 2:
                        phoneNumberConfirmResult = _a.sent();
                        if (phoneNumberConfirmResult) {
                            this.state.phoneNumberConfirmResult = phoneNumberConfirmResult;
                        }
                        this.setState({ completingStep: false });
                        return [2 /*return*/, phoneNumberConfirmResult];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        this.setState({ completingStep: false });
                        this.onDisplayGlobalMessage({ type: 'error', message: e_1.message });
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.onConfirmPhoneNumber = function (code) { return __awaiter(_this, void 0, void 0, function () {
            var user, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ completingStep: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.state.phoneNumberConfirmResult.confirm(code)];
                    case 2:
                        user = _a.sent();
                        this.setState({ completingStep: false });
                        return [2 /*return*/, user];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        this.setState({ completingStep: false });
                        this.onDisplayGlobalMessage({ type: 'error', message: e_2.message });
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.onSignUp = function (signUpData) { return __awaiter(_this, void 0, void 0, function () {
            var userCredential;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.signUpData = signUpData;
                        return [4 /*yield*/, this.props.firebase
                                .auth()
                                .createUserWithEmailAndPassword(signUpData.email, signUpData.password)];
                    case 1:
                        userCredential = _a.sent();
                        return [2 /*return*/, userCredential && userCredential.user];
                }
            });
        }); };
        _this.onSignIn = function (signInData) { return __awaiter(_this, void 0, void 0, function () {
            var userCredential;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.firebase
                            .auth()
                            .signInWithEmailAndPassword(signInData.email, signInData.password)];
                    case 1:
                        userCredential = _a.sent();
                        return [2 /*return*/, userCredential && userCredential.user];
                }
            });
        }); };
        _this.onSetSignUpData = function (signUpData) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.signUpData = __assign({}, (this.signUpData || {}), signUpData);
                return [2 /*return*/];
            });
        }); };
        _this.onUpdateCurrentUserData = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signUpData || !this.signUpData.firstName || !this.signUpData.lastName) {
                            return [2 /*return*/, this.onDisplayGlobalMessage({ type: 'error', message: 'Please enter your name!' })];
                        }
                        this.setState({ completingStep: true });
                        return [4 /*yield*/, this.props.firebase
                                .auth()
                                .currentUser.updateProfile({ displayName: this.signUpData.firstName + " " + this.signUpData.lastName })];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            _this.setState({
                                completingStep: false,
                                globalMessage: {
                                    type: 'success',
                                    message: "Sign in successfully! Let's get started to using the app.",
                                },
                            });
                            _this.props.onLoggedIn(_this.props.firebase.auth().currentUser);
                        }, 1500);
                        return [2 /*return*/, this.props.firebase.auth().currentUser];
                }
            });
        }); };
        _this.onDisplayGlobalMessage = function (message) {
            _this.setState({ globalMessage: message });
        };
        _this.onSignOut = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.props.firebase.auth().currentUser)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this.props.firebase.auth().signOut()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.state = {
            phoneNumber: null,
            phoneNumberConfirmResult: null,
            globalMessage: null,
            completingStep: false,
            onUpdateContext: _this.onUpdateContext,
            onSetPhoneNumber: _this.onSetPhoneNumber,
            onSendPhoneNumberVerification: _this.onSendPhoneNumberVerification,
            onSignOut: _this.onSignOut,
            onSignUp: _this.onSignUp,
            onSignIn: _this.onSignIn,
            onDisplayGlobalMessage: _this.onDisplayGlobalMessage,
            onConfirmPhoneNumber: _this.onConfirmPhoneNumber,
            onSetSignUpData: _this.onSetSignUpData,
            onUpdateCurrentUserData: _this.onUpdateCurrentUserData,
        };
        return _this;
    }
    AuthProvider.prototype.componentDidMount = function () {
        var _this = this;
        this.firebaseAuthChangedListener = this.props.firebase.auth().onAuthStateChanged(function (user) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(user !== null)) return [3 /*break*/, 3];
                        if (!this.signUpData) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.props.firebase.auth().currentUser.updateProfile({
                                displayName: this.signUpData.firstName + " " + this.signUpData.lastName,
                            })];
                    case 1:
                        _a.sent();
                        this.signUpData = null;
                        return [2 /*return*/, this.props.onLoggedIn(this.props.firebase.auth().currentUser)];
                    case 2:
                        if (!user.displayName)
                            return [2 /*return*/];
                        this.props.onLoggedIn(this.props.firebase.auth().currentUser);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    AuthProvider.prototype.componentWillUnmount = function () {
        if (this.firebaseAuthChangedListener)
            this.firebaseAuthChangedListener();
    };
    AuthProvider.prototype.render = function () {
        return React.createElement(AuthContext.Provider, { value: __assign({}, this.state) }, this.props.children);
    };
    return AuthProvider;
}(Component));
export { AuthProvider };
export default AuthProvider;
//# sourceMappingURL=AuthContext.js.map
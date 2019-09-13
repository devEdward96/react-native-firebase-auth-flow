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
import React from 'react';
import { View } from 'react-native';
import Text from '../../components/Typography/Text';
import Input from '../../components/Forms/Input';
import Row from '../../components/Grid/Row';
import Col from '../../components/Grid/Col';
import { AuthContext } from '../../contexts/AuthContext';
var AuthCodeVerification = /** @class */ (function (_super) {
    __extends(AuthCodeVerification, _super);
    function AuthCodeVerification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthCodeVerification.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        var _this = this;
        if (!prevProps.autoFocus && this.props.autoFocus) {
            setTimeout(function () {
                _this.firstNameInput.focus();
            }, 500);
        }
    };
    AuthCodeVerification.prototype.render = function () {
        var _this = this;
        return (React.createElement(View, null,
            React.createElement(Text, { medium: true, size: 16 }, "How about you?"),
            React.createElement(View, { style: { marginTop: 20 } },
                React.createElement(Row, { gutter: 5 },
                    React.createElement(Col, { gutter: 5 },
                        React.createElement(Input, { onChangeText: function (text) { return _this.context.onSetSignUpData({ firstName: text }); }, getRef: function (ref) {
                                _this.firstNameInput = ref;
                            }, placeholder: 'First name' })),
                    React.createElement(Col, { gutter: 5 },
                        React.createElement(Input, { onChangeText: function (text) { return _this.context.onSetSignUpData({ lastName: text }); }, placeholder: 'Last name' }))))));
    };
    AuthCodeVerification.contextType = AuthContext;
    return AuthCodeVerification;
}(React.PureComponent));
export default AuthCodeVerification;
//# sourceMappingURL=UserInformationConfirmation.js.map
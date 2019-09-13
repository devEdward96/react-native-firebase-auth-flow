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
import { View, Animated } from 'react-native';
import Text from '../Typography/Text';
import Styled from './Styled';
var BaseTabBar = /** @class */ (function (_super) {
    __extends(BaseTabBar, _super);
    function BaseTabBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderTab = function (_a, page, isTabActive, onPressHandler) {
            var icon = _a.icon, label = _a.label;
            return (React.createElement(Styled.BaseTabBar.TabBar, { key: label, underlayColor: '#ddd', accessible: true, accessibilityLabel: label, accessibilityTraits: "button", onPress: function () { return onPressHandler(page); } },
                React.createElement(View, null,
                    React.createElement(Text, { medium: true }, label))));
        };
        return _this;
    }
    BaseTabBar.prototype.render = function () {
        var _this = this;
        var containerWidth = this.props.containerWidth;
        var numberOfTabs = this.props.tabs.length;
        var tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: 1,
            backgroundColor: 'black',
            bottom: 0,
        };
        var translateX = this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, containerWidth / numberOfTabs],
        });
        return (React.createElement(Styled.BaseTabBar.Container, { style: [this.props.style] },
            this.props.tabs.map(function (name, page) {
                var isTabActive = _this.props.activeTab === page;
                var renderTab = _this.props.renderTab || _this.renderTab;
                return renderTab(_this.props.initialTabs[page], page, isTabActive, _this.props.goToPage);
            }),
            React.createElement(Animated.View, { style: [
                    tabUnderlineStyle,
                    {
                        transform: [{ translateX: translateX }],
                    },
                    this.props.underlineStyle,
                ] })));
    };
    return BaseTabBar;
}(React.PureComponent));
export default BaseTabBar;
//# sourceMappingURL=BaseTabBar.js.map
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components/native';
import { TextInput, TouchableHighlight, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
export default {
    Input: styled(TextInput)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 48px;\n    background: #f8f8f8;\n    border-radius: 3px;\n    color: ", ";\n    line-height: 16px;\n    padding: ", ";\n  "], ["\n    height: 48px;\n    background: #f8f8f8;\n    border-radius: 3px;\n    color: ", ";\n    line-height: 16px;\n    padding: ", ";\n  "])), function (props) { return props.theme.colors.black; }, function (props) { return (props.hasIcon ? '0 45px' : '0 15px'); }),
    InputIcon: styled(Feather)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", ";\n    font-size: 18px;\n    position: absolute;\n    z-index: 2;\n    left: 15px;\n    top: 14px;\n  "], ["\n    color: ", ";\n    font-size: 18px;\n    position: absolute;\n    z-index: 2;\n    left: 15px;\n    top: 14px;\n  "])), function (props) { return props.theme.colors.midGray; }),
    RadioButtonGroup: {
        Container: styled(View)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      display: flex;\n      flex-direction: row;\n    "], ["\n      display: flex;\n      flex-direction: row;\n    "]))),
        Button: styled(TouchableHighlight)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      padding: 13px 26px;\n      border: 0.5px solid ", ";\n      background: ", ";\n      border-right-width: ", ";\n      border-left-width: ", ";\n      border-top-left-radius: ", ";\n      border-bottom-left-radius: ", ";\n      border-top-right-radius: ", ";\n      border-bottom-right-radius: ", ";\n    "], ["\n      padding: 13px 26px;\n      border: 0.5px solid ", ";\n      background: ", ";\n      border-right-width: ", ";\n      border-left-width: ", ";\n      border-top-left-radius: ", ";\n      border-bottom-left-radius: ", ";\n      border-top-right-radius: ", ";\n      border-bottom-right-radius: ", ";\n    "])), function (props) { return (props.active ? props.theme.colors.black : '#eee'); }, function (props) { return (props.active ? props.theme.colors.black : 'transparent'); }, function (props) { return (props.isFirst ? '0' : '0.5px'); }, function (props) { return (props.isLast ? '0' : '0.5px'); }, function (props) { return (props.isFirst ? '3px' : 0); }, function (props) { return (props.isFirst ? '3px' : 0); }, function (props) { return (props.isLast ? '3px' : 0); }, function (props) { return (props.isLast ? '3px' : 0); }),
    },
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Styled.js.map
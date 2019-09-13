var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { View, TouchableHighlight } from 'react-native';
export default {
    BaseTabBar: {
        Container: styled(View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      height: 48px;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      border-bottom-width: 0.5px;\n      border-bottom-color: #eee;\n    "], ["\n      height: 48px;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      border-bottom-width: 0.5px;\n      border-bottom-color: #eee;\n    "]))),
        TabBar: styled(TouchableHighlight)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      flex: 1;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n    "], ["\n      flex: 1;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n    "]))),
    },
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=Styled.js.map
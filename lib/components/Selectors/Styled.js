var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components/native';
import { TouchableHighlight, View } from 'react-native';
export default {
    CountrySelector: {
        Container: styled(View)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""]))),
        GroupCountries: styled(View)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      padding: 15px 0;\n      background: #f8f8f8;\n    "], ["\n      padding: 15px 0;\n      background: #f8f8f8;\n    "]))),
        CloseLine: styled(View)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      width: 50px;\n      height: 3px;\n      background: ", ";\n      margin-top: 15px;\n      border-radius: 3px;\n    "], ["\n      width: 50px;\n      height: 3px;\n      background: ", ";\n      margin-top: 15px;\n      border-radius: 3px;\n    "])), function (props) { return props.theme.colors.lightGrey; }),
        Header: styled(View)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    "], ["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    "]))),
        Country: styled(TouchableHighlight)(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""]))),
        CountryContent: styled(View)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      background: #fff;\n      border-bottom-width: 0.5px;\n      border-bottom-color: #eee;\n      padding: 15px;\n      display: flex;\n      align-items: center;\n      flex-direction: row;\n    "], ["\n      background: #fff;\n      border-bottom-width: 0.5px;\n      border-bottom-color: #eee;\n      padding: 15px;\n      display: flex;\n      align-items: center;\n      flex-direction: row;\n    "]))),
    },
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Styled.js.map
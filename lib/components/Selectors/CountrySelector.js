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
import { FlatList, View, ScrollView, Image } from 'react-native';
import Country from 'react-native-phone-input/lib/country';
import Flag from 'react-native-phone-input/lib/resources/flags';
import { ActivityIndicator } from 'react-native-paper';
import Modal from 'react-native-modalbox';
import groupBy from 'lodash/groupBy';
import Styled from './Styled';
import Text from '../../components/Typography/Text';
import Input from '../../components/Forms/Input';
var GroupCountries = function (_a) {
    var letter = _a.letter, onSelect = _a.onSelect, countries = _a.countries;
    return (React.createElement(Styled.CountrySelector.GroupCountries, null,
        React.createElement(Text, { bold: true, color: 'gray', textProps: { style: { marginLeft: 15, marginBottom: 10 } } }, letter),
        React.createElement(FlatList, { data: countries, removeClippedSubviews: true, getItemLayout: function (data, index) { return ({
                length: 70,
                offset: 70 * index,
                index: index,
            }); }, keyExtractor: function (item) { return item.iso2; }, renderItem: function (_a) {
                var item = _a.item;
                return (React.createElement(Styled.CountrySelector.Country, { onPress: function () { return onSelect(item); }, underlayColor: '#ddd' },
                    React.createElement(Styled.CountrySelector.CountryContent, null,
                        React.createElement(Image, { source: Flag.get(item.iso2), style: { width: 30, height: 20, borderRadius: 2 } }),
                        React.createElement(Text, { medium: true, textProps: { style: { marginLeft: 10 } } }, item.name + " (+" + item.dialCode + ")"))));
            } })));
};
var CountrySelector = /** @class */ (function (_super) {
    __extends(CountrySelector, _super);
    function CountrySelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            searchKeyword: '',
            visible: false,
            loading: true,
        };
        return _this;
    }
    CountrySelector.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        var _this = this;
        if (!prevProps.visible && this.props.visible) {
            setTimeout(function () {
                _this.setState({ loading: false });
            }, 1000);
        }
        if (prevProps.visible && !this.props.visible) {
            setTimeout(function () {
                _this.setState({ loading: true });
            }, 1000);
        }
    };
    CountrySelector.prototype.render = function () {
        var _this = this;
        var searchKeyword = this.state.searchKeyword;
        var _a = this.props, visible = _a.visible, onChange = _a.onChange, onClose = _a.onClose;
        var groupedCountries = [];
        groupedCountries = groupBy(Country.getAll(), function (o) { return o.name[0].toUpperCase(); });
        groupedCountries = Object.keys(groupedCountries).map(function (letter) {
            return {
                letter: letter,
                countries: groupedCountries[letter],
            };
        });
        return (React.createElement(Modal, { useNativeDriver: false, coverScreen: true, isOpen: visible, swipeArea: 100, onClosed: onClose, style: { height: 450 }, position: 'bottom' },
            React.createElement(Styled.CountrySelector.Container, null,
                React.createElement(Styled.CountrySelector.Header, null,
                    React.createElement(Styled.CountrySelector.CloseLine, null),
                    React.createElement(Text, { bold: true, size: 16, textProps: { style: { textAlign: 'center', marginTop: 15 } } }, "Select a country")),
                React.createElement(View, { style: { margin: 15 } },
                    React.createElement(Input, { value: searchKeyword, placeholder: 'Search country', onChangeText: function (text) {
                            _this.setState({ searchKeyword: text });
                        } })),
                this.state.loading && (React.createElement(View, { style: { alignItems: 'center', justifyContent: 'center', flex: 1, marginTop: 100 } },
                    React.createElement(ActivityIndicator, null))),
                !this.state.loading && (React.createElement(ScrollView, { keyboardShouldPersistTaps: 'handled' },
                    React.createElement(FlatList, { removeClippedSubviews: true, data: searchKeyword
                            ? groupedCountries.filter(function (group) { return searchKeyword.toLowerCase().indexOf(group.letter.toLowerCase()) > -1; })
                            : groupedCountries, keyExtractor: function (item) { return item.letter; }, renderItem: function (_a) {
                            var item = _a.item;
                            return (React.createElement(GroupCountries, { onSelect: onChange, letter: item.letter, countries: item.countries }));
                        } }),
                    React.createElement(View, { style: { height: 160 } }))))));
    };
    return CountrySelector;
}(React.PureComponent));
export default CountrySelector;
//# sourceMappingURL=CountrySelector.js.map
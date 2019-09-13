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

const GroupCountries = ({ letter, onSelect, countries }: { letter: string; onSelect: any; countries: Array<any> }) => (
  <Styled.CountrySelector.GroupCountries>
    <Text bold color={'gray'} textProps={{ style: { marginLeft: 15, marginBottom: 10 } }}>
      {letter}
    </Text>
    <FlatList
      data={countries}
      removeClippedSubviews={true}
      getItemLayout={(data, index) => ({
        length: 70,
        offset: 70 * index,
        index,
      })}
      keyExtractor={item => item.iso2}
      renderItem={({ item }: { item: any }) => (
        <Styled.CountrySelector.Country onPress={() => onSelect(item)} underlayColor={'#ddd'}>
          <Styled.CountrySelector.CountryContent>
            <Image source={Flag.get(item.iso2)} style={{ width: 30, height: 20, borderRadius: 2 }} />
            <Text medium textProps={{ style: { marginLeft: 10 } }}>
              {`${item.name} (+${item.dialCode})`}
            </Text>
          </Styled.CountrySelector.CountryContent>
        </Styled.CountrySelector.Country>
      )}
    />
  </Styled.CountrySelector.GroupCountries>
);

class CountrySelector extends React.PureComponent<{ visible: boolean; onChange: any; onClose: any }> {
  state = {
    searchKeyword: '',
    visible: false,
    loading: true,
  };

  componentDidUpdate(
    prevProps: Readonly<{ visible: boolean; onChange: any; onClose: any }>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    if (!prevProps.visible && this.props.visible) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }
    if (prevProps.visible && !this.props.visible) {
      setTimeout(() => {
        this.setState({ loading: true });
      }, 1000);
    }
  }

  render() {
    const { searchKeyword } = this.state;
    const { visible, onChange, onClose } = this.props;
    let groupedCountries: any = [];
    groupedCountries = groupBy(Country.getAll(), o => o.name[0].toUpperCase());
    groupedCountries = Object.keys(groupedCountries).map(letter => {
      return {
        letter,
        countries: groupedCountries[letter],
      };
    });
    return (
      <Modal
        useNativeDriver={false}
        coverScreen={true}
        isOpen={visible}
        swipeArea={100}
        onClosed={onClose}
        style={{ height: 450 }}
        position={'bottom'}
      >
        <Styled.CountrySelector.Container>
          <Styled.CountrySelector.Header>
            <Styled.CountrySelector.CloseLine />
            <Text bold size={16} textProps={{ style: { textAlign: 'center', marginTop: 15 } }}>
              Select a country
            </Text>
          </Styled.CountrySelector.Header>
          <View style={{ margin: 15 }}>
            <Input
              value={searchKeyword}
              placeholder={'Search country'}
              onChangeText={text => {
                this.setState({ searchKeyword: text });
              }}
            />
          </View>
          {this.state.loading && (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, marginTop: 100 }}>
              <ActivityIndicator />
            </View>
          )}
          {!this.state.loading && (
            <ScrollView keyboardShouldPersistTaps={'handled'}>
              <FlatList
                removeClippedSubviews={true}
                data={
                  searchKeyword
                    ? groupedCountries.filter(
                        group => searchKeyword.toLowerCase().indexOf(group.letter.toLowerCase()) > -1,
                      )
                    : groupedCountries
                }
                keyExtractor={item => item.letter}
                renderItem={({ item }: { item: any }) => (
                  <GroupCountries onSelect={onChange} letter={item.letter} countries={item.countries} />
                )}
              />
              <View style={{ height: 160 }} />
            </ScrollView>
          )}
        </Styled.CountrySelector.Container>
      </Modal>
    );
  }
}

export default CountrySelector;

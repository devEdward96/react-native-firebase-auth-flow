import React from 'react';
import PhoneInput from 'react-native-phone-input';
import { View } from 'react-native';
import Country from 'react-native-phone-input/lib/country';
import { ActivityIndicator } from 'react-native-paper';
import Styled from './Styled';
import Text from '../../components/Typography/Text';
import Input from '../../components/Forms/Input';
import CountrySelector from '../../components/Selectors/CountrySelector';
import { AuthContext, AuthContextInterface } from '../../contexts/AuthContext';

export default class SignInWithPhone extends React.PureComponent<{
  onInputFocus: any;
  theme: any;
  onSignInWithAnotherMethods: any;
}> {
  phoneInputRef;

  static contextType = AuthContext;
  context: AuthContextInterface;

  async componentDidMount() {
    const response = await fetch('http://ip-api.com/json/');
    const ipData = await response.json();
    setTimeout(() => {
      this.setState({
        fetchingCountry: false,
        country: Country.getCountryDataByCode(ipData.countryCode.toLowerCase()),
      });
    }, 1000);
  }

  state = {
    phoneNumber: null,
    fetchingCountry: true,
    openCountrySelector: false,
    country: Country.getCountryDataByCode('vn'),
  };

  render() {
    const { country, openCountrySelector, phoneNumber, fetchingCountry } = this.state;
    const { onInputFocus, onSignInWithAnotherMethods, theme } = this.props;
    return (
      <View>
        <Text medium size={16}>
          Use your phone number to get started
        </Text>
        <Styled.SignIn.PhoneInput>
          <Styled.SignIn.PhoneInputContent>
            <Styled.SignIn.FlagAndPrefix
              underlayColor={'#f1f1f1'}
              onPress={() => {
                requestAnimationFrame(() => this.setState({ openCountrySelector: true }));
              }}
            >
              <Styled.SignIn.FlagAndPrefixContent>
                {fetchingCountry && (
                  <View style={{ width: 80 }}>
                    <ActivityIndicator size={'small'} />
                  </View>
                )}
                {!fetchingCountry && (
                  <PhoneInput
                    allowZeroAfterCountryCode={false}
                    initialCountry={'vn'}
                    ref={ref => {
                      this.phoneInputRef = ref;
                    }}
                    onPressFlag={() => this.setState({ openCountrySelector: true })}
                    style={{ width: 40 }}
                  />
                )}
                {!fetchingCountry && <Text>{`+${country.dialCode}`}</Text>}
                {!fetchingCountry && <Styled.SignIn.CountryArrow name={'chevron-down'} />}
              </Styled.SignIn.FlagAndPrefixContent>
            </Styled.SignIn.FlagAndPrefix>
            <Styled.SignIn.PhoneInputDivider />
            <View style={{ flex: 12, height: 32 }}>
              <Input
                keyboardType={'number-pad'}
                onFocus={onInputFocus}
                onChangeText={text => {
                  this.state.phoneNumber = text;
                  this.context.onSetPhoneNumber(`+${country.dialCode}`, text);
                }}
                style={{ height: 32 }}
                placeholder={'918235234'}
              />
            </View>
          </Styled.SignIn.PhoneInputContent>
          <Styled.SignIn.LoginWithAnotherMethods underlayColor={'#f1f1f1'} onPress={onSignInWithAnotherMethods}>
            <Text color={'blue'} textProps={{ style: { color: theme.colors.primary } }}>
              Or login with another methods
            </Text>
          </Styled.SignIn.LoginWithAnotherMethods>
          <CountrySelector
            onChange={(ct: any) => {
              if (this.phoneInputRef) {
                this.phoneInputRef.selectCountry(ct.iso2.toLowerCase());
              }
              this.setState({ country: ct });
              this.context.onSetPhoneNumber(`+${ct.dialCode}`, phoneNumber);
              requestAnimationFrame(() => {
                this.setState({ openCountrySelector: false });
              });
            }}
            visible={openCountrySelector}
            onClose={() => {
              requestAnimationFrame(() => {
                this.setState({ openCountrySelector: false });
              });
            }}
          />
        </Styled.SignIn.PhoneInput>
      </View>
    );
  }
}

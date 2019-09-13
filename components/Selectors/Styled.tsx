import styled from 'styled-components/native';
import { TouchableHighlight, View } from 'react-native';

export default {
  CountrySelector: {
    Container: styled(View)``,
    GroupCountries: styled(View)`
      padding: 15px 0;
      background: #f8f8f8;
    `,
    CloseLine: styled(View)`
      width: 50px;
      height: 3px;
      background: ${props => props.theme.colors.lightGrey};
      margin-top: 15px;
      border-radius: 3px;
    `,
    Header: styled(View)`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    Country: styled(TouchableHighlight)``,
    CountryContent: styled(View)`
      background: #fff;
      border-bottom-width: 0.5px;
      border-bottom-color: #eee;
      padding: 15px;
      display: flex;
      align-items: center;
      flex-direction: row;
    `,
  },
};

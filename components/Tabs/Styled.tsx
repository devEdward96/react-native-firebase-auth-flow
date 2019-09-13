import styled from 'styled-components';
import { View, TouchableHighlight } from 'react-native';

export default {
  BaseTabBar: {
    Container: styled(View)`
      height: 48px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      border-bottom-width: 0.5px;
      border-bottom-color: #eee;
    `,
    TabBar: styled(TouchableHighlight)`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `,
  },
};

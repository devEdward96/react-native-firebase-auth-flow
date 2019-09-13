import React from 'react';
import Styled from './Styled';
import Text from '../../components/Typography/Text';

const Brand = () => (
  <Styled.SignIn.Header>
    <Styled.SignIn.Brand>
      <Text color={'white'} textProps={{ style: { marginTop: 10, marginBottom: 3 } }} bold size={18}>
        EcoBase
      </Text>
      <Text color={'white'} size={16} light>
        {'Based app components for eco apps'}
      </Text>
    </Styled.SignIn.Brand>
  </Styled.SignIn.Header>
);

export default Brand;

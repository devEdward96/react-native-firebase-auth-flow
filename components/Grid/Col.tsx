import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { View, ViewProps } from 'react-native';

interface BaseProps {
  gutter: number;
  colProps?: ViewProps;
  children: ReactElement<any>;
}

const StyledContainer = styled(View)<{ gutter: number }>`
  flex: 1;
  margin-left: ${props => `${props.gutter}px`};
  margin-right: ${props => `${props.gutter}px`};
`;

const Col = (props: BaseProps) => {
  return (
    <StyledContainer gutter={props.gutter} {...props.colProps}>
      {props.children}
    </StyledContainer>
  );
};

export default Col;

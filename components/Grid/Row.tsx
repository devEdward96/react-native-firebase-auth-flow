import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { View, ViewProps } from 'react-native';

interface BaseProps {
  gutter: number;
  rowProps?: ViewProps;
  children: Array<ReactElement<any>>;
}

const StyledContainer = styled(View)<{ gutter: number }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: ${props => `-${props.gutter}px`};
  margin-right: ${props => `-${props.gutter}px`};
`;

const Row = (props: BaseProps) => {
  return (
    <StyledContainer gutter={props.gutter} {...props.rowProps}>
      {props.children}
    </StyledContainer>
  );
};

export default Row;

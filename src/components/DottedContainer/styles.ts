import styled from 'styled-components/native';

export const Container = styled.View`
  overflow: hidden;

  margin-left: 4px;
  margin-right: 4px;
`;

export const Content = styled.View`
  border-style: dotted;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.dottedContainer.color};

  margin-top: -2px;
  margin-left: -2px;
  margin-right: -2px;
  margin-bottom: 0px;
`;

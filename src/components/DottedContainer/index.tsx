import React from 'react';

import { Container, Content } from './styles';

interface DottedContainerProps {
  children: JSX.Element;
}

function DottedContainer({ children }: DottedContainerProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

export default DottedContainer;

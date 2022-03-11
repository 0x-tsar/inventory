import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: left;
  background-color: rgba(0, 0, 40, 1);
  color: white;
  border-right: 1px solid rgba(0, 0, 20, 1);
`;

const Left = () => {
  return <Container>Left</Container>;
};

export default Left;

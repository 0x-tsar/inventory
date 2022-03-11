import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: left;
  background-color: yellowgreen;
`;

const Left = () => {
  return <Container>Left</Container>;
};

export default Left;

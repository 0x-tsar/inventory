import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  background-color: blueviolet;
`;

const Header = () => {
  return <Container>Header</Container>;
};

export default Header;

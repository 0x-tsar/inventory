import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  background-color: rgba(0, 0, 40, 1);
  color: white;
  border-bottom: 1px solid rgba(0, 0, 20, 1);
`;

const Header = () => {
  return <Container>Header</Container>;
};

export default Header;

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Slot from "./Slot";

export const Container = styled.div`
  width: 330px;
  height: min-content;
  background-color: black;
  margin: 5px;

  justify-content: center;
  align-items: center;

  display: flex;
  /* align-content: flex-start; */
  flex-wrap: wrap;
`;

const Inventory = () => {
  return (
    <Container>
      <Slot image={"/items/sword3.png"}></Slot>
      <Slot image={"/items/sword4.png"}></Slot>
      <Slot image={"/items/sword5.png"}></Slot>
      <Slot></Slot>
      <Slot></Slot>
      <Slot></Slot>
      <Slot></Slot>
      <Slot></Slot>
      <Slot></Slot>
    </Container>
  );
};

export default Inventory;

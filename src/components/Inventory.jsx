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

const Inventory = ({ setModalInventoryVisible }) => {
  return (
    <Container>
      <Slot
        position={0}
        setModalInventoryVisible={setModalInventoryVisible}
        image={"/items/sword3.png"}
      ></Slot>
      <Slot
        position={1}
        setModalInventoryVisible={setModalInventoryVisible}
        image={"/items/sword4.png"}
      ></Slot>
      <Slot
        position={2}
        setModalInventoryVisible={setModalInventoryVisible}
        image={"/items/sword5.png"}
      ></Slot>
      <Slot
        position={3}
        setModalInventoryVisible={setModalInventoryVisible}
      ></Slot>
      <Slot
        position={4}
        setModalInventoryVisible={setModalInventoryVisible}
      ></Slot>
      <Slot
        position={5}
        setModalInventoryVisible={setModalInventoryVisible}
      ></Slot>
      <Slot
        position={6}
        setModalInventoryVisible={setModalInventoryVisible}
      ></Slot>
      <Slot
        position={7}
        setModalInventoryVisible={setModalInventoryVisible}
      ></Slot>
      <Slot
        position={8}
        setModalInventoryVisible={setModalInventoryVisible}
      ></Slot>
    </Container>
  );
};

export default Inventory;

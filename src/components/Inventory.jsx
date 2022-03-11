import Image from "next/image";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/context";
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
  const { itemsTrading } = useContext(AuthContext);

  return (
    <Container>
      {itemsTrading.map((item, key) => {
        return item ? (
          <Slot
            key={key}
            position={key}
            setModalInventoryVisible={setModalInventoryVisible}
            image={item}
          ></Slot>
        ) : (
          <Slot
            key={key}
            position={key}
            setModalInventoryVisible={setModalInventoryVisible}
            image={""}
          ></Slot>
        );
      })}

      {/* <Slot
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
      ></Slot> */}
    </Container>
  );
};

export default Inventory;

import Image from "next/image";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/context";

export const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgba(100, 0, 100, 0.3);
  margin: 5px 5px 5px 5px;
  padding: 10px;

  img {
    transform: scale(0.9);
  }

  :hover {
    img {
      transform: scale(1);
    }
  }
  cursor: pointer;
`;

export const CloseButton = styled.div`
  width: 12px;
  /* right: 0; */
  /* top: 0; */
  /* position: absolute; */
  background-color: red;

  :hover {
    background-color: green;
  }
`;

const Slot = ({ image, position, setModalInventoryVisible }) => {
  const {
    itemsTrading,
    setItemsTrading,
    myItemsInventory,
    setMyItemsInventory,
  } = useContext(AuthContext);

  // function handleRemove(id) {
  //   const newList = list.filter((item) => item.id !== id);
  //   setList(newList);
  // }

  return (
    <Container
      onClick={(e) => {
        setModalInventoryVisible("flex");

        // setMyItemsInventory(myItemsInventory[position], "");
        // setItemsTrading([itemsTrading[position], ""]);
        // itemsTrading[position] = "";
        // setItemsTrading(itemsTrading[position], "");
        // console.log(itemsTrading);
        //   itemsTrading[position] = "";
        //   let item = {
        //     ...items[1],
        //     name: 'newName'
        // }
        // console.log(itemsTrading[position]);
        // setItemsTrading(itemsTrading =>{(...itemsTrading)})
        // setItemsTrading((itemsTrading) => (...itemsTrading, ''));
        // open modal window inventory
      }}
    >
      {/* <CloseButton
        onClick={(e) => {
          console.log(position);
        }}
      >
        X
      </CloseButton> */}

      {image ? (
        <Image src={image} width={100} height={100} alt={"item"}></Image>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default Slot;

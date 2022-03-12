import Image from "next/image";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/context";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  color: white;
  font-family: monospace, "Courier New", Courier;
  display: ${(props) => (props.visible === "flex" ? "flex" : "none")};
  font-size: 30px;

  span {
    position: absolute;
    background-color: red;
    padding: 10px;
    margin: 10px;
    float: right;
    right: 0;
    cursor: pointer;

    :hover {
      background-color: rgba(200, 0, 0);
    }
  }
`;

export const Holder = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

  cursor: pointer;

  :hover {
    background-color: rgba(0, 255, 50);
  }
`;

const ModalInventory = ({ setModalInventoryVisible, visible }) => {
  const {
    myItemsInventory,
    setMyItemsInventory,
    itemsTrading,
    setItemsTrading,
    currentSlot,
    setCurrentSlot,
  } = useContext(AuthContext);

  const removeItems = (item) => {
    const newList = myItemsInventory.filter((each) => {
      return each !== item;
    });

    setMyItemsInventory(newList);
    setMyItemsInventory((newList) => [...newList, ""]);

    setItemsTrading((itemsTrading) => [...itemsTrading, item]);
  };

  return (
    <Container visible={visible}>
      <span
        onClick={() => {
          setModalInventoryVisible("none");
        }}
      >
        X
      </span>

      {myItemsInventory.map((item, key) => {
        return item && item ? (
          <Holder
            key={key}
            onClick={() => {
              console.log(item);

              removeItems("/items/sword5.png");

              // setItemsTrading(itemsTrading, [
              //   ...itemsTrading,
              //   { item: item },
              // ]);

              //here
              // setItemsTrading((itemsTrading) => [...itemsTrading, item]);
              // setMyItemsInventory([]);

              // setMyItemsInventory((myItemsInventory) => [
              //   ...myItemsInventory,
              //   {
              //     item: "",
              //   },
              // ]);

              // setItemsTrading(myItemsInventory, [
              //   ...myItemsInventory,
              //   { item: "" },
              // ]);

              setModalInventoryVisible("none");
            }}
          >
            <img src={item} alt="item" width={100} height={100} />
          </Holder>
        ) : (
          <p></p>
        );
      })}
    </Container>
  );
};

export default ModalInventory;

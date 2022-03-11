import Image from "next/image";
import React, { useContext } from "react";
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
  } = useContext(AuthContext);

  return (
    <Container visible={visible}>
      <span
        onClick={() => {
          setModalInventoryVisible("none");
        }}
      >
        X
      </span>

      <Holder>
        {myItemsInventory.map((item, key) => {
          return item ? (
            <Holder
              key={key}
              onClick={() => {
                // console.log(myItemsInventory);
              }}
            >
              <img src={item} alt="item" width={100} height={100} />
            </Holder>
          ) : (
            <></>
          );
        })}
      </Holder>
    </Container>
  );
};

export default ModalInventory;

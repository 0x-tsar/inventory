import React from "react";
import styled from "styled-components";

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

const ModalInventory = ({ setModalInventoryVisible, visible }) => {
  return (
    <Container visible={visible}>
      <span
        onClick={() => {
          setModalInventoryVisible("none");
        }}
      >
        X
      </span>
    </Container>
  );
};

export default ModalInventory;

import "../../styles/globals.css";
import { AuthProvider } from "../context/context";
import styled from "styled-components";
import { useState } from "react";

export const Container = styled.div`
  background-color: beige;
  display: grid;
  grid-template-columns: 300px calc(100vw - 300px);
  grid-template-rows: 70px calc(100vh - 70px);
  grid-template-areas:
    "header header"
    "left main";

  @media screen and (max-width: 600px) {
    background-color: blue;
    grid-template-columns: 100vw;
    grid-template-rows: 100vh;
    grid-template-areas: "main";
  }
`;

export const ModalInventory = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
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

function MyApp({ Component, pageProps }) {
  const [modalInventoryVisible, setModalVisible] = useState("none");

  return (
    <AuthProvider>
      <Container>
        <Component
          setModalInventoryVisible={setModalInventoryVisible}
          {...pageProps}
        />
        <ModalInventory visible={modalInventoryVisible}>
          <span
            onClick={() => {
              setModalVisible("none");
            }}
          >
            X
          </span>
        </ModalInventory>
      </Container>
    </AuthProvider>
  );

  function setModalInventoryVisible() {
    console.log("called");
    if (modalInventoryVisible === "none") {
      setModalVisible("flex");
    } else {
      setModalVisible("none");
    }
  }
}

export default MyApp;

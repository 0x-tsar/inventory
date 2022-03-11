import "../../styles/globals.css";
import { AuthProvider } from "../context/context";
import styled from "styled-components";
import { useState } from "react";
import Header from "../components/Header";
import Left from "../components/Left";
import ModalInventory from "../components/ModalInventory";

export const Container = styled.div`
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

function MyApp({ Component, pageProps }) {
  const [modalInventoryVisible, setModalVisible] = useState("none");

  return (
    <AuthProvider>
      <Container>
        <Component
          setModalInventoryVisible={setModalInventoryVisible}
          {...pageProps}
        />
        <Header></Header>
        <Left></Left>
        <ModalInventory
          visible={modalInventoryVisible}
          setModalInventoryVisible={setModalInventoryVisible}
        ></ModalInventory>
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

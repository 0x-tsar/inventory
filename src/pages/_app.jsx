import "../../styles/globals.css";
import { AuthProvider } from "../context/context";
import styled from "styled-components";

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

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </AuthProvider>
  );
}

export default MyApp;

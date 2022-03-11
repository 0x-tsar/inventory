import Image from "next/image";
import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgba(100, 0, 100, 0.3);
  margin: 5px 5px 5px 5px;
  padding: 10px;

  :hover {
    img {
      transform: scale(1.2);
    }
  }
  cursor: pointer;
`;

const Slot = ({ image }) => {
  return (
    <Container>
      {image ? (
        <Image src={image} width={100} height={100} alt={"item"}></Image>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default Slot;

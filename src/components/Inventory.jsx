import Image from "next/image";
import React from "react";
import styled from "styled-components";

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

export const Slot = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgba(100, 0, 100, 0.3);
  margin: 5px 5px 5px 5px;
  padding: 10px;

  :hover {
    img {
      transform: scale(1.1);
    }
  }
  cursor: pointer;
`;

// export const Item = styled.Image`
//   width: 100px;
//   height: 100px;
// `;

const Inventory = () => {
  return (
    <Container>
      <Slot>
        <Image
          src={"/items/sword3.png"}
          width={100}
          height={100}
          alt={"item"}
        ></Image>
      </Slot>
      <Slot>
        <Image
          src={"/items/sword4.png"}
          width={100}
          height={100}
          alt={"item"}
        ></Image>
      </Slot>
      <Slot>
        <Image
          src={"/items/sword5.png"}
          width={100}
          height={100}
          alt={"item"}
        ></Image>
      </Slot>
      <Slot>
        <Image
          src={"/items/sword7.png"}
          width={100}
          height={100}
          alt={"item"}
        ></Image>
      </Slot>
      <Slot>
        <Image
          src={"/items/sword7.png"}
          width={100}
          height={100}
          alt={"item"}
        ></Image>
      </Slot>
      <Slot>
        <Image
          src={"/items/sword7.png"}
          width={100}
          height={100}
          alt={"item"}
        ></Image>
      </Slot>
      <Slot>
        <Image
          src={"/items/sword7.png"}
          width={100}
          height={100}
          alt={"item"}
        ></Image>
      </Slot>
      <Slot>
        <Image
          src={"/items/sword7.png"}
          width={100}
          height={100}
          alt={"item"}
        ></Image>
      </Slot>
      <Slot>
        <Image
          src={"/items/sword7.png"}
          width={100}
          height={100}
          alt={"item"}
        ></Image>
      </Slot>
    </Container>
  );
};

export default Inventory;

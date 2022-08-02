import {useContext} from "react";

import styled from "styled-components";
import Context from "../Context";

export default function Header() {
  const {login, theme} = useContext(Context);
  return (
    <Heading theme={theme}>
      <h2>TrackIt</h2>
      <img src={login.image} alt="user" />
    </Heading>
  );
}

const Heading = styled.header`
  width: 100vw;
  height: 70px;
  padding: 0 18px;

  background: ${props => props.theme.darkBlue};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  h2 {
    color: ${props => props.theme.white};
    font: 39px/49px "Playball", cursive;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

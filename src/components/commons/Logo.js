import styled from "styled-components";

import logo from "../../assets/images/logo.png";
import {useContext} from "react";
import Context from "../Context";

export default function Logo() {
  const {theme} = useContext(Context);

  return (
    <LogoContainer theme={theme}>
      <img src={logo} alt="logo" />
      <h1>TrackIt</h1>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  margin: 68px 0 33px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
  }

  h1 {
    color: ${props => props.theme.darkBlue};
    font: 69px/86px "Playball", cursive;
  }
`;

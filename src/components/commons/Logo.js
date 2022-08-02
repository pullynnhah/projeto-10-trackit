import styled from "styled-components";

import logo from "../../assets/images/logo.png";

export default function Logo() {
  return (
    <LogoContainer>
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
    color: var(--dark-blue);
    font: 69px/86px "Playball", cursive;
  }
`;

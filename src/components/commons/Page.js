import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import {useContext} from "react";
import Context from "../Context";

export default function Page({children}) {
  const {theme} = useContext(Context);
  return (
    <>
      <Header />
      <Container theme={theme}>{children}</Container>
      <Footer />
    </>
  );
}

const Container = styled.main`
  height: calc(100vh - 140px);
  margin: 70px 0;
  padding: 0 18px;
  background: ${props => props.theme.backgroundGray};
`;

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

  .heading {
    height: 57px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  h3 {
    font-size: 23px;
    line-height: 29px;
    color: ${props => props.theme.darkBlue};
  }

  button {
    width: 40px;
    height: 35px;
    font-size: 27px;
    line-height: 34px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    color: ${props => props.theme.white};
    background: ${props => props.theme.blue};
  }
`;

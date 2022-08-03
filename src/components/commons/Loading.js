import {Hearts} from "react-loader-spinner";
import Page from "./Page";
import styled from "styled-components";

export default function Loading() {
  return (
    <Page>
      <LoadingWrapper>
        <Hearts height="180" width="180" color="#52b6ff" />
      </LoadingWrapper>
    </Page>
  );
}

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

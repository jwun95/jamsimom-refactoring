import React from "react";
import Navbar from "./Navbar";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <Container>
      <MainContainer>
        <ContentContainer>{props.children}</ContentContainer>
        <Navbar />
      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f5;
`;

const MainContainer = styled.div`
  background-color: #ffff;
  max-width: 440px;
  min-width: 360px;
  margin: auto;
  padding: 16px 16px 0px 16px;
`;

const ContentContainer = styled.main`
  height: 100%;
`;

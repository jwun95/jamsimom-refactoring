import React from "react";
import { useRouter } from "next/router";
import { IoChevronBackOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import styled from "@emotion/styled";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const router = useRouter();

  return (
    <Container>
      <IconContext.Provider
        value={{
          size: "24",
          color: "black",
        }}
      >
        <BackButton onClick={() => router.back()}>
          <IoChevronBackOutline />
        </BackButton>
      </IconContext.Provider>

      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  padding: 12px 0px;
  align-items: center;
  gap: 8px;
`;

const BackButton = styled.button`
  margin-right: 8px;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

const Title = styled.span`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.288px;
`;

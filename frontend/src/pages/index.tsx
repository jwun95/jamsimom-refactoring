import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { AiOutlineSetting } from "react-icons/ai";
import { IconContext } from "react-icons";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import SitterCard from "@/components/SitterCard";

export default function Home() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/search");
  };

  return (
    <div>
      <Header>
        <Link href="/">
          <Image src={Logo} alt="main-logo" />
        </Link>
        <IconContext.Provider
          value={{
            color: "gray",
            size: "24",
          }}
        >
          <Link href="/setting">
            <AiOutlineSetting />
          </Link>
        </IconContext.Provider>
      </Header>
      <SearchSection>
        <AbsoluteLayer>
          <Button onClick={handleClick}>시터 찾기</Button>
        </AbsoluteLayer>
      </SearchSection>
      <RankerSection>
        <RankerHeader>
          <RankerTitle>금주의 인기 시터</RankerTitle>
          <RankerDetailButton>더보기 &#62;</RankerDetailButton>
        </RankerHeader>
        <SitterCard name="박주영" />
      </RankerSection>
    </div>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;

const SearchSection = styled.section`
  position: relative;
  width: 100%;
  height: 144px;
  background-image: url("sitterSearch.svg");
  background-size: cover;
`;

const AbsoluteLayer = styled.div`
  position: absolute;
  top: 51.5px;
  right: 16px;
`;

const RankerSection = styled.section`
  margin-top: 12px;
`;

const RankerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
`;

const RankerTitle = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 18px;
`;

const RankerDetailButton = styled.button`
  border: none;
  font-weight: bold;
  background-color: #fff;
  font-size: 14px;
  cursor: pointer;
`;

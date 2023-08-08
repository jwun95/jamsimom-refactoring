import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { AiOutlineSetting } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Home() {
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
          {" "}
          <Link href="/setting">
            <AiOutlineSetting />
          </Link>
        </IconContext.Provider>
      </Header>
    </div>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

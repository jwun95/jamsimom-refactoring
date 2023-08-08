import { IconContext } from "react-icons";
import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type NavarItemProps = {
  children: React.ReactNode;
  size?: string;
  url: string;
  menuName: string;
};

export default function NavbarItem({
  children,
  url,
  menuName,
}: NavarItemProps) {
  const router = useRouter();

  return (
    <IconContext.Provider
      value={{
        color: url === router.pathname ? "#5A2F0F" : "gray",
        size: "24",
      }}
    >
      <Item>
        <NavLink href={url}>
          <div>{children}</div>
          <NavTitle color={url === router.pathname ? "#5A2F0F" : "gray"}>
            {menuName}
          </NavTitle>
        </NavLink>
      </Item>
    </IconContext.Provider>
  );
}

const Item = styled.li`
  padding: 9px;
  width: 55px;
  height: 38px;
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration-line: none;
`;
const NavTitle = styled.span`
  color: ${(props) => props.color};
  font-size: 12px;
  font-weight: bold;
`;

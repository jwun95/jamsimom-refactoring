import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import styled from "@emotion/styled";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <Nav>
      <Items>
        <NavbarItem url="/" menuName="홈">
          <AiOutlineHome />
        </NavbarItem>
        <NavbarItem url="/search" menuName="검색">
          <BsSearch />
        </NavbarItem>
        <NavbarItem url="/child" menuName="아이 관리">
          <AiOutlineUser />
        </NavbarItem>
      </Items>
    </Nav>
  );
}

const Nav = styled.nav`
  position: sticky;
  width: inherit;
  bottom: 0px;
  z-index: 10;
  height: 56px;
  background-color: #fff;
`;

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0px 24px;
`;

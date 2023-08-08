import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import styled from "@emotion/styled";

export default function Navbar() {
  return (
    <Nav>
      <Items>
        <Item>
          <AiFillHome />
        </Item>
        <Item>
          <BsSearch />
        </Item>
        <Item>
          <AiOutlineUser />
        </Item>
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
  background-color: red;
`;

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0px 8px;
`;

const Item = styled.li`
  display: flex;
`;

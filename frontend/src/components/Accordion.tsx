import { useState } from "react";

import styled from "@emotion/styled";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { IconContext } from "react-icons";

type ContentProps = {
  active: boolean;
};

type AccordionProps = {
  children?: React.ReactNode;
};

export default function Accordion({ children }: AccordionProps) {
  const [active, setActive] = useState<boolean>(true);

  const handleClick = () => {
    setActive((value) => !value);
  };

  return (
    <Container>
      <Header>
        <Title>Accordion</Title>
        <ActiveButton onClick={handleClick}>
          <IconContext.Provider
            value={{
              size: "24",
            }}
          >
            {active ? <BsChevronUp /> : <BsChevronDown />}
          </IconContext.Provider>
        </ActiveButton>
      </Header>
      <Content active={active}>{children}ggg</Content>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.div`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const ActiveButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

const Content = styled.div<ContentProps>`
  max-height: ${(props) => (props.active ? "0px" : "fit-content")};
  margin: 8px 12px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

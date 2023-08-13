import { useState } from "react";

import styled from "@emotion/styled";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { IconContext } from "react-icons";

type ContentProps = {
  active: boolean;
};

type AccordionProps = {
  children?: React.ReactNode;
  title: string;
};

export default function Accordion({ children, title }: AccordionProps) {
  const [active, setActive] = useState<boolean>(true);

  const handleClick = () => {
    setActive((value) => !value);
  };

  return (
    <Container>
      <Header onClick={handleClick}>
        <Title>{title}</Title>
        <IconContext.Provider
          value={{
            size: "24",
          }}
        >
          {active ? <BsChevronUp /> : <BsChevronDown />}
        </IconContext.Provider>
      </Header>
      <Content active={active}>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 12px 0px;
`;

const Header = styled.div`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const Content = styled.div<ContentProps>`
  max-height: ${(props) => (props.active ? "fit-content" : "0")};
  margin: 0px 12px;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`;

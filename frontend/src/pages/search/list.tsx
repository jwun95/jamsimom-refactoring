import React from "react";
import Header from "@/components/Header";
import SitterCard from "@/components/SitterCard";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import styled from "@emotion/styled";

import { useRouter } from "next/router";

export default function SearchList() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/search/submit");
  };

  return (
    <>
      <Header title="검색 조건" />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2">검색 조건</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>"저희 아이가 너무 좋아해요"</div>
          <div>"시간 약속을 잘 지키고 성실해요"</div>
        </AccordionDetails>
      </Accordion>
      <Section title="검색 결과 (7)">
        <TagWrapper>
          <Tag btn={true} color="#FEFEFE">
            추천순
          </Tag>
          <Tag btn={true} color="#FEFEFE">
            거리순
          </Tag>
          <Tag btn={true} color="#FEFEFE">
            인기순
          </Tag>
        </TagWrapper>
      </Section>
      <SitterCard name="박주영" onClick={handleClick} />
      <SitterCard name="이현우" />
      <SitterCard name="손아진" />
    </>
  );
}

const TagWrapper = styled.div`
  display: flex;
`;

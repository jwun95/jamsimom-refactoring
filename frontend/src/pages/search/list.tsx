import React from "react";
import Header from "@/components/Header";
import SitterCard from "@/components/SitterCard";

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

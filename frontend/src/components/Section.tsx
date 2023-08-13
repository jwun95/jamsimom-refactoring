import React from "react";
import styled from "@emotion/styled";

type SectionProps = {
  children: React.ReactNode;
  required?: boolean;
  title: string;
};

/** 기본 Section
 * required = true면 필수 사항 표시
 */

export default function Section({
  children,
  required = false,
  title,
}: SectionProps) {
  return (
    <Container>
      <SectionHeader>
        <Title>{title}</Title>
        {required && <Required> *</Required>}
      </SectionHeader>
      {children}
    </Container>
  );
}

const Container = styled.section`
  margin-bottom: 24px;
`;

const SectionHeader = styled.div`
  padding: 16px 0px;
`;

const Title = styled.span`
  font-weight: bold;
`;

const Required = styled.span`
  font-weight: bold;
  //color: #fff;
`;

import React from "react";
import styled from "@emotion/styled";

type SectionProps = {
  children: React.ReactNode;
  required?: boolean;
  title: string;
};

export default function Section({
  children,
  required = false,
  title,
}: SectionProps) {
  return (
    <section>
      <SectionHeader>
        <Title>{title}</Title>
        {required && <Required> *</Required>}
      </SectionHeader>
      <div>{children}</div>
    </section>
  );
}

const SectionHeader = styled.div`
  padding: 16px 0px;
`;

const Title = styled.span`
  font-weight: bold;
`;

const Required = styled.span`
  font-weight: bold;
  color: #904309;
`;

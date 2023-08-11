import React from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import SitterCard from "@/components/SitterCard";

const sitter = ["박주영"];

export default function SearchSubmit() {
  return (
    <>
      <Header title="시터 매칭" />
      <Section title="시터 정보">
        <SitterCard name="박주영" />
      </Section>
    </>
  );
}

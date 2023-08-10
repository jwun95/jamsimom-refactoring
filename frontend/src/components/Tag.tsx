import React from "react";
import styled from "@emotion/styled";

type TagProps = {
  onClick?: () => void;
  children: React.ReactNode;
  color?: string;
  btn?: boolean;
};

export default function Tag({
  children,
  color = "#fbe7d9",
  btn = false,
  onClick,
}: TagProps) {
  return (
    <div>
      {btn ? (
        <TagButton>{children}</TagButton>
      ) : (
        <TagBasic color={color}>
          <span>{children}</span>
        </TagBasic>
      )}
    </div>
  );
}

const TagBasic = styled.div`
  max-width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5px 6px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  height: 22px;
  font-size: 12px;
`;

const TagButton = styled.button``;

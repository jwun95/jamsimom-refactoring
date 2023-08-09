import React from "react";
import styled from "@emotion/styled";

type TagProps = {
  onClick?: () => void;
  children: React.ReactNode;
  color?: boolean;
  btn?: boolean;
};

export default function Tag({
  children,
  color = false,
  btn = false,
  onClick,
}: TagProps) {
  return (
    <div>
      {btn ? (
        <TagButton>{children}</TagButton>
      ) : (
        <TagBasic>
          <span>{children}</span>
        </TagBasic>
      )}
    </div>
  );
}

const TagButton = styled.button``;

const TagBasic = styled.div`
  max-width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5px 6px;
  background-color: #fbe7d9;
  border-radius: 10px;
  height: 22px;
  font-size: 12px;
`;

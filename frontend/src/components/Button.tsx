import React from "react";
import styled from "@emotion/styled";
import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = ReactButtonProps & {
  children: React.ReactNode;
  outline?: boolean;
  w?: string;
  h?: string;
};

type ButtonStyledProps = {
  w: string;
  h: string;
  outline: boolean;
};

export default function Button({
  children,
  outline = false,
  onClick,
  w = "102px",
  h = "43px",
}: ButtonProps) {
  return (
    <Btn onClick={onClick} w={w} h={h} outline={outline}>
      {children}
    </Btn>
  );
}

const Btn = styled.button<ButtonStyledProps>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  border: 1px solid #fcb25b;
  border-radius: 8px;
  background-color: ${(props) => (props.outline ? "#fff" : "#fcb25b")};
  font-weight: bold;
  cursor: pointer;
`;

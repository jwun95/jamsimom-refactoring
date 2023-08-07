import React from "react";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div>
			{props.children}
      <Navbar />
    </div>
  );
}

import React from "react";
import useHeaderHeight from "../hooks/useHeaderHeight";
import "./styles/Main.css";

function Main({ isOpen, children }) {
  const headerHeight = useHeaderHeight();

  return (
    <main
      className={`main ${isOpen ? "shift" : ""}`}
      style={{ paddingTop: headerHeight + 1 }}
    >
      {children}
    </main>
  );
}

export default Main;

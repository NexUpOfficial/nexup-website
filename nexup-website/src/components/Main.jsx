import React from "react";
import "./styles/Main.css";

function Main({ isOpen, children }) {
  return (
    <main className={`main ${isOpen ? "shift" : ""}`}>
      {children}
    </main>
  );
}

export default Main;

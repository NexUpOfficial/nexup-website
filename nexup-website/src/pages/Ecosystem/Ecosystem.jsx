import React from "react";
import Main from "../../components/Main";
import "../../page-styles/Ecosystem/Ecosystem.css";

function Ecosystem({ isOpen }) {
  return (
    <Main isOpen={isOpen}>
      <div className="eco-container">
        <h1 className="eco-title">Ecosystem</h1>
        <p>Welcome to NexWorld Ecosystem.</p>
      </div>
    </Main>
  );
}

export default Ecosystem;

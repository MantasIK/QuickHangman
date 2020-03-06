import React from "react";
import "./App.css";

function Header({ started }) {
  return (
    <div className="header">
      {started ? "Don't... Dangle!" : "Ready to... hang?"}
    </div>
  );
}

export default Header;

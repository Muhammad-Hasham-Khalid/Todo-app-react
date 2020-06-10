import React from "react";
import "./App.css";

function Header(props) {
  return (
    <div>
      <img
        src={props.src}
        width={props.width}
        className="logo"
        alt={props.alt}
      />
      <h1 className="app-title">{props.content}</h1>
    </div>
  );
}

export default Header;

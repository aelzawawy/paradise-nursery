import React from "react";
import { Link } from "react-router";

const Button = ({ path, text, style, onClick, id, disabled }) => {
  return (
    (path && (
      <Link to={path} {...style}>
        {text}
      </Link>
    )) || <button {...style} {...{onClick}} {...{id}} {...{disabled}}>{text}</button>
  );
};

export default Button;

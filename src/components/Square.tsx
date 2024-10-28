import React from "react";

const style = {
  background: "whitegreen",
  border: "2px solid darkwhite",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;

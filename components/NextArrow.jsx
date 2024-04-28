import React from "react";
import { FaArrowRight } from "react-icons/fa"; 

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

export default NextArrow;

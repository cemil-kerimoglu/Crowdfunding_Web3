import React from "react";

export const Button = ({ type, title, handleClick, styles }) => {
  return (
    <button
      type={type}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

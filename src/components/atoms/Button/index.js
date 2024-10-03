import React from "react";

const Button = ({ href, children, color = "text-white", bgClass = "bg-[#B99470]", size = "p-2" }) => (
  <a
    href={href}
    target="_blank"
    className={`flex items-center justify-center ${color} ${bgClass} ${size} rounded-lg cursor-pointer hover:bg-[#ECCA9C] transition duration-200 ease-in-out`}
  >
    {children}
  </a>
);

export default Button;

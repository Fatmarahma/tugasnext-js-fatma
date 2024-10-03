import React from "react";

const Input = ({ type, name, placeholder, required, maxLength }) => (
  <input
    className="border border-gray-300 p-2 mb-2 rounded-lg focus:outline-none focus:ring focus:ring-brown-300"
    type={type}
    name={name}
    placeholder={placeholder}
    required={required}
    maxLength={maxLength}
  />
);

export default Input;

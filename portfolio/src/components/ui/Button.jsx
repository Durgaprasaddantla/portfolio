// src/components/ui/Button.jsx
import React from "react";

export const Button = ({ children, className, ...props }) => (
  <button className={`button ${className}`} {...props}>
    {children}
  </button>
);

// Ensure it's exported as default.
export default Button;

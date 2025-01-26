// src/components/ui/Card.jsx
import React from "react";

export const Card = ({ children }) => <div className="card">{children}</div>;

export const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);

// Use a named export for `Card` instead of an anonymous default export.
export default Card;

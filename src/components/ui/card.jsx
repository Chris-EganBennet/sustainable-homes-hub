import React from "react";

export function Card({ children, className, ...props }) {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={`p-6 ${className || ""}`} {...props}>
      {children}
    </div>
  );
}
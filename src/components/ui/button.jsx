import React from "react";

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
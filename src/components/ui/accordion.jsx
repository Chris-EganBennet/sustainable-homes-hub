import React, { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export function Accordion({ type = "single", children, className, ...props }) {
  const [expandedItems, setExpandedItems] = useState({});
  
  const toggleItem = (value) => {
    setExpandedItems(prev => {
      if (type === "single") {
        return { [value]: !prev[value] };
      } else {
        return { ...prev, [value]: !prev[value] };
      }
    });
  };
  
  return (
    <AccordionContext.Provider value={{ expandedItems, toggleItem }}>
      <div className={`space-y-2 ${className || ""}`} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ children, value, className, ...props }) {
  return (
    <div 
      className={`border rounded-lg overflow-hidden ${className || ""}`} 
      {...props}
    >
      {children}
    </div>
  );
}

export function AccordionTrigger({ children, className, ...props }) {
  const { expandedItems, toggleItem } = useContext(AccordionContext);
  const accordionItem = props.value || props["data-value"] || "";
  const isExpanded = expandedItems[accordionItem];
  
  return (
    <button
      className={`flex justify-between w-full px-4 py-3 text-left font-medium transition-all 
        ${isExpanded ? "bg-gray-50" : ""} ${className || ""}`}
      onClick={() => toggleItem(accordionItem)}
      aria-expanded={isExpanded}
      {...props}
    >
      {children}
      <svg 
        className={`h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : ""}`} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

export function AccordionContent({ children, className, ...props }) {
  const { expandedItems } = useContext(AccordionContext);
  const accordionItem = props.value || props["data-value"] || "";
  const isExpanded = expandedItems[accordionItem];
  
  if (!isExpanded) return null;
  
  return (
    <div className={`px-4 py-3 ${className || ""}`} {...props}>
      {children}
    </div>
  );
}
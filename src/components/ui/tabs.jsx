import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext();

export function Tabs({ defaultValue, children, className, ...props }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className, ...props }) {
  return (
    <div 
      className={`flex space-x-1 rounded-lg p-1 bg-gray-100 ${className || ""}`} 
      {...props}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ children, value, className, ...props }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  
  return (
    <button
      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all 
        ${activeTab === value 
          ? "bg-white text-blue-700 shadow-sm" 
          : "text-gray-600 hover:text-gray-800"
        } ${className || ""}`}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value, className, ...props }) {
  const { activeTab } = useContext(TabsContext);
  
  if (activeTab !== value) return null;
  
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
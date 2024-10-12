import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="container-lg">{children}</div>;
};

export default Layout;

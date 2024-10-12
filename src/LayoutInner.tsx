import React from "react";

/*
 * We use LayoutInner just to set max-width: 1024px (Navbar elements have padding on default)
 *and LayoutInnerPadding for body content
 */

export const LayoutInner: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="container mx-auto">{children}</div>;
};

export const LayoutInnerPadding: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="container mx-auto p-4">{children}</div>;
};

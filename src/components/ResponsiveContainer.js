import React from "react";
import { DesktopContainer, MobileContainer, ButtonTop } from "./";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
    <ButtonTop />
  </div>
);

export default ResponsiveContainer;

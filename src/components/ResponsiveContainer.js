import React from "react";
import { DesktopContainer, MobileContainer } from "./";
import { getWidth } from "../utils";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

export default ResponsiveContainer;

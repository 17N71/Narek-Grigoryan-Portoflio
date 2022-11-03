import React from "react";
import tab from "./tab.module.scss";
const Tab = ({ children, twdClasses = "" }) => {
  return <div className={`${tab.tab} ${twdClasses}`}>{children}</div>;
};
export default Tab;

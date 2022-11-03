import React from "react";
import tab from "../tab.module.scss";
function TabBody({ children, twdClasses, tabIsChanged }) {
  return (
    <div
      className={`${tab.body} ${twdClasses} ${
        tabIsChanged ? tab.actived : "rotate-0"
      } `}
    >
      {children}
    </div>
  );
}
export default TabBody;

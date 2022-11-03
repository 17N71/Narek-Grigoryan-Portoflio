import React from "react";
import TopSideNavigation from "./TopSideNavigation/TopSideNavigation";
import top from "./topside.module.scss";
import Profile from "./Profile/Profile";
const TopSide = () => {
  return (
    <div className={top.topside}>
      <TopSideNavigation />
      <Profile />
    </div>
  );
};

export default TopSide;

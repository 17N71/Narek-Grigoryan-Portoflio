import React from "react";
import { dataContext } from "./../../../pages/index";
import { useContext } from "react";
import OpenMenuButton from "../../OpenMenuButton/OpenMenuButton";
import MenuButton from "../../MenuButton/MenuButton";
import List from "../../List/List";
import LangButton from "../../LangButton/LangButton";

const TopSideNavigation = () => {
  const { menu } = useContext(dataContext);
  return (
    <>
      <MenuButton />
      <nav
        className={`fixed  
      transition-all duration-1000 
      flex items-center
      top-0
        justify-center z-50 w-full dark:bg-stone-900 bg-white h-full right-[0%]  ${
          menu ? "right-100% " : "-right-[100%]"
        }`}
      >
        <List />
        <OpenMenuButton />
        <LangButton />
      </nav>
    </>
  );
};

export default TopSideNavigation;

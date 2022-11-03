import React from "react";
import { IoIosMenu } from "react-icons/io";
import { dataContext } from "../../pages";
import { useContext } from "react";

const MenuButton = () => {
  const { openMenu } = useContext(dataContext);

  return (
    <button
      style={{ zIndex: "6" }}
      type="button"
      className="fixed  top-10 right-10"
      onClick={openMenu}
    >
      <IoIosMenu size={34} className="pointer-events-none" />
    </button>
  );
};

export default MenuButton;

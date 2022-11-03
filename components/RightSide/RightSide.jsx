import React, { useContext, useEffect, useState } from "react";
import right from "./right.module.scss";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";
import me from "/public/me.jpg";
import { dataContext } from "../../pages";
import List from "../List/List";
import LangButton from "./../LangButton/LangButton";
import OpenMenuButton from "./../OpenMenuButton/OpenMenuButton";
import LeftTypedText from "./../LefyTypedText/LeftTypedText";
import MenuButton from "../MenuButton/MenuButton";

const RightSide = () => {
  const { lang, data, changeLang, openMenu, closeMenu, menu } =
    useContext(dataContext);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const scrolling = () => {
      if (window.pageYOffset >= 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", scrolling, { passive: true });
    return () => window.removeEventListener("scroll", scrolling);
  }, []);
  return (
    <div
      className={`relative  ${scrolled ? right.small : right.grow}   ${
        right.right
      }`}
    >
      <div
        className={`transition-all   device:fixed duration-500 flex flex-row gap-5  pr-[5%] `}
      >
        <div className="mt-28">
          <MenuButton openMenu={openMenu} />
          <nav className={`${right.nav} ${menu ? right.openmenu : ""}`}>
            <List data={data} />
            <OpenMenuButton closeMenu={closeMenu} />
            <LangButton />
          </nav>
          <div className={right.body}>
            <div className="px-5 relative w-full">
              <div
                className={` ${right.imageBorder} ${
                  scrolled ? right["scrolled"] : ""
                }`}
              ></div>
              <Image
                src={me}
                alt="me"
                priority
                className="transition-all  duration-500 select-none "
                style={{
                  objectFit: "cover",
                  width: scrolled ? "320px" : "450px",
                }}
              />
              <h2 className="text-center md:text-xl text-opacity-70 mt-4 mb-6">
                {[data.data.right.profileGreetings[lang]]}
              </h2>
              <LeftTypedText title={data.data.right.profileTyped[lang]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;

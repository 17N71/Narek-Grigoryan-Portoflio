import React, {useContext} from 'react';
import {dataContext} from "../../pages";
import footer from "./footer.module.scss"
import { Link as NavLink } from "react-scroll"
import {AiOutlineArrowUp} from "react-icons/ai";
function Footer() {
  const {data,lang} = useContext(dataContext)
  return (
    <footer className={footer.footer}>
        <p className={"text-gray-200/80 text-sm"}>{data.data.footer.developed[lang]}</p>
        <p className={"text-gray-200/80 mt-2  text-sm"}>{data.data.footer.rights[lang]}{new Date().getFullYear()}</p>
        <strong className={"absolute right-5 border border-gray-300 hover:border-[#987747] transform hover:scale-[1.1] text-gray-300/90 transition duration-300 hover:text-[#987747] p-1  cursor-pointer  dark:bg-stone-900 bg-gray-300/90 -top-6"}>
          <NavLink smooth={true}   duration={850} to={"home"} ><AiOutlineArrowUp size={32} />
          </NavLink>
        </strong>
    </footer>
  );
}

export default Footer;
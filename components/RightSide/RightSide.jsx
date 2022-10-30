import React, {useContext, useEffect, useState} from 'react'
import right from "./right.module.scss"
import { IoIosMenu } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai"
import Image from 'next/image';
import Typed from 'react-typed';
import me from '/public/me.jpg'
import {langContext} from "../../pages";
import List from "../List/List";
import ReactCountryFlag from "react-country-flag"

const RightSide = () => {
  const {lang,data,changeLang,changeMenu,menu} = useContext(langContext)
  const [scrolled,setScrolled] = useState(false)
  useEffect(()=>{
    const scrolling = () =>{
      if(window.pageYOffset >= 30){
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    }
    window.addEventListener("scroll",scrolling, {passive:true})
  },[])
  return (
    <div className={`${scrolled?right.small:right.grow} ${right.right}`}>
    <div className={`pr-[6%] fixed  pt-[100px] `}>
        <button type="button" className='fixed  top-10 right-10' onClick={changeMenu}>
          <IoIosMenu size={34}  className="pointer-events-none" />
        </button>
        <nav className={`${right.nav} ${menu? right.openmenu:""}`}>
          <List />
          <button type="button" onClick={changeMenu} className="absolute hover:border text-4xl  transition-color duration-500 hover:text-[#a38562] hover:border-[#a38562] border border-transparent top-10 right-10"><AiOutlineClose  className={"pointer-events-none"} /></button>
          <button type="button" className="absolute bottom-20 right-16" onClick={changeLang}>{lang==="hy"? (
              <ReactCountryFlag
                  countryCode="US"
                  className="emojiFlag pointer-events-none"
                  style={{
                    fontSize: '2rem',
                    lineHeight: '2rem',
                  }}
                  aria-label="United States"
                  title="US"
                  svg />):(
              <ReactCountryFlag
              style={{
                fontSize: '2rem',
                lineHeight: '2rem',
              }}
              aria-label="Republic of Armenia"
              title="AM"
              className="emojiFlag pointer-events-none"
              countryCode="AM"
              svg />)}</button>
        </nav>
        <div className={right.body}>
      <div className='px-5 relative'>
        <div className={`${right.imageBorder} ${scrolled?right["scrolled"]:""}`}></div>
        <Image src={me} alt="me"  priority className="transition-all  duration-500 select-none pointer-events-none" style={{objectFit:"cover", width:scrolled?"320px":"450px"}}/>
        <h2 className="text-center md:text-xl text-opacity-70 mt-4">{[data.data.right.profileGreetings[lang]]}</h2>
        <h3 className="text-center text-xl mt-2 pt-2"><Typed strings={data.data.right.profileTyped[lang]}
               typeSpeed={60}
               backSpeed={60}
               loop></Typed></h3>
      </div>
      </div>
    </div>
    </div>
  )
}

export default RightSide
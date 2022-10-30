import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const RightSide = dynamic(() => import("../components/RightSide/RightSide"), {
  suspense: false,
  ssr: false,

})
const LeftSide = dynamic(() => import("../components/LeftSide/LeftSide"), {
  suspense: false,
  ssr: false,
})


import main from "./main.module.scss";
import React, {createContext} from "react";
export const  langContext = createContext(null)
export default function Page({data}) {
  const [activeMouse, setActiveMouse] = React.useState(false);
  const [lang,setLang] = React.useState("en")
  const [menu, setMenu] = React.useState(false);
  const secondaryCursor = React.useRef(null);
  const mainCursor = React.useRef(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });
  const changeLang = ()=>setLang(lang==="en"?"hy":"en")
  const changeMenu = ()=>setMenu(!menu)
  React.useEffect(()=>{
    if (menu){
      window.document.body.style.paddingRight = "10px"
      window.document.body.style.overflow = "hidden"

    }else {
      window.document.body.style.overflow = "auto"
      window.document.body.style.paddingRight = "0px"

    }
  },[menu])
  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;
      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight / 2;
      mainCursor.current.style.transform = `translate3d(${
        mouseX - mainCursor.current.clientWidth / 2
      }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);
  React.useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);
  React.useEffect(() => {
    function searchRelated(e) {
      setActiveMouse(true);
      if (e.toElement.localName === "a" || e.toElement.localName === "button") {
        setActiveMouse(true);
      } else {
        setActiveMouse(false);
      }
    }
    window.addEventListener("mousemove", searchRelated);
    return () => window.removeEventListener("mousemove", searchRelated);
  }, []);
  return (
    <langContext.Provider value={{lang,data,changeMenu,changeLang,menu}}>
      <span className="main-cursor" ref={mainCursor}>
        <span className="main-cursor-background" />
      </span>
      <span
        className={`secondary-cursor ${activeMouse ? "related" : ""}`}
        ref={secondaryCursor}
      >
        <span className="cursor-background" />
      </span>
      <main className={`${main.main}`}>
        <LeftSide />
        <RightSide  />
      </main>
    </langContext.Provider>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_CUSTOM}`)
  const data = await res.json()
  return { props: { data } }
}
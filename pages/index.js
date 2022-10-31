import dynamic from "next/dynamic";
import { useCallback } from "react";

const RightSide = dynamic(() => import("../components/RightSide/RightSide"), {
  suspense: false,
  ssr: false,
});
const LeftSide = dynamic(() => import("../components/LeftSide/LeftSide"), {
  suspense: false,
  ssr: false,
});

const TopSide = dynamic(() => import("../components/TopSide/TopSide"), {
  suspense: false,
  ssr: false,
});

import main from "./main.module.scss";
import React, { createContext } from "react";
import Media from "react-media";
import Head from "next/head";
export const dataContext = createContext(null);
export default function Page({ data }) {
  const [activeMouse, setActiveMouse] = React.useState(false);
  const [lang, setLang] = React.useState("en");
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
  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  React.useEffect(() => {
    const KeyDown = (event) => {
      if (event.which === 27 && !menu) {
        setMenu(false);
      }
    };
    window.addEventListener("keydown", KeyDown);

    return () => window.removeEventListener("keydown", KeyDown);
  }, []);
  const changeLang = useCallback(() => {
    setLang(lang === "en" ? "hy" : "en");
  }, [lang]);

  const openMenu = useCallback(() => {
    setMenu(true);
  }, [menu]);
  const closeMenu = useCallback(() => {
    setMenu(false);
  }, [menu]);

  React.useEffect(() => {
    if (menu) {
      window.document.body.style.paddingRight = "10px";
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
      window.document.body.style.paddingRight = "0px";
    }
  }, [menu]);
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
      if (
        e.toElement.localName === "a" ||
        e.toElement.localName === "button" ||
        e.toElement.localName === "li"
      ) {
        setActiveMouse(true);
      } else {
        setActiveMouse(false);
      }
    }
    window.addEventListener("mousemove", searchRelated);
    return () => window.removeEventListener("mousemove", searchRelated);
  }, []);

  const MetaTitle = data.data.meta.title;
  const MetaDescription = data.data.meta.description;
  const MetaAuthor = data.data.meta.author;
  return (
    <div>
      <Head>
        <title>{data.data.title[lang]}</title>
        <meta name="theme-color" content="dark light" />
        <meta name="title" content={MetaTitle[lang]} />
        <meta property="og:type" content="portfolio" />
        {/* <meta name="og:image" content={me}  /> */}
        <meta name="og:title" content={MetaTitle[lang]} />
        <meta name="description" content={MetaDescription[lang]} />

        <meta name="og:description" content={MetaDescription[lang]} />
        <meta
          name="keywords"
          content="front-end,developer,portfolio,Next.js,React,react.js,react,developing,tailwind,Tailwind"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="language"
          content={lang === "en" ? "English" : "Armenian"}
        />
        <meta name="revisit-after" content="15 days" />
        <meta name="author" content={MetaAuthor[lang]} />
        <meta name="og:author" content={MetaAuthor[lang]} />
      </Head>
      <dataContext.Provider
        value={{ lang, data, openMenu, closeMenu, changeLang, menu }}
      >
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
          <Media query="(min-width: 1041px)">
            {(matches) =>
              matches ? (
                <RightSide />
              ) : (
                <>
                  <TopSide />
                </>
              )
            }
          </Media>
        </main>
      </dataContext.Provider>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_CUSTOM}`);
  const data = await res.json();
  return { props: { data } };
}

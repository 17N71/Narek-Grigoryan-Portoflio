import dynamic from "next/dynamic";
import { useCallback } from "react";
import main from "./main.module.scss";
import React, { createContext } from "react";
import Media from "react-media";
import Head from "next/head";
import Meta from "./../components/Meta";
import left from "../components/LeftSide/left.module.scss";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import SliderMain from "../components/SlideMain/SliderMain";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
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

export const dataContext = createContext(null);
export default function Page({ data }) {
  const [lang, setLang] = React.useState("en");
  const [menu, setMenu] = React.useState(false);
  const changeLang = useCallback(() => {
    setLang(lang === "en" ? "hy" : "en");
  }, [lang]);
  const openMenu = useCallback(() => {
    setMenu(true);
  }, []);
  const closeMenu = useCallback(() => {
    setMenu(false);
  }, []);
  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  React.useEffect(() => {
    if (menu) {
      window.document.body.style.paddingRight = "10px";
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
      window.document.body.style.paddingRight = "0px";
    }
  }, [menu]);

  return (
    <div>
      <Head>
        <title>{data.data.title[lang]}</title>
        <Meta />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.3/dist/css/splide-core.min.css"
              integrity="sha256-ZAXImCY06SjVuIrJfWUETkyCctX5aGdL1AVEBX5CxZA=" crossOrigin="anonymous" />

      </Head>
      <dataContext.Provider
        value={{ lang, data, openMenu, closeMenu, changeLang, menu }}
      >
        <main className={`${main.main}`}>
            <Media query="(min-width: 1041px)">
                {(matches) => (matches ? "" : <TopSide />)}
              </Media>
            <LeftSide >
                <div className={left.left} name="home">
            <span
              className={`${left.backdrop} ${menu ? left["menuopened"] : ""}`}
              onClick={closeMenu}
            />
                  <div className={"px-[4%]"}>
                <Home data={data.data.left.home} />
                <About />
                <SliderMain />
                <Contact />
                  </div>
                <Footer />
                </div>
          </LeftSide>
          <Media query="(min-width: 1041px)">
            {(matches) => (matches ? <RightSide /> : "")}
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

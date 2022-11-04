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
import portfolios from "../components/Portfolios/portfolios.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Link from "next/link";
import Image from "next/image";
import portfolio1 from "/public/portfolios/Komitas.png";
import portfolio2 from "/public/portfolios/Medley.jpg";
import portfolio3 from "/public/portfolios/MetaWave.png";
import portfolio4 from "/public/portfolios/Elastic.jpg";

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
  const options = {
    type: "loop",
    perPage: 2,
    gap: "2rem",
    rewind: true,
    mediaQuery: "max",
    keyboard: "focused",
    width: "100%",
    autoplay: true,
    drag: "free",
    snap: true,
    trimSpace: false,
    interval: 3500,
    easing: "cubic-bezier(.97,1.41,.39,.93)",
    classes: {
      arrows: "splide__arrows portfolios-arrows",
      arrow: "splide__arrow portfolios-arrow",
      prev: "splide__arrow--prev portfolios-arrow-prev",
      next: "splide__arrow--next portfolios-arrow-next",
    },
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  };
  const allPortfolios = data.data.left.portfolios.allPortfolios.AllPortfolios
  const Portfolios = [portfolio1, portfolio2, portfolio3, portfolio4];

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
                <Home data={data.data.left.home} />
                <About />
                <>
                  <div className={portfolios.portfolios} name={"portfolio"}>
                    <h3 className="text-4xl   uppercase text-[#987750] mb-5">
                      {data.data.left.portfolios.title[lang]}
                    </h3>
                    <h2
                      className="text-5xl ss:text-4xl sm:text-5xl xl:text-6xl mb-12 mt-6 inline-block  relative
                z-[1] after:absolute
                after:-bottom-7 after:left-0 after:w-[20%] after:h-1 after:z-[1]
                dark:after:bg-stone-400 after:bg-stone-600"
                    >
                      {data.data.left.portfolios.subtitle[lang]}
                    </h2>
                    <Splide
                      options={options}
                      tag="section"
                      className={"my-5"}
                      aria-label="Portfolio Slider"
                    >
                      {allPortfolios.map(({ title, id, alt }) => (
                        <SplideSlide key={id}>
                          <Link href={`/${id}`} className={"cursor-ew-resize"}>
                            <Image
                              style={{ objectFit: "cover", width: "100%", height: "100%" }}
                              className={"pointer-events-none cursor-ew-resize"}
                              priority
                              src={Portfolios[id - 1]}
                              alt={alt}
                              title={title}
                            />
                          </Link>
                        </SplideSlide>
                      ))}
                    </Splide>
                  </div>
                </>
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

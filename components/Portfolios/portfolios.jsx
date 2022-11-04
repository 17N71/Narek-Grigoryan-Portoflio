import React, { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { dataContext } from "../../pages";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import portfolios from "./portfolios.module.scss";
import portfolio1 from "/public/portfolios/Komitas.png";
import portfolio2 from "/public/portfolios/Medley.jpg";
import portfolio3 from "/public/portfolios/MetaWave.png";
import portfolio4 from "/public/portfolios/Elastic.jpg";
function Portfolios() {
  const { lang, data } = useContext(dataContext);
  const allPortfolios = data.data.left.portfolios.allPortfolios.AllPortfolios
  const Portfolios = [portfolio1, portfolio2, portfolio3, portfolio4];
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
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.3/dist/css/splide-core.min.css"
              integrity="sha256-ZAXImCY06SjVuIrJfWUETkyCctX5aGdL1AVEBX5CxZA=" crossOrigin="anonymous" />
      </Head>
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
  );
}

export default Portfolios;

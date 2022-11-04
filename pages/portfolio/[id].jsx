import React, {useCallback, useEffect, useState} from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router"
import Zoom from 'react-medium-image-zoom'
import Head from "next/head";
import current from "./current.module.scss";
import Image from "next/image";
import CustomMeta from "../../components/CustomMeta";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import CustomLangButton from "../../components/CustomLangButton/CustomLangButton";
import medely1 from "/public/portfolios/Medley/Medley1.jpg";
import medely2 from "/public/portfolios/Medley/Medley2.jpg";
import medely3 from "/public/portfolios/Medley/Medley3.png";
import medely4 from "/public/portfolios/Medley/Medley4.png";
import medely5 from "/public/portfolios/Medley/Medley5.png";
import medely6 from "/public/portfolios/Medley/Medley6.png";
import medely7 from "/public/portfolios/Medley/Medley7.png";

//Medley Images
import komitas1 from "/public/portfolios/Komitas/Komitas1.png";
import komitas2 from "/public/portfolios/Komitas/Komitas2.png";
import komitas3 from "/public/portfolios/Komitas/Komitas3.png";
import komitas4 from "/public/portfolios/Komitas/Komitas4.png";
import komitas5 from "/public/portfolios/Komitas/Komitas5.png";
import komitas6 from "/public/portfolios/Komitas/Komitas6.png";
import komitas7 from "/public/portfolios/Komitas/Komitas7.png";
//Komitas Images
import MetaWave1 from "/public/portfolios/MetaWave/MetaWave1.png";
import MetaWave2 from "/public/portfolios/MetaWave/MetaWave2.png";
import MetaWave3 from "/public/portfolios/MetaWave/MetaWave3.png";
import MetaWave4 from "/public/portfolios/MetaWave/MetaWave4.png";
import MetaWave5 from "/public/portfolios/MetaWave/MetaWave5.png";
import MetaWave6 from "/public/portfolios/MetaWave/MetaWave6.png";
import MetaWave7 from "/public/portfolios/MetaWave/MetaWave7.png";
import MetaWave8 from "/public/portfolios/MetaWave/MetaWave8.png";
//MetaWave Images
import Elastic1 from "/public/portfolios/Elastic/Elastic1.png";
import Elastic2 from "/public/portfolios/Elastic/Elastic2.jpg";
import Elastic3 from "/public/portfolios/Elastic/Elastic3.jpg";
import Elastic4 from "/public/portfolios/Elastic/Elastic4.png";
import Elastic5 from "/public/portfolios/Elastic/Elastic5.png";
import Elastic6 from "/public/portfolios/Elastic/Elastic6.png";
import Elastic7 from "/public/portfolios/Elastic/Elastic7.png";
import Elastic8 from "/public/portfolios/Elastic/Elastic8.png";
//Elastic Images
const portfoliosImages = {
  MedelyImages: [medely1, medely2, medely3, medely4, medely5, medely6, medely7],
  KomitaseImages: [
    komitas1,
    komitas2,
    komitas3,
    komitas4,
    komitas5,
    komitas6,
    komitas7,
  ],
  MetaWaveImages: [
    MetaWave1,
    MetaWave2,
    MetaWave3,
    MetaWave4,
    MetaWave5,
    MetaWave6,
    MetaWave7,
    MetaWave8,
  ],
  ElasticImages: [
    Elastic1,
    Elastic2,
    Elastic3,
    Elastic4,
    Elastic5,
    Elastic6,
    Elastic7,
    Elastic8,
  ],
};


export async function getServerSideProps(context) {
  const res = await fetch(process.env.API_CUSTOM);
  const datas = await res.json();
  return {
    props: {
      data: datas.data.left.portfolios.allPortfolios.AllPortfolios[context.params.id - 1],
      dataLinks: datas.data.left.portfolios.allPortfolios.links,
    },
  };
}
function Portfolio({ data,dataLinks }) {
  const [allImages, setAllImages] = useState([]);
  const [lang, setLang] = useState("en");
  const router =useRouter()
  const changeLang = useCallback(() => {
    setLang(lang === "en" ? "hy" : "en");
  }, [lang]);
  const options = {
    type: "loop",
    perPage: 2,
    gap: "2rem",
    rewind: true,
    mediaQuery: "max",
    keyboard: "global",
    width: "100%",
    cover:true,
    autoplay: true,
    drag: "free",
    snap: true,
    trimSpace: false,
    easing: "cubic-bezier(.92,1.01,.18,.26)",
    classes: {
      arrows: "splide__arrows portfolio-arrows",
      arrow: "splide__arrow portfolio-arrow",
      prev: "splide__arrow--prev portfolio-arrow-prev",
      next: "splide__arrow--next portfolio-arrow-next",
    },
    breakpoints:{
      768:{
        perPage: 1,
      }
    }
  };
  useEffect(() => {

    if (data.title === "Medley") {
      setAllImages(portfoliosImages.MedelyImages);
    }
    if (data.title === "Komitas") {
      setAllImages(portfoliosImages.KomitaseImages);

    }
    if (data.title === "MetaWave") {
      setAllImages(portfoliosImages.MetaWaveImages);

    }
    if (data.title === "Elastic") {
      setAllImages(portfoliosImages.ElasticImages);

    }

  }, []);
  let rand = Math.ceil(Math.random() * allImages.length)
  return (
    <>
      <Head>
        <title>Portfolio {data.title}</title>
        <CustomMeta image={allImages[0]} title={data.title} id={data.id} />
        <link rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.3/dist/css/themes/splide-sea-green.min.css"
              integrity="sha256-605xvX2UswSdu7L4xHzAh9JTfCaNtTNDEcOFDbNfZIA=" crossOrigin="anonymous" /> 
      </Head>
      <main className={current.main}>
        <button onClick={() => router.back()}>Back</button>
        <CustomLangButton lang={lang} changeLang={changeLang} />
        <div className={current.leftPart}>
          <h2 className={"text-center text-6xl mt-5 mb-5 text-[#cc9f68]"}>{data.title}</h2>
          <Splide options={options}
                  tag="section"
                  className={"my-5"}
                  aria-label={`Portfolio Slider ${data.title}`}
          >
            {allImages.map((image,index)=>(
              <SplideSlide key={Math.random()*Math.random()} >
                <Zoom >
                      <Image 
                            priority
                             title={`${data.title} image ${index}`}
                             src={image}
                             height={600}
                             width={900}
                             style={{objectPosition:"center"}}
                             alt={`${data.title} image ${index}`} />
                  </Zoom>
                
              </SplideSlide>
            ))}
          </Splide> 
          <div className={current.links}>
          <a
            rel="noreferrer noopener noindex"
            target="_blank"
            href={data.demo}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span
                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-stone-900 rounded-md group-hover:bg-opacity-0">{dataLinks[lang].demo} </span>

          </a>{dataLinks.or[lang]}  <a
          rel="noreferrer noopener noindex"
          target="_blank"
          href={data.code}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-stone-900 rounded-md group-hover:bg-opacity-0">{dataLinks[lang].code}</span></a>
        </div>
        </div>
        
      </main>
    </>
  );
}

export default Portfolio;

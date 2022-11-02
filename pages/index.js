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
  const [lang, setLang] = React.useState("en");
  const [menu, setMenu] = React.useState(false);
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
        <meta property="og:url" content="https://narek-grigoryan-17n71.vercel.app/" />
        <meta property="fb:app_id" content="%d" />
        <meta name="og:image" content="https://narek-grigoryan-17n71.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.657b5715.jpg&w=640&q=100"  />
        <meta name="og:image:url" content="https://narek-grigoryan-17n71.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.657b5715.jpg&w=640&q=100"  />
        <meta name="og:image:type" content="image/jpeg" />
        <meta name="og:image:width" content="300" />
        <meta name="og:image:height" content="260" />
        <meta name="og:title" content={MetaTitle[lang]} />
        <meta name="description" content={MetaDescription[lang]} />
        <meta name="og:locale" content={"en_US"} />
        <meta name="og:locale:alternate" content={"hy_AM"} />
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

        <main className={`${main.main}`}>
          <Media query="(min-width: 1041px)">
            {(matches) => (matches ? "" : <TopSide />)}
          </Media>
          <LeftSide />
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

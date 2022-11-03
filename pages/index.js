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
import Meta from "./../components/Meta";
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

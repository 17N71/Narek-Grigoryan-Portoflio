import "../styles/globals.css";
import { useEffect } from "react";
import { useState } from "react";
import "./../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

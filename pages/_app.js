import "./../styles/style.scss";
import '@splidejs/react-splide/css/core';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import "./../styles/style.scss";
import "../styles/globals.css";
import 'react-medium-image-zoom/dist/styles.css'
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [activeMouse, setActiveMouse] = React.useState(false);

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
    const KeyDown = (event) => {
      if (event.which === 27 && !menu) {
        setMenu(false);
      }
    };
    window.addEventListener("keydown", KeyDown);

    return () => window.removeEventListener("keydown", KeyDown);
  }, []);

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

  return (
    <>
      <Head>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <span className="main-cursor" ref={mainCursor}>
        <span className="main-cursor-background" />
      </span>
      <span
        className={`secondary-cursor ${activeMouse ? "related" : ""}`}
        ref={secondaryCursor}
      >
        <span className="cursor-background" />
      </span>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import React from "react";

const CustomMeta = ({ title, image, id }) => {
  return (
    <>
      <meta name="theme-color" content="dark light" />
      <meta name="title" content={`Narek Grigoryan's Portfolio ${title}`} />
      <meta name="og:title" content={`Narek Grigoryan's Portfolio ${title}`} />
      <meta name="revisit-after" content="15 days" />
      <meta name="og:locale" content={"en_US"} />
      <meta name="og:locale:alternate" content={"hy_AM"} />
      <meta name="language" content={"en"} />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta property="fb:app_id" content="%d" />
      <meta name="author" content={"Narek Grigoryan"} />
      <meta name="og:author" content={"Narek Grigoryan"} />
      <meta property="og:type" content={`portfolio page ${id}`} />
      <meta name="og:image:type" content="image/jpeg" />
      <meta name="og:image:type" content="image/png" />
      <meta name="og:image:width" content="400" />
      <meta name="og:image:height" content="320" />
      <meta
        name="og:image:url"
        content="https://narek-grigoryan-17n71.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.657b5715.jpg&w=640&q=100"
      />
      <meta
        name="og:image"
        content="https://narek-grigoryan-17n71.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.657b5715.jpg&w=640&q=100"
      />
      <meta
        name="keywords"
        content={`front-end,developer,portfolio,Next.js,React,react.js,react,developing,tailwind,Tailwind,${title}`}
      />
      <meta
        name="description"
        content={`Hi my name is Narek i'm front-end developer and it's my portfolio page named by ${title}`}
      />
      <meta
        name="og:description"
        content={
          "Hi my name is Narek i'm front-end developer and it's my portfolio created on Next.js and Tailwind"
        }
      />
      <meta
        property="og:url"
        content={`https://narek-grigoryan-17n71.vercel.app/${id}`}
      />
    </>
  );
};

export default CustomMeta;

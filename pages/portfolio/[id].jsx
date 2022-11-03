import React, { useEffect, useState } from "react";
import Head from "next/head";
import current from "./current.module.scss";
import Image from "next/image";
import CustomMeta from "../../components/CustomMeta";
export async function getServerSideProps(context) {
  const res = await fetch(process.env.API_CUSTOM);
  const datas = await res.json();
  return {
    props: {
      data: datas.data.left.portfolios.allPortfolios[context.params.id - 1],
    },
  };
}
function Portfolio({ data }) {
  const [allImages, setAllImages] = useState([]);
  portfoliosImages;
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
  }, [data.title]);
  return (
    <>
      <Head>
        <title>Portfolio {data.title}</title>
        <CustomMeta image={allImages[0]} title={data.title} id={data.id} />
      </Head>
      <main className={current.main}>
        <div className={current.left}></div>
        <div className={current.right}>
          <div className={current.iamgeContainer}>
            <Image
              title={data.title}
              alt={data.alt}
              priority
              src={allImages[Math.floor(Math.random() * allImages.length)]}
            />
            <h3 className="text-xl text-center xl:text-3xl mt-10 text-[#cc9f68]">
              Project name «{data.title}»
            </h3>
            <a
              rel="noreferrer noopener noindex"
              target="_blank"
              href={data.demo}
            >
              You can see page on server
            </a>
              or  
            <a
              rel="noreferrer noopener noindex"
              target="_blank"
              href={data.code}
            >
              You can see code
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Portfolio;

import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../../pages';

const Article = ({title,par,heading}) => {
    const {lang} = useContext(dataContext)
  return (
    <article className='mt-14 mb-12 flex  flex-col justify-center'>
    <h3 className='text-4xl   uppercase text-[#987750] mb-5'>{heading[lang]}</h3>
    <h2 className='text-5xl ss:text-4xl sm:text-5xl xl:text-6xl mb-12 mt-6 inline-block  relative
          z-[1] after:absolute
                after:-bottom-7 after:left-0 after:w-[10%] after:h-1 after:z-[1]
                dark:after:bg-stone-400 after:bg-stone-600'>{title[lang]}</h2>
  <p className="xl:leading-[3rem] tracking-wide xl:text-3xl text-xl md:text-2xl device:pr-24 text-stone-700 dark:text-white/70">
    {par[lang][0]}
        <a target="_blank"
      className="px-1 outline-none tracking-wider hover:text-[#796fae]
      font-black transition-color duration-300 "
      href="https://sot-mz.com/" rel="noopener noreferrer nofollow">
        {par[lang][1]}
        </a>
        {par[lang][2]}
      <a target="_blank" className="px-1 outline-none tracking-wider hover:text-[#38bdf8]  font-black transition-color duration-300" href="https://tailwindcss.com" rel="noopener noreferrer nofollow">
        {par[lang][3]}</a>
      <a target="_blank" className="px-1 outline-none tracking-wider hover:text-black hover:bg-white rounded-md font-extrabold transition-color duration-300 " href="https://nextjs.org/" rel="noopener noreferrer nofollow">
        {par[lang][4]}</a>
      <a target="_blank" href="https://sass-lang.com/"rel="noopener noreferrer nofollow" className='hover:text-[#bf4080]  font-black transition-color duration-300 '>{par[lang][5]}</a>
      {par[lang][6]}
  </p>
</article>
  )
}

export default Article
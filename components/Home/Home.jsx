import {useContext} from "react";
import {langContext} from "../../pages";

const Home = ({data}) => {
    const {lang} = useContext(langContext)
    return(
        <div>
            <h2 className="xl:text-4xl md:text-3xl sm:text-lg  uppercase text-[#987750] mb-5">{data.heading[lang]}</h2>
            <h3 className="md:text-3xl lg:text-5xl xl:text-6xl mb-12 inline-flex mt-3 relative
            z-[1]
                 after:absolute
                 after:-bottom-5 after:left-0 after:w-[50%] after:h-1 after:z-[1]
                  dark:after:bg-stone-400 after:bg-stone-600">{data.title}</h3>
            <article>
                <p className="xl:leading-[3rem] tracking-wide xl:text-3xl md:text-2xl text-stone-700 dark:text-white/70">{data.paragraph[lang][0]}
                    <a target="_blank" className="px-1 outline-none tracking-wider hover:text-[#0ea5e9]  font-black transition-color duration-300 " href="https://tailwindcss.com" rel="noopener noreferrer nofollow">{data.paragraph[lang][1]}</a>
                    <a target="_blank" className="px-1 outline-none tracking-wider hover:text-black  font-black transition-color duration-300 hover:bg-white rounded-md" href="https://nextjs.org/" rel="noopener noreferrer nofollow">{data.paragraph[lang][2]}</a>
                    <a target="_blank" className="px-1 outline-none tracking-wider hover:text-[#bf4080] font-extrabold transition-color duration-300 " href="https://sass-lang.com/" rel="noopener noreferrer nofollow">{data.paragraph[lang][3]}</a>
                    {data.paragraph[lang][4]}
                </p>

            </article>
        </div>
    )
}
export default Home;
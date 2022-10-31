import {useContext} from "react";
import {dataContext} from "../../pages";
import Image from "next/image";
import NarekGrigoryan from "/public/NarekGrigoryan.svg"
const Home = ({data}) => {
    const {lang} = useContext(dataContext)
    return(
        <div className="min-h-screen flex flex-col items-start mt-24">
            <h2 className="text-4xl   uppercase text-[#987750] mb-5">{data.heading[lang]}</h2>
            <h3 className="text-5xl ss:text-4xl sm:text-5xl xl:text-6xl mb-12 mt-6 inline-block  relative
          z-[1] after:absolute
                after:-bottom-7 after:left-0 after:w-[10%] after:h-1 after:z-[1]
                dark:after:bg-stone-400 after:bg-stone-600">{data.title}</h3>
            <article>
                <p className="xl:leading-[3rem] tracking-wide text-xl xl:text-3xl md:text-2xl text-stone-700 device:pr-96 dark:text-white/70">
                    {data.paragraph[lang]}
                </p>
            </article>
            <Image priority
                   className="mt-20  select-none "
                   quality={100}
                   src={NarekGrigoryan}
                   title={"Narek Grigoryan"}
                   alt={"Narek Grigoryan"} />
        </div>
    )
}
export default Home;
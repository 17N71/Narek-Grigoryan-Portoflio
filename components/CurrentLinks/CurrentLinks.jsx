import current from "../../pages/Portfolio/current.module.scss";

const CurrentLinks = ({data,dataLinks,lang}) => {
  return(
    <div className={current.links}>
      <a
        rel="noreferrer noopener noindex"
        target="_blank"
        href={data.demo}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span
                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-stone-900 rounded-md group-hover:bg-opacity-0">{dataLinks[lang].demo} </span>
        
      </a>{dataLinks.or[lang]}  <a
      rel="noreferrer noopener noindex"
      target="_blank"
      href={data.code}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-stone-900 rounded-md group-hover:bg-opacity-0">{dataLinks[lang].code}</span></a>
    </div>
  )
}
export default CurrentLinks;
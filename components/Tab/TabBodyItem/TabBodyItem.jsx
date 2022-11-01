import React from 'react';
import tab from "./../tab.module.scss"
function TabBodyItem({twdClasses,tabData,tabIsChanged}) {
    if (tabData[0].percent === undefined){
        return (
            <React.Fragment>
            {tabData?.map(({id,title,subtitle,date,desc})=>(
                    <div className={`${tab.bodyItem} ${twdClasses} ${tabIsChanged ? "":  tab.actived} ` }  key={id}>
                     <div className={tab.heading}><h3 className={tab.title}>{title}</h3><span className={tab.date}>{date}</span></div>
                     <h2 className={tab.subtitle}>{subtitle}</h2>
                     <p className={tab.desc}>{desc}</p>
                    </div>
                ))}
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            {tabData?.map(({id,title,percent})=>(

              <div className={`${tab.bodyItem} ${twdClasses} ${tabIsChanged ?""  :tab.actived } `}  key={id}>
                  <div className={tab.headingSkills}><h3>{title}</h3></div>
                  <div className={tab.range}>
                      <span className="absolute right-0 -top-8 bg-gray-400 dark:bg-[#292725] text-black dark:text-[#906d49] px-2 py-[2px]">{percent}%</span>
                      <div className={`${tab.rangeInner} `} style={{width:tabIsChanged?0+"%":percent+"%"}}></div>
                  </div>
              </div>
        ))}
                </React.Fragment>
    );
}
export default TabBodyItem;
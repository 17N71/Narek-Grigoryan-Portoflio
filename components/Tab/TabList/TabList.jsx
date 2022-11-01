import React from  "react"
import tab from "./../tab.module.scss"
 const TabList = ({children,twdClasses=""}) => {
    return (
        <ul className={`${tab.list} ${twdClasses}`}>
            {children}
        </ul>
    )
}
export default TabList
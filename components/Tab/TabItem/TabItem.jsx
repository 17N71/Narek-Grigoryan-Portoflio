import React from 'react'
import  tab from './../tab.module.scss';

function TabItem({children,twdClasses="",isActiveTab,ChangeTab,changeId,type}) {
    return (
        <li className={`${tab.item}  ${isActiveTab?"text-[#906d49] border-b border-[#906d49]":"border-transparent text-stone-900 dark:text-gray-300/90"} ${twdClasses}` } onClick={()=>ChangeTab(changeId,type)}>
            {children}
        </li>
    );
}

export default TabItem
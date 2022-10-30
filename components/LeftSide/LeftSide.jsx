import React, {useContext} from 'react'
import {langContext} from "../../pages";
import left from"./left.module.scss"
import Home from "../Home/Home";
const LeftSide = () => {
    const {menu,data,changeMenu,lang} =useContext(langContext)
  return (
    <div className={left.left}>
      <span className={`${left.backdrop} ${menu?left['menuopened']:""}`} onClick={changeMenu} />
       <Home data={data.data.left.home} />
    </div>
  )
}

export default LeftSide
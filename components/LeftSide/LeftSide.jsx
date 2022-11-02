import React, {useContext} from 'react'
import {dataContext} from "../../pages";
import left from"./left.module.scss"
import Home from "../Home/Home";
import About from './../About/About';
import Portfolios from "../Portfolios/portfolios";
const LeftSide = () => {
    const {menu,data,closeMenu} =useContext(dataContext)
  return (
    <div className={left.left}  name="home">
      <span className={`${left.backdrop} ${menu?left['menuopened']:""}`} onClick={closeMenu} />
       <Home data={data.data.left.home} />
       <About />
       <Portfolios allPortfolios={data.data.left.portfolios.allPortfolios} />
    </div>
  )
}

export default LeftSide
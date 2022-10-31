import React from 'react'
import List from '../List/List';
import MenuButton from './../MenuButton/MenuButton';
import { useContext } from 'react';
import { dataContext } from './../../pages/index';
import OpenMenuButton from './../OpenMenuButton/OpenMenuButton';
import LangButton from './../LangButton/LangButton';

const TopSide = () => {
    const {data,openMenu, menu,closeMenu} = useContext(dataContext)
  return (
    <div>
      <MenuButton openMenu={openMenu} />
      <nav className={`fixed  transition-all duration-1000 flex items-center justify-center z-50 w-full bg-stone-900 h-full right-[0%]  ${menu?"right-100% ":"-right-[100%]"}`}>
        <List data={data} />  
        <OpenMenuButton closeMenu={closeMenu} />

        <LangButton />
      </nav>
    </div>
  )
}

export default TopSide
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { dataContext } from '../../pages'
import { useContext } from 'react';

const OpenMenuButton = () => {
  const {closeMenu} = useContext(dataContext)

  return (
    <button type="button"
    onClick={closeMenu}
    className="absolute hover:border text-4xl  transition-color duration-500 hover:text-[#a38562] hover:border-[#a38562] border border-transparent top-10 right-10">
    <AiOutlineClose  className={"pointer-events-none"} />
</button>
  )
}

export default OpenMenuButton
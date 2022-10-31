import React from 'react'
import { IoIosMenu } from 'react-icons/io'

const MenuButton = ({openMenu}) => {
  return (
   <button type="button" className='fixed  top-10 right-10' onClick={openMenu}>
    <IoIosMenu size={34}  className="pointer-events-none" />
  </button>
  )
}

export default MenuButton
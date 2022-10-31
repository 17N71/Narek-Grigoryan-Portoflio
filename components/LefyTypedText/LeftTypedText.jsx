import React from 'react'
import  Typed  from 'react-typed';

const LeftTypedText = ({title}) => {
  return (
    <h3 className="text-center text-xl mt-2 pb-3 pt-2"><Typed strings={title}
    typeSpeed={60}
    backSpeed={60}
    loop></Typed></h3>
  )
}

export default LeftTypedText
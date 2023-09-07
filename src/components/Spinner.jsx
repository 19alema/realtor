import React from 'react'
import spinner from "../assets/Ripple-1s-200px.svg"
function Spinner() {
  return (
   <div className="fixed top-0 bottom-0 opacity-50 z-40 right-0 bg-black justify-center w-full left-0 items-center flex">
     <img src={spinner} alt="spinner" />
   </div>
  )
}

export default Spinner
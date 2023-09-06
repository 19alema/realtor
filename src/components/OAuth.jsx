import React from 'react'
import {FcGoogle} from 'react-icons/fc'
function OAuth() {
  return (
    <button 
        className='flex items-center justify-center rounded-md transition duration-200 ease-in-out shadow-md hover:bg-red-800 w-full bg-red-700 uppercase text-white  px-6 py-2'
    >
        <FcGoogle className='mr-2 bg-white rounded'/>
        Continue with google
    </button>
  )
}

export default OAuth
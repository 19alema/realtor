import React from 'react'
import { useLocation , useNavigate} from 'react-router-dom'
function Header() {

    const location = useLocation().pathname;
    const navigate = useNavigate();

    function routeFinder(route) {
        if(route === location) {
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img onClick={() => navigate('/')} className='h-5 cursor-pointer' src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="" />
            </div>

            <div>
                <ul className='flex space-x-10' >
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                        routeFinder('/') && 'text-black border-b-red-500'}`}>
                        <a className='' href="/">Home</a>
                    </li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                        routeFinder('/offers') && 'text-black border-b-red-500'}`}>
                        <a className='' href="/offers">Offers</a>
                    </li>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                        routeFinder('/sign-in') && 'text-black border-b-red-500'}`}>
                        <a className='' href="/sign-in">Sign In</a>
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header
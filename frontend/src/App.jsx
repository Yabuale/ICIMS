import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    
    <nav className="w-full relative flex flex-wrap items-center justify-between px-2 py-6 bg-amber-500 mb-3">
      <div className="w-full mx-auto flex flex-wrap items-center justify-between px-8">
        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <a className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
            ICMIS
          </a>
          <button className="cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
            <span className="block relative w-8 h-px rounded-sm bg-white"></span>
            <span className="block relative w-8 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-8 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                  Wanted Criminal
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                  Login
                </a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default App

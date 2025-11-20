import React from 'react'
import "./index.css";

const Projects = () => {
  return (
    <div className='min-h-screen max-w-6xl mx-auto my-6 md:px-8 px-4 sm:my-10  gap-6 items-center'>
      <div className='left-0 top-55 overflow-y-auto fixed overscroll-contain rounded-r-4xl w-40 h-50 lg:block scrollbar-thin'>
          <ul className=' text-white flex flex-col items-center my-1 py-4 space-y-3 '>
            <li>
              <a href="#Berry" className='group flex items-center py-3 active'>
                <span className="mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold  tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Berry</span>
              </a>
            </li>
            <li>
              <a href="#Plutus">
                <span></span>
                <span>Plutus</span>
              </a>
            </li>
            <li>
              <a href="#Portfolio"></a>
            </li>
           
          </ul>
      </div>
    </div>
  )
}

export default Projects

import React from 'react'
import "./index.css";
import Area from "./assets/Area.png"
import Berry from "./assets/berry-plan.png"

const Projects = () => {
  return (
    <div className='max-w-7xl mx-auto my-6 md:px-8 px-4 sm:my-10  gap-6 flex  items-center  bg-green-500 relative'>
      <div className='hidden w-50 lg:block'>
          <ul className='flex flex-col items-center p-5 space-y-3 fixed'>
            <li>
              <a href="#Berry" className='group flex items-center py-3'>
                <span className="mr-4 h-[1.5px] w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className=" font-header text-[22px] tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">Berry</span>
              </a>
            </li>
            <li>
              <a href="#Plutus" className='group flex items-center py-3'>
                <span className="mr-4 h-[1.5px] w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className=" font-header text-[22px] tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">Plutus</span>
              </a>
            </li>
           
          </ul>
      </div>
      <div className=' bg-amber-200'>
          <div>

            <img src={Berry} alt="" width={768} height={1024} className='block aspect-3/2 max-w-full rounded-lg shadow-lg sm:w-72 lg:w-96'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, suscipit vitae! Accusamus magnam eaque, perspiciatis vero consequuntur impedit labore pariatur maiores ex sequi corporis quod dolorum eveniet? Delectus, architecto provident.</p>
          </div>
          <div>

            <img src={Area} alt="" width={768} height={1024} className='block aspect-3/2 max-w-full rounded-lg shadow-lg sm:w-72 lg:w-96'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, suscipit vitae! Accusamus magnam eaque, perspiciatis vero consequuntur impedit labore pariatur maiores ex sequi corporis quod dolorum eveniet? Delectus, architecto provident.</p>
          </div>
      </div>
      
    </div>
  )
}

export default Projects

import React from 'react'
import { Code, Eye } from 'lucide-react';

type Card = { 
  id: string;
  src: string;
  frameworks: string[];
  title: string;
  para1: string;
  para2: string;
}


const Card = ({id,src, frameworks, title, para1, para2}:Card) => {
  return (
    <section
          id={id}
          className="relative overflow-hidden rounded-2xl border border-white/12 bg-[color-mix(in_oklch,white_4%,transparent)] p-6 shadow-[0_24px_48px_-24px_oklch(0%_0_0/0.9)] backdrop-blur-xl backdrop-saturate-150"
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/18 via-white/4 to-transparent" />

          <div className="flex flex-col items-start gap-6 transition-all lg:flex-row">
            <div className="shrink-0">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={src}
                  alt=''
                  width={768}
                  height={1024}
                  className="block aspect-3/2 max-w-full transform object-cover transition-transform duration-300 hover:scale-105 sm:w-72 lg:w-96"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="inline-flex items-center rounded-md bg-emerald-700/20 px-2 py-1 text-xs text-emerald-200">
                  {frameworks[0]}
                </span>
                <span className="inline-flex items-center rounded-md bg-slate-700/30 px-2 py-1 text-xs text-slate-200">
                  {frameworks[1]}
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none lg:max-w-xl">
              <h3 className="mb-2 text-2xl font-semibold text-slate-100">
                {title}
              </h3>
              <p className="leading-relaxed text-slate-300">
                {para1}
              </p>

              <p className="text-slate-400">
               {para2}
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600/95 px-4 py-2 shadow transition-shadow hover:bg-emerald-500"
                  href="#"
                  onClick={e => e.preventDefault()}
                >
                  <Eye size={16} /> <span className="text-sm font-medium">Live</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 transition hover:border-emerald-400"
                  href="#"
                  onClick={e => e.preventDefault()}
                >
                  <Code size={16} className='text-emerald-500' /> <span className="text-sm font-medium text-emerald-500">Code</span>
                </a>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Card

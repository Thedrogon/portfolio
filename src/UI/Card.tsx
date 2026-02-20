import React, { useRef } from 'react';
import { Code, Eye, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type CardProps = { 
  id: string;
  src: string;
  techStack: string[];
  title: string;
  description: string;
  features: string[];
  liveLink?: string;
  codeLink?: string;
  index: number;
}

const Card = ({ id, src, techStack, title, description, features, liveLink, codeLink, index }: CardProps) => {
  const container = useRef<HTMLElement>(null);
  const isEven = index % 2 === 0;

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%", // Triggers slightly earlier so it doesn't feel delayed
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".project-image", {
      x: isEven ? -50 : 50, // Reduced the travel distance so it snaps in faster
      opacity: 0,
      scale: 0.98,
      duration: 1,
      ease: "power3.out",
    })
    .from(".project-text-item", {
      y: 20, // Reduced vertical travel
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    }, "-=0.6");

  }, { scope: container });

  return (
    <section
      ref={container}
      id={id}
      // Massively reduced vertical padding (py) and gap between elements
      className={`relative flex flex-col gap-8 py-10 lg:gap-12 lg:py-12 border-b border-white/5 last:border-0 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } items-center w-full`}
    >
      {/* Visual Container (Balanced to 50% width) */}
      <div className="project-image w-full lg:w-1/2 relative group z-10">
        <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-emerald-900/10 bg-slate-900">
          <img
            src={src}
            alt={`${title} preview`}
            width={1200}
            height={800}
            className="block aspect-video w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" />
        </div>
      </div>

      {/* Content Container (Balanced to 50% width) */}
      <div className="flex flex-col flex-1 w-full lg:w-1/2">
        
        <div className="project-text-item mb-4 flex flex-wrap items-center gap-2">
          {techStack.map((tech, idx) => (
            <span 
              key={idx} 
              className={`inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase ${
                idx === 0 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                  : 'bg-slate-800/80 text-slate-300 border border-white/10'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tighter margins on text blocks */}
        <h3 className="project-text-item mb-2 text-2xl font-extrabold tracking-tight text-white lg:text-3xl">
          {title}
        </h3>
        <p className="project-text-item mb-5 leading-relaxed text-slate-400 text-sm md:text-base">
          {description}
        </p>

        <ul className="project-text-item mb-6 space-y-2 text-sm text-slate-300">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <ChevronRight className="mt-0.5 shrink-0 text-emerald-500" size={16} />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="project-text-item flex flex-wrap gap-3 mt-auto pt-2">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-emerald-500 hover:scale-105"
            href={liveLink || "#"}
            target="_blank"
            rel="noreferrer"
          >
            <Eye size={18} /> <span>Inspect Live</span>
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-bold text-slate-300 transition-all hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-slate-800"
            href={codeLink || "#"}
            target="_blank"
            rel="noreferrer"
          >
            <Code size={18} /> <span>Source Code</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
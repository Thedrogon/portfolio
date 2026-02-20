import './index.css';
import { TypeZero, ForkLens } from './UI/Object';
import Card from './UI/Card';

const Projects = () => {
  return (
    <div className="mx-auto my-10 max-w-7xl px-4 md:px-8 overflow-hidden">
      
      {/* Tighter Header */}
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Featured <span className="text-emerald-500">Architecture.</span>
        </h2>
        <p className="mt-3 text-lg text-slate-400 max-w-2xl">
          I don't build generic student projects. I engineer scalable systems optimized for O(n) performance and zero latency.
        </p>
      </div>

      <main className="flex flex-col w-full">
        <Card {...TypeZero} index={0} />
        <Card {...ForkLens} index={1} />
      </main>

      {/* Floating HUD Element */}
      <div className="pointer-events-none fixed right-6 bottom-6 hidden md:block z-50">
        <div className="rounded-full bg-slate-900/80 px-4 py-2 text-xs font-bold tracking-widest text-emerald-400 ring-1 ring-emerald-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          LIVE PROJECTS
        </div>
      </div>
    </div>
  );
};

export default Projects;
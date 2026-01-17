import './index.css';
import Area from './assets/Area.png';
import Berrypic from './assets/berry-plan.png';
import { Berry, Plutus } from './UI/Object';
import Card from './UI/Card';
// framer-motion removed per request

const Projects = () => {
  return (
    <div className="text-slate-20 mx-auto my-10 max-w-7xl items-center px-4 md:px-8">
      <main className="flex flex-col items-center justify-center gap-12">
        <Card
          id={Berry.id}
          src={Berrypic}
          frameworks={Berry.frameworks}
          title={Berry.title}
          para1={Berry.para1}
          para2={Berry.para2}
        />

        <Card
          id={Plutus.id}
          src={Area}
          frameworks={Plutus.frameworks}
          title={Plutus.title}
          para1={Plutus.para1}
          para2={Plutus.para2}
        />
      </main>

      <div className="pointer-events-none fixed right-6 bottom-6 hidden md:block">
        <div className="rounded-2xl bg-black/30 px-4 py-2 text-xs text-slate-300 ring-1 ring-emerald-600/20">
          Kept it moody · subtle motion
        </div>
      </div>
    </div>
  );
};

export default Projects;

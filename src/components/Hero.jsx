import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="text-white text-4xl sm:text-6xl font-bold">
            Hi, I'm <span className="text-[#915eff]">Piyush</span>
          </h1>
          <p className="text-white text-sm sm:text-base mt-2">
            I am a Full-stack Web Developer using React, Three.js, Node.js, MongoDB.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-5 bottom-16 w-[25px] xs:w-[35px] h-[50px] xs:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2 left-1/2 transform -translate-x-1/2">
  <a href="#about">
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      className="w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-secondary mb-1"
    />
  </a>
</div>

    </section>
  )
}

export default Hero
import { motion } from "framer-motion"; // framer motion for animations and transitions in react.

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[180px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          <span className='xs:text-4xl sm:text-6xl'>Hi 👋</span> 
          <div>
          <span>I'm</span> <span className='text-[#915EFF]'>Jibin Babu</span>
          </div>
          
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Angular Web Developer with a passion for crafting seamless user interfaces and 
          scalable web applications. 
          
          </p>
        </div>
      </div>

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <div className="absolute right-0 bottom-0 w-full h-full opacity-50 md:opacity-100">
        <ComputersCanvas />
      </div> */}
    </section>
  );
};

export default Hero;

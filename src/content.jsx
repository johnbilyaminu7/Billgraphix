import React from 'react'
import Typewriter from 
'typewriter-effect';
import { motion, AnimatePresence } from "framer-motion"
import { FaCode, FaPalette, FaInstagram, FaGithub, FaRocket} from "react-icons/fa";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 py-10 md:py-24  flex flex-col items-center scroll-mt-16 justify-center min-h-[calc(100-64px)]'>
      <h1 className='text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-6 gap-y-2 tracking-tight md:text-4xl text-center z-0'>
        Hi, I'm <span className='text-[#ff8c00] drop-shadow-none'>Bilyaminu <br /> Bata</span>
      </h1>
      <span className='text-slate-600 dark:text-slate-100 inline-block min-h-[1.2em]'><Typewriter
        options={{
          strings: ['A Front-End Developer.','A Back-End Developer.'
            , 'A Graphic Designer.'],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 70,
        }}
      /></span>
      <div>
      <p className='text-slate-600 dark:text-slate-400 mt-4 text-center max-w-2xl'> A creative designer transforming ideas into compelling visual stories and impactful brand identities</p> 
      </div>
      <div className='flex flex-col items-center justify-center gap-0.01 mt-6'>
        <Link to="/projects">
          <button className='        type="button"
            onClick=()
            className="text-[13px]  bg-[#ff8c00] text-white my-5 cursor-pointer px-7 py-1.5 rounded-[5px]'>View my work</button>
        </Link>
        <Link to="/contact">
          <button className='        type="button"
            onClick=()
            className="text-[13px]  bg-none  cursor-pointer px-7 py-1.5 rounded-[5px] border text-black dark border-[#ff8c00]'>Get in Touch</button>
        </Link>
      </div>
      <motion.div initial={{opacity:0, y: 40}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: 0.8, ease:"easeout", delay: 0.2}} 
    whileHover={{scale: 1.01, y: -4, transition:{duration:0.2}}} className='w-full max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-[fffa23]  dark:bg-[#111723]/45 backdrop-blur-md border border-slate-800/50 text-center'>
      <h3 className='text-2xl font-bold text-slate-500 dark:text-slate-100  mb-4'>About me</h3>
       <p className='text-slate-600   text-center max-w-2xl mx-auto'>  I'm a web developer and a graphic designer with a strong foundation in visual design principles,topography, color, theory and illustration. I have hands on tool like Adobe photoshop, Visual Studio Code,Indesign and Figma. <br />When i'm not designing you'll find me exploring new technology, contributing to open source, or sharing knowledge with developer community</p>
       </motion.div>
       <h2 className='text-2xl font-bold text-slate-500 dark:text-slate-100 mt-16 mb-8'>What I Do</h2>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
      <motion.div initial={{opacity:0, y: 40}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: 0.8, ease:"easeout", delay: 0.2}} 
    whileHover={{scale: 1.05, y: -4, transition:{duration:0.2}}} className='w-full   border border-slate-600 rounded-2xl  p-8 flex flex-col items-center justify-center min-h-[200px] text-center'>
     
        <FaCode size={35} className='mb-4 text-slate-800  hover:scale-105 transition-transform duration-200 mb-4'  />
        <h3 className='text-xl font-bold text-slate-800 dark:text-slate-100 max-w-xs mx-auto leading-relaxed mb-2'>Web Development</h3>
         <p className='text-slate-600   text-center max-w-2xl'>Building responsive and user-friendly websites using modern frameworks and best practices</p>
       </motion.div>
      <motion.div initial={{opacity:0, y: 40}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: 0.8, ease:"easeout", delay: 0.2}} 
    whileHover={{scale: 1.05, y: -4, transition:{duration:0.2}}} className='w-full   border border-slate-600 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] text-center'>
     
        <FaPalette size={35} className='mb-4 text-slate-800  hover:scale-105 transition-transform duration-200 mb-4' />
        <h3 className='text-xl font-bold text-slate-800 dark:text-slate-100 max-w-xs mx-auto leading-relaxed mb-2'>Graphic Design</h3>
         <p className='text-slate-600   text-center max-w-2xl'>Crafting professional logos, high-impact marketing flyers,and unique brand identities using photoshop, canva and pixellab</p>
       </motion.div>
      <motion.div initial={{opacity:0, y: 40}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: 0.8, ease:"easeout", delay: 0.2}} 
    whileHover={{scale: 1.05, y: -4, transition:{duration:0.2}}} className='w-full  border border-slate-600 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] text-center'>
     
        <FaRocket size={35} className='mb-4 text-slate-800  hover:scale-105 transition-transform duration-200 mb-4' />
        <h3 className='text-xl font-bold text-slate-800 dark:text-slate-100 max-w-xs mx-auto leading-relaxed mb-2'>Performance</h3>
         <p className='text-slate-600   text-center max-w-2xl'>Optimizing code and animation to deliver lightning-fast load times and seamless user experiences</p>
       </motion.div>
       </div>
       <section className=" w-full items-center">
       <h2 className='text-2xl font-bold text-slate-500 dark:text-slate-100  mt-16 mb-8 text-center'>Featured Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
      <motion.div initial={{opacity:0, y: 40}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: 0.8, ease:"easeout", delay: 0.2}} 
    whileHover={{scale: 1.05, y: -4, transition:{duration:0.2}}} className='w-full   border border-slate-600 rounded-2xl  p-8 flex flex-col items-center justify-center min-h-[200px] text-center'>
     
        <h3 className='text-xl font-bold text-[#ff8c00]  max-w-xs mx-auto leading-relaxed mb-2'>Social Media Campaign</h3>
         <p className='text-slate-600   text-center max-w-2xl'>creative social visual designed to increase engagement and visibility.</p>
       </motion.div>
      <motion.div initial={{opacity:0, y: 40}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: 0.8, ease:"easeout", delay: 0.2}} 
    whileHover={{scale: 1.05, y: -4, transition:{duration:0.2}}} className='w-full   border border-slate-600 rounded-2xl  p-8 flex flex-col items-center justify-center min-h-[200px] text-center'>
     
        <h3 className='text-xl font-bold text-[#ff8c00]  max-w-xs mx-auto leading-relaxed mb-2'>Brand Identity Package</h3>
         <p className='text-slate-600   text-center max-w-2xl'>Comprehensive brand identity solutions that establish a strong market presence.</p>
       </motion.div>
      <motion.div initial={{opacity:0, y: 40}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: 0.8, ease:"easeout", delay: 0.2}} 
    whileHover={{scale: 1.05, y: -4, transition:{duration:0.2}}} className='w-full   border border-slate-600 rounded-2xl  p-8 flex flex-col items-center justify-center min-h-[200px] text-center'>
     
        <h3 className='text-xl font-bold text-[#ff8c00]  max-w-xs mx-auto leading-relaxed mb-2'>Portfolio Website</h3>
         <p className='text-slate-600   text-center max-w-2xl'>fully responsive persional website with project filtering and smooth navigation.</p>
       </motion.div>
      <motion.div initial={{opacity:0, y: 40}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: 0.8, ease:"easeout", delay: 0.2}} 
    whileHover={{scale: 1.05, y: -4, transition:{duration:0.2}}} className='w-full   border border-slate-600 rounded-2xl  p-8 flex flex-col items-center justify-center min-h-[200px] text-center'>
     
        <h3 className='text-xl font-bold text-[#ff8c00]  max-w-xs mx-auto leading-relaxed mb-2'>Logo & Brand Assets</h3>
         <p className='text-slate-600   text-center max-w-2xl'>Custom-designed logos and brand elements that reflect your company's unique identity and values.</p>
       </motion.div>
      <motion.div initial={{opacity:0, y: 40}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: 0.8, ease:"easeout", delay: 0.2}} 
    whileHover={{scale: 1.05, y: -4, transition:{duration:0.2}}} className='w-full   border border-slate-600 rounded-2xl  p-8 flex flex-col items-center justify-center min-h-[200px] text-center'>
     
        <h3 className='text-xl font-bold text-[#ff8c00]  max-w-xs mx-auto leading-relaxed mb-2'>Typography & PrintDesign</h3>
         <p className='text-slate-600   text-center max-w-2xl'>Custom typography layouts and print designs including flyers, brochures, and posters built for impact.</p>
       </motion.div>
      <motion.div initial={{opacity:0, y: 40}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: 0.8, ease:"easeout", delay: 0.2}} 
    whileHover={{scale: 1.05, y: -4, transition:{duration:0.2}}} className='w-full  border border-slate-600 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] text-center'>
     
        <h3 className='text-xl font-bold text-[#ff8c00] max-w-xs mx-auto leading-relaxed mb-2'>UI/UX & Web Design</h3>
         <p className='text-slate-600   text-center max-w-2xl'>Intuitive and visually appealing user interfaces that enhance user experience and drive engagement.</p>
       </motion.div>
       </div>
       </section>
       <br />
        <div>
          <h2 className='text-3xl font-extrabold text-slate-600 dark:text-slate-100 mb-6 gap-y-2 tracking-tight md:text-4xl text-center z-0'>Let's Work Together</h2>
          <p className='text-slate-600 text-center max-w-2xl mx-auto'>Ready to bring your ideas to life? Let's collaborate and create something amazing together!</p>
          <div className='flex items-center justify-center gap-4 mt-6'>
           <a href="https://github.com/johnbilyaminu7" target="_blank" rel="noopener noreferrer"><button className='bg-[#ff8c00] hover:bg-[#ff6a00] text-white font-bold py-1  px-5 rounded-full mt-4 flex items-center'><FaGithub className='mr-2' />GitHub</button> </a>
           <a href="https://instagram.com/Billygraphix" target="_blank" rel="noopener noreferrer"><button className='bg-[#ff8c00] hover:bg-[#ff6a00] text-white font-bold py-1  px-5 rounded-full mt-4 flex items-center'><FaInstagram className='mr-2' />Instagram</button> </a></div>
          <div className='flex items-center justify-center mt-6'>
            
        <a href="https://wa.me/2349069626951?text=Hi%20Bilyaminu,%20I%20saw%20your%20Portfolio%20and%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">
          <button  className='bg-[#ff8c00] hover:bg-[#ff6a00] text-white font-bold py-2  px-7 rounded mt-4'>Send Me A Message</button>
        </a>
          </div>
        </div>
    </div>
    
  )
}

export default Content

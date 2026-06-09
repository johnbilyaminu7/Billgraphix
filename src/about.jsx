import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const About = ({ darkMode }) => {
  const skills= ['react','photoshop','canva', 'javascript','pixellab', 'html', 'css', 'tailwindcss', 'Responive Design', 'Git']
  return (
    <motion.section  initial={{opacity:0, y: 40}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: 0.8, ease:"easeout", delay: 0.2}} 
    whileHover={{scale: 1.01, y: -4, transition:{duration:0.2}}}    className={`min-h-screen px-6 py-12 transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-linear-to-br from-[#fff7ed] via-[#ffffff] to-[#ffe7c2] text-black" text-slate-900'}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-slate-900'}`}>About Me</h2>
      </div>
      <div className="flex flex-col gap-12 md:flex-row items-start max-w-4xl mx-auto">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-88 md:w-full md:aspect-square rounded-2xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden shadow-lg">
            <img src="/IBS-3061 (1).png" alt="Bilyaminu Bata" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>Hello! My name is <strong>Bilyaminu Bata Hyelasinda</strong>. I am a passionate web developer based in Maiduguri.</p>
          <p>My journey into the world of technology began with a simple curiosity about how the digital experiences we use every day are actually built. What started as a fascination with web design quickly evolved into a deep-seated love for programming and logical problem-solving. I am driven by the belief that technology should be both functional and aesthetically pleasing.</p>
          <p>I specialize in crafting high-quality digital experiences. My technical toolkit allows me to bridge the gap between design and function. I am proficient in core web technologies such as JavaScript, HTML, and CSS, while leveraging modern tools and frameworks like React to build scalable interfaces and Tailwind CSS to create stunning, responsive layouts.</p>
          <p>When i am not deep in code editor, you can usuallly find me exploring new avenues of creativity. being from maiduguri, I draw inspiration from the vibrant culture, natural beauty of my hometown and I am driven by a desire to contribute to the growing tech lanscape in nigeria and beyond.</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-200">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About

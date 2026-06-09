import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom';


const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed flex top-0 z-50 w-full background-blur-md ${darkMode ? 'bg-[#111827]/90' : 'bg-white/90'} backdrop-blur-md border-b border-slate-300 z-9999 dark:border-slate-700 px-4 py-3 h-16 dark:text-[#ffffff] sm:px-6`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <img
            src="/file_00000000761471f488e48f7a422c40f9.png"
            alt="Logo"
            className="h-10 w-auto max-w-30 object-contain"
            style={{ filter: darkMode ? 'none' : 'invert(1)' }}
          />          <span className={`font-bold text-xl tracking-tight ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            Portfolio<span className="text-amber-500" ></span>
          </span>
        </div>
 <motion.button
        type="button"
        onClick={() => 
          setDarkMode(!darkMode)}
        className="fixed top-5 right-25 z-9999 px-1.5 py-1 text-[10px] rounded-xl bg-[#ff8c00] text-white cursor-pointer"
        animate={{ scale: [1, 1.06, 1], boxShadow: ["0px 0px 0px #ff8c0000","0px 0px 20px #ff8c00a6", "0px 0px 0px #ff8c0000" ] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </motion.button>
       
        <button onClick={() => setIsOpen(!isOpen)} className={`flex md:hidden text-xl ${darkMode ? 'text-slate-300' : 'text-slate-700'} cursor-pointer border-none bg-transparent mr-11 focus:outline-none items-center justify-center transition-all `}>
          {isOpen ? <FaTimes className='text-[#ff8c00]' size={20} /> : <FaBars size={20} />}
        </button>
        <div className="hidden md:flex gap-6 mx-40">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <AnimatePresence>{isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5}}
          transition={{ duration: 0.25, ease: "easeInOut" }} 
          className={`absolute top-full left-0 w-full h-[calc(100vh-60px)] ${darkMode ? 'bg-[#111827]' : 'bg-white'} border-t border-slate-100 dark:border-slate-700 flex flex-col pt-12 px-8 gap-8 z-100 transition-colors duration-500`}
      >
        <Link to="/" onClick={() => setIsOpen(false)} className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'} hover:text-[#ff8c00] transition-colors duration-200 py-1 cursor-pointer`}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'} hover:text-[#ff8c00] transition-colors duration-200 py-1 cursor-pointer`}>About</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)} className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'} hover:text-[#ff8c00] transition-colors duration-200 py-1 cursor-pointer`}>Project</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'} hover:text-[#ff8c00] transition-colors duration-200 py-1 cursor-pointer`}>Contact Us</Link>
       </motion.div>
      )}
       </AnimatePresence>

    </nav>
  )
}

export default Navbar


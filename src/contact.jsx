import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import {FaPaperPlane} from "react-icons/fa";
import { motion } from "framer-motion"
const Contact = ({ darkMode }) => {
  const form=useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setLoading(false);
        setStatus('success');
        form.current.reset();
      }, (error) => {
        setLoading(false);
        console.error('Failed to send email:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.section  initial={{opacity:0, y: 40}} 
      animate={{opacity: 1, y: 0}} 
      transition={{duration: 0.8, ease:"easeout", delay: 0.2}} 
    whileHover={{scale: 1.01, y: -4, transition:{duration:0.2}}}  className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-linear-to-br from-[#fff7ed] via-[#ffffff] to-[#ffe7c2] text-black"'}`}>
      <div className={`max-w-md w-full space-y-8 p-10 rounded-xl shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800 border border-gray-700 text-white' : 'bg-white border border-gray-300 text-gray-900'}`}>
        <div>
          <h2 className={`mt-6 text-center text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
           Get In Touch
          </h2>
          <p className={`mt-2 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
           Have a project in mind or need assistances with your project? feel free to reach out to me by filling the form below. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder:text-gray-400"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder:text-gray-400"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:placeholder:text-gray-400"
                  placeholder="Message"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 ease-in-out disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
        </div>
        </motion.section>
  )
}

export default Contact
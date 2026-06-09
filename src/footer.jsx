import React from 'react'

const footer = () => {
  return (
    <footer className='dark:bg-slate-900 w-full border border-slate-700 dark:border-slate-800  bg-slate-900/200 mx-auto px-full py-5  flex flex-col items-center sm:flex-row justify-between gap-'>
        <div className='max-w-6xl mx-auto flex flex-col items-center justify-center gap-4'>
      <p className='text-sm text-slate-600 dark:text-slate-400'>&copy; {new Date().getFullYear()} Billygraphix. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default footer

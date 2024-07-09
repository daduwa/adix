import { motion } from 'framer-motion'
import React from 'react'

function MarqueeSection() {
  
  return (
    <div className="w-full py-20 bg-green-700 rounded-tl-3xl rounded-tr-3xl">
       <div className="text flex justify-between  whitespace-nowrap overflow-hidden border-t-2 border-b-2 border-zinc-400">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear", duration: 15}} className="text-[20vw] uppercase leading-none font-bold font-['Neue Montreal'] tracking-tighter pr-10">react tailwind motion </motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease:"linear", duration: 15}} className="text-[20vw] uppercase leading-none font-bold font-['Neue Montreal'] tracking-tighter pr-10">react tailwind motion </motion.h1>
       </div>
    </div>
  )
}

export default MarqueeSection
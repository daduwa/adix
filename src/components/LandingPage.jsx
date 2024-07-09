import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div className="w-full h-screen bg-zinc-900  pt-1">
        <div className="textStructure mt-52 px-20">
            {["Alone create","Jaw dropping","Presentations"].map((masker,index)=>{
              return(
                <div className="masker">
                <div className="w-fit flex items-center overflow-hidden">
                  {index === 1 && (
                    <motion.div initial={{width:"0"}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration: 1}}  className="mr-[1vw] w-[8vw] h-[5.5vw] bg-cyan-400 rounded-md relative"></motion.div>
                    )}
                  <h1 key={index} className="font-['Bebas_Neue'] uppercase text-[7vw] leading-[7vw] font-bold h-full">{masker}</h1>
                </div>
              </div>
              )
            }       
            )}
        </div>
        <div className="border-t-[1px] border-zinc-600 w-full mt-44 flex justify-between px-20 py-5">
            {["Human touch, quality care","React with service in mind"].map((item,index)=>(
                 <p className="text-md leading-none tracking-tight font-light ">{item}</p>
            ))}
             <div className="start flex items-center gap-5 ">
                <div className='uppercase px-4 py-2 border-[1px] rounded-full border-zinc-400 text-xs font-light'>Start the project</div>
                <div className="w-10 h-10 flex items-center justify-center border-[1px] rounded-full border-zinc-400">
                  <span className="rotate-45">
                  <FaArrowUpLong />
                  </span>
                </div>
             </div>
        </div>
       
    </div>
  )
}

export default LandingPage
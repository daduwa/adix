import React from 'react'

function NavigationBar() {
  return (
    <div className="w-full px-20 py-8 font-['Neue_Montreal'] flex justify-between items-center fixed z-[999]">
        <div className='logo'>
            <h1 className='font-bold italic'>ADIX<span className='text-cyan-400'> . beta</span></h1>
        </div>
        <div className='links flex gap-10'>
            {["About", "portfolio","services", "skills","contact"].map((item,index)=>(
                <a key={index} className={`text-lg capitalize font-light tracking-wide ${index === 4 && "ml-40"}`}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default NavigationBar
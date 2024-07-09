import React from 'react'

function AboutPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.09" className="w-full lg:px-20 lg:py-40 px-4 py-4 rounded-tl-3xl rounded-tr-3xl bg-lime-400 font-['Neue_Montreal']">
        <h1 className="text-[3.5vw] text-black leading-[4.5vw] ">I craft beautiful interfaces that come alive with React. I bridge the
          gap between design vision and user experience, breathing life into ideas with code.</h1>

        <div className="w-full border-t-[1px] mt-20 pt-10 border-lime-500 flex gap-12">
          <div className="w-1/2">
            <h1 className=" text-[4vw] text-black font-semi">My approach :</h1>
            <button className="mt-8 flex items-center gap-4 uppercase bg-zinc-900 px-10 py-5 rounded-full text-sm">Read more
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </button>
          </div>
          <div className="w-1/2 rounded-3xl h-[65vh] bg-lime-600"></div>
        </div>
    </div>
  )
}

export default AboutPage
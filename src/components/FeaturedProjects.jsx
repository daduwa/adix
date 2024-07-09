import React from "react";

function FeaturedProjects() {
  return (
    <div className="w-full bg-zinc-200 py-20 px-20">
      <div className="border-b-[1px] border-zinc-300 w-full pb-10">
        <h1 className="text-[3.5vw] font-['Neue_Montreal'] text-zinc-900 tracking-tight leading-none">
          Featured Projects
        </h1>
      </div>
      <div className="cards py-10 gap-10 flex">
        <div className="cardcontainer w-1/2 rounded-xl">
          <li className="text-zinc-900 font-[Neue_Montereal] text-[1.2vw] pb-5 uppercase">
            FYDE
          </li>
          <div className="card transition-transform hover:scale-95 duration-500 hover:duration-1000 bg-lime-500 w-full rounded-xl overflow-hidden">
            <img
              className="w-full transition-transform hover:scale-110 duration-500 hover:duration-1000 bg-cover bg-center scale-100"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
          <div className="context flex gap-5 my-3 text-zinc-900 font-semibold">
            {["AUDIT", "copywriting", "sales deck", "slides design"].map(
              (content, index) => (
                <a
                  key={index}
                  className={`uppercase text-[0.8vw] leading-none   justify-between text-center font-light tracking-wide border-[1px] border-zinc-900 px-4 py-2 rounded-tr-xl`}
                >
                  {content}
                </a>
              )
            )}
          </div>
        </div>
        <div className="cardcontainer w-1/2   rounded-xl">
          <li className="text-zinc-900 font-[Neue_Montereal] text-[1.2vw] pb-5 uppercase">
            vise
          </li>
          <div className="card transition-transform hover:scale-95 duration-500 hover:duration-1000 bg-lime-500 w-full rounded-xl overflow-hidden">
            <img
              className="w-full transition-transform hover:scale-110 duration-500 hover:duration-1000 bg-cover bg-center scale-100"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
          <div className="context flex gap-5 my-3 text-zinc-900 font-semibold">
            {["AUDIT", "copywriting", "sales deck", "slides design"].map(
              (content, index) => (
                <a
                  key={index}
                  className={`uppercase text-[0.8vw] leading-none   justify-between text-center font-light tracking-wide border-[1px] border-zinc-900 px-4 py-2 rounded-tr-xl`}
                >
                  {content}
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div className="cards py-10 gap-10 flex mb-20">
        <div className="cardcontainer w-1/2   rounded-xl">
          <li className="text-zinc-900 font-[Neue_Montereal] text-[1.2vw] pb-5 uppercase">
            TRAWA
          </li>
          <div className="card transition-transform hover:scale-95 duration-500 hover:duration-1000 bg-lime-500 w-full   rounded-xl overflow-hidden">
            <img
              className="w-full transition-transform hover:scale-110 duration-500 hover:duration-1000 bg-cover bg-center scale-100"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              alt=""
            />
          </div>
          <div className="context flex gap-5 my-3 text-zinc-900 font-semibold">
            {["AUDIT", "copywriting", "sales deck", "slides design"].map(
              (content, index) => (
                <a
                  key={index}
                  className={`uppercase text-[0.8vw] leading-none   justify-between text-center font-light tracking-wide border-[1px] border-zinc-900 px-4 py-2 rounded-tr-xl`}
                >
                  {content}
                </a>
              )
            )}
          </div>
        </div>
        <div className="cardcontainer w-1/2   rounded-xl">
          <li className="text-zinc-900 font-[Neue_Montereal] text-[1.2vw] pb-5 uppercase">
            PREMIUM BLEND
          </li>
          <div className="card transition-transform hover:scale-95 duration-500 hover:duration-1000 bg-lime-500 w-full   rounded-xl overflow-hidden">
            <img
              className="w-full transition-transform hover:scale-110 duration-500 hover:duration-1000 bg-cover bg-center scale-100"
              src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              alt=""
            />
          </div>
          <div className="context flex gap-5 my-3 text-zinc-900 font-semibold">
            {["Design", "Mockups", "sales deck", "Landing Page"].map(
              (content, index) => (
                <a
                  key={index}
                  className={`uppercase text-[0.8vw] leading-none  justify-between text-center font-light tracking-wide border-[1px] border-zinc-900 px-4 py-2 rounded-tr-xl`}
                >
                  {content}
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div className="nextPage flex justify-center w-full">
        <button className="mt-8 flex items-center gap-4 uppercase bg-zinc-900 px-10 py-5 rounded-full text-sm">
          view all case studies
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </button>
      </div>
    </div>
  );
}

export default FeaturedProjects;

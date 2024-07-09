import React from "react";

function CardGallery() {
  return (
    <div className="p-20 w-full h-screen flex items-center gap-10 bg-zinc-50">
      <div data-scroll data-scroll-speed="-0.1" className="w-1/2 h-96 bg-yellow-500 rounded-xl flex items-center justify-center relative">
        <h1 className="font-bold italic text-[2.3vw] text-zinc-900">
          ADIX<span className="text-cyan-400"> .</span>
        </h1>
        <button className="absolute left-8 bottom-8 border-[1px] py-1 px-2 rounded-full text-sm">
          &copy; 2023-2024
        </button>
      </div>
      <div  className="w-1/2 h-96 flex gap-5 ">
        <div data-scroll data-scroll-speed="0" className="w-1/2 h-full bg-zinc-800 rounded-xl flex items-center justify-center relative">
          <h1 className="font-bold italic text-[2.3vw] uppercase">
            Icoonly<span className="text-cyan-400"> .</span>
          </h1>
          <button className="absolute left-8 bottom-8 border-[1px] py-1 px-2 rounded-full text-sm">
            &copy; 2023-2024
          </button>
        </div>
        <div data-scroll data-scroll-speed=".5" className="w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center relative">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className="absolute left-8 bottom-8 border-[1px] py-1 px-2 rounded-full text-sm">
            &copy; 2023-2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardGallery;

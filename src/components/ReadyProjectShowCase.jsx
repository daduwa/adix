import React from "react";

function ReadyProjectShowCase() {
  return (
    <div className="w-full p-40 h-full text-zinc-900 bg-cyan-400 justify-center text-center items-center">
      <div className="w-full h-full text-zinc-900 bg-cyan-400 uppercase text-[10vw] text-center leading-[11vw] tracking-tighter font-['Neue_Montreal'] font-semibold">
        <h1>Ready</h1>
        <h1>To start</h1>
        <h1>the project?</h1>
      </div>
      <div className="nextPage flex justify-center w-full">
        <button className="mt-8 flex items-center gap-4 uppercase text-zinc-50 bg-zinc-900 px-10 py-5 rounded-full text-sm">
          start the project
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </button>
      </div>
    </div>
  );
}

export default ReadyProjectShowCase;

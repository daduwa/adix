import React, { useEffect, useState } from "react";

function EyeCatch() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerWidth / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.09" className="eyes w-full h-screen overflow-hidden">
      <div className="relative mx-w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex gap-20 top-1/2 -translate-x-[50%] left-1/2 -translate-y-[50%] ">
          <div className="flex items-center justify-center w-[24vw] h-[24vw] bg-white rounded-full">
            <div className="bg-zinc-900 w-[14vw] h-[14vw] rounded-full relative ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="bg-zinc-100 w-8 h-8 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[24vw] h-[24vw] bg-white rounded-full">
            <div className="bg-zinc-900 w-[14vw] h-[14vw] rounded-full relative ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="bg-zinc-100 w-8 h-8 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EyeCatch;

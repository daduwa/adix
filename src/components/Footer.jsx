import React from "react";

function Footer() {
  return (
    <>
      <div data-scroll data-scroll-speed="0" className="w-full p-20 h-screen bg-zinc-100 gap-10 flex">
        <div className="w-1/2 h-full">
          <h1 className="text-zinc-900 text-[6vw] leading-[5.5vw] font-['Neue_Montreal'] uppercase tracking-tighter font-semibold">
            jaw-
          </h1>
          <h1 className="text-zinc-900 text-[6vw] leading-[5.5vw] font-['Neue_Montreal'] uppercase tracking-tighter font-semibold">
            dropping
          </h1>
         
        </div>
        <div className="w-1/2 text-zinc-900">
          <h1 className="text-zinc-900 text-[6vw] leading-[5.5vw] font-['Neue_Montreal'] uppercase tracking-tight font-semibold">
            presentations
          </h1>
          <div className="socialMedia py-5 text-[1.4vw]">
            <p>S:</p>
            {["Instagram", "Facebook", "youtube", "LinkedIn", "GitHub"].map(
              (item, index) => (
                <li className={`list-none underline text-lg`}>
                  <a key={index} href="" className={``}>
                    {item}
                  </a>
                </li>
              )
            )}
          </div>
          <div className="w-full socialMedia py-5 text-[1.4vw] flex ">
            <div className="w-1/2">
              <p>L:</p>
              {["Sydney", "New South Wales", "Australia"].map((item, index) => (
                <li key={index} className={`list-none underline text-lg`}>
                  {item}
                </li>
              ))}
            </div>
            <div className="w-1/2 ">
              <p>M:</p>
              {["About", "Portfolio", "Services", "Skills", "Contact"].map(
                (item, index) => (
                  <li className={`list-none underline text-lg`}>
                    <a key={index} href="" className={``}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopyright w-full px-20 py-4 flex justify-between bg-zinc-50 text-zinc-900 text-lg">
        {["ADIX", "Design 2024. Legal Terms", "Website by Arun"].map(
          (item, index) => (
            <h1 key={index} className={`${index==0 && "text-lg font-bold italic"}`}>{item}</h1>
          )
        )}
      </div>
    </>
  );
}

export default Footer;

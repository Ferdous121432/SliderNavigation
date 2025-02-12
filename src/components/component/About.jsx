import React from "react";

export default function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".01"
      className="bg-[#004D43] z-100  ">
      <div className="w-full py-20 bg-[#CDEA68] rounded-t-3xl px-4 text-justify ">
        <h1 className="text-[2rem] text-slate-800 leading-[1.1] tracking-[2px] ">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell prod­ucts, ex­plain com­plex
          ideas, and hire great peo­ple.
        </h1>
        <div className="w-full flex border-t-[1px] pt-10 mt-20 border-[#a1b562]  ">
          <div className="w-1/2  ">
            <h1 className="text-slate-800 text-[2.6rem] ">Our approach</h1>
            <button className="capitalize px-10 mt-4 py-4 bg-zinc-900 rounded-full flex gap-10 items-center ">
              Read More
              <div className="w-3 h-3 bg-zinc-100 rounded-full  "></div>
            </button>
          </div>
          <div className="w-1/2 h-[70vh] bg-slate-700 rounded-2xl  "></div>
        </div>
      </div>
    </div>
  );
}

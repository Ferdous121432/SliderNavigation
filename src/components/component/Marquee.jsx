import { motion } from "framer-motion";
import React from "react";

export default function Marquee() {
  return (
    <div className="bg-zinc-900 z-10 ">
      <div className="w-full py-10 bg-[#004D43] rounded-t-xl ">
        <div className="border-y-2 border-zinc-300 flex whitespace-nowrap overflow-hidden  ">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="text-[20vw] uppercase leading-none font-bold mb-[.8rem] pr-8    ">
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="text-[20vw] uppercase leading-none font-bold mb-[.8rem] pr-8   ">
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="text-[20vw] uppercase leading-none font-bold mb-[.8rem]   ">
            We are ochi
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

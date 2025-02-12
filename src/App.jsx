import { useGSAP } from "@gsap/react";
import "./index.css";
import gsap from "gsap";
import React, { useRef } from "react";

import LocomotiveScroll from "locomotive-scroll";

import LandingSection from "./components/component/LandingSection";
import Nav from "./components/component/Nav";
import Marquee from "./components/component/Marquee";
import About from "./components/component/About";
import Eyes from "./components/component/Eyes";
import Featured from "./components/component/Featured";
import Cards from "./components/component/Cards";
import Footer from "./components/component/Footer";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation/Navigation";

export default function App() {
  const circle = useRef(null);

  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  return (
    <main className="w-full  h-screen bg-zinc-900 text-white ">
      <Nav />
      <Navigation />
      <div>
        <LandingSection />
        <div data-scroll data-scroll-section data-scroll-speed=".2">
          <Marquee />
          {/* <About />
          <Eyes />
          <Featured />
          <Cards /> */}
          <Footer />
        </div>
      </div>
    </main>
  );
}

"use client";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import BgLayers from "./components/BgLayers";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Build from "./sections/Build";
import Cases from "./sections/Cases";
import Philosophy from "./sections/Philosophy";
import Architecture from "./sections/Architecture";
import Stack from "./sections/Stack";
import Process from "./sections/Process";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// Dynamically import intro (client only, above fold)
const Intro = dynamic(() => import("./components/Intro"), { ssr: false });

export default function Home() {
  const [navVisible, setNavVisible] = useState(false);
  const handleIntroDone = useCallback(() => setNavVisible(true), []);

  return (
    <>
      <BgLayers />
      <Intro onDone={handleIntroDone} />
      <Nav show={navVisible} />
      <main style={{ position:"relative", zIndex:1 }}>
        <Hero />
        <Build />
        <Cases />
        <Philosophy />
        <Architecture />
        <Stack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

"use client";
import { useState, useCallback } from "react";
import BgLayers from "./components/BgLayers";
import Intro from "./components/Intro";
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

export default function Home() {
  const [navVisible, setNavVisible] = useState(false);

  const handleIntroDone = useCallback(() => {
    setNavVisible(true);
  }, []);

  return (
    <>
      <BgLayers />
      <Intro onDone={handleIntroDone} />
      <Nav show={navVisible} />
      <main className="relative z-10">
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

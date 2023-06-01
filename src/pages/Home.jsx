import React from "react";
import Hero from "../components/hero/Hero";
import SlideSection from "../components/slideSection/SlideSection";
import Benefits from "../components/benefits/Benefits";
import HowItWorks from "../components/howItWoks/HowItWorks";
import Unite from "../components/unite/Unite";
import Future from "../components/future/Future";

export default function Home() {
  return (
    <>
      <Hero />
      <SlideSection />
      <Benefits />
      <HowItWorks />
      <Unite />
      <Future />
    </>
  );
}

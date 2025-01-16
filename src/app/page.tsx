"use client";

import Hero from "@/components/landing-page/Hero";
import About from "@/components/landing-page/About";
import Map from "@/components/landing-page/Map";
import Products from "@/components/landing-page/Products";
import Statistic from "@/components/landing-page/Statistic";
import UMKM from "@/components/landing-page/UMKM";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("@/components/MotionDiv"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="overflow-hidden">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <About />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Statistic />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <Products />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
      >
        <UMKM />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, type: "spring", stiffness: 60 }}
      >
        <Map />
      </MotionDiv>
    </main>
  );
}

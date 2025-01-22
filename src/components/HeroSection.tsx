'use client'
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";
import { AuroraBackground } from './ui/aurora-background';

function HeroSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }} // Starting state
        whileInView={{ opacity: 1, y: 0 }} // End state when in view
        viewport={{ once: true }} // Animates only once
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut", // Smooth easing
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="min-h-screen h-full md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
          {/* Uncomment and adjust if the Spotlight component is needed */}
          {/* <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" /> */}
          <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Master the art of Music
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              Dive into our comprehensive music courses and transform your musical journey today.
            </p>
            <div className="mt-6">
              <Link href={"/courses"}>
                <Button duration={2500}>Explore Courses</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

export default HeroSection;

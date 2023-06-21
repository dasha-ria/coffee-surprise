"use client";
import { motion, useScroll } from "framer-motion";

import Image from "next/image";
import { TextReveal } from "./components/TextReveal";
import React, { useEffect } from "react";

const TEXTS = ["Forest", "Building", "Tree", "Color"];

export default function Home() {
  const TextAnimate = {
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll relative">
      <section className="h-screen w-screen flex justify-center snap-start">
        <div className="flex flex-col gap-4 top-64 absolute">
          <h1 className="font-bold text-5xl text-center">
            GET A GOOD DOSE OF <br></br>COFFEE SURPRISE!
          </h1>
          <p className="text-center text-lg">
            We select good quality coffe for you every month and deliver it{" "}
            <br></br> to your door.
          </p>
        </div>
        <Image
          className="h-96 w-auto absolute bottom-0"
          src="/homepage-coffee.png"
          width="1000"
          height="1000"
          alt="Picture of coffee bag"
        ></Image>
      </section>
      <section className="h-screen w-screen pt-60 bg-slate-50 snap-start">
        <motion.h2
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 1 }}
          transition={{ duration: 0.5 }}
          variants={TextAnimate}
          className="text-2xl font-bold text-center mx-12 w-fit"
        >
          HIGH QUALITY THIRD <br></br>WAVE COFFEE.
        </motion.h2>
        <div className="flex justify-center items-center">
          <Image
            className="h-96 w-auto"
            src="/coffee-homepage-2.png"
            width="1000"
            height="1000"
            alt="Picture of three coffee bags"
          ></Image>
        </div>

        <div className="flex gap-8 mt-16 justify-center">
          <Image
            className="w-28 h-auto"
            src="/koppi.svg"
            width="40"
            height="40"
            alt="Koppi logo"
          ></Image>
          <Image
            className="w-20 h-auto"
            src="/drop-coffee.svg"
            width="40"
            height="40"
            alt="Koppi logo"
          ></Image>
          <Image
            className="w-32 h-auto"
            src="/coffee-collective.svg"
            width="40"
            height="40"
            alt="Koppi logo"
          ></Image>
          <Image
            className="w-20 h-auto"
            src="/the-barn-coffee.svg"
            width="40"
            height="40"
            alt="Koppi logo"
          ></Image>
          <Image
            className="w-24 h-auto"
            src="/solde.svg"
            width="40"
            height="40"
            alt="Koppi logo"
          ></Image>
        </div>
      </section>
      <section className="h-screen w-screen relative snap-start">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover z-0 absolute"
        >
          <source src="/farm-video.mp4" type="video/mp4"></source>
        </video>
        <motion.h2
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 1 }}
          transition={{ duration: 0.5 }}
          variants={TextAnimate}
          className="pt-60 text-2xl text-white font-bold mx-10 z-50 absolute"
        >
          FRESH FROM THE FARM.
        </motion.h2>
      </section>
      <section className="h-screen w-screen pt-96 relative snap-start">
        <TextReveal></TextReveal>

        <Image
          className="h-96 w-auto absolute bottom-0 left-1/2 transform -translate-x-1/2"
          src="/coffeebag2-homepage.png"
          alt="Coffee bag"
          width="1000"
          height="1000"
        ></Image>
      </section>

      <section className="h-screen w-screen relative snap-start">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover z-0 absolute"
        >
          <source src="/coffee-video.mp4" type="video/mp4"></source>
        </video>
        <motion.h2
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 1 }}
          transition={{ duration: 0.5 }}
          variants={TextAnimate}
          className="pt-60 text-2xl text-white font-bold mx-10 z-50 absolute"
        >
          FOR YOU TO HAVE A GREAT <br></br>COFFEE EXPERIENCE.
        </motion.h2>
      </section>
    </div>
  );
}

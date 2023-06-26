"use client";
import { motion, useScroll } from "framer-motion";

import Image from "next/image";
import { TextReveal } from "./components/TextReveal";
import React, { useEffect, useState } from "react";

const TEXTS = ["Forest", "Building", "Tree", "Color"];
const images = [
  "/brazil-4.jpg",
  "/colombia.jpg",
  "/ethiopia.jpg",
  "/costa-rica2.jpg",
];

export default function Home() {
  const [slideshow, setSlideshow] = useState(0);

  function nextStep() {
    if (slideshow === images.length - 1) {
      setSlideshow(0);
      return;
    }
    setSlideshow(slideshow + 1);
  }

  function previousStep() {
    if (slideshow === 0) {
      setSlideshow(images.length - 1);
      return;
    }
    setSlideshow(slideshow - 1);
  }

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
      <section className=" relative h-screen w-screen pt-96 snap-start">
        <h2 className="absolute z-30 text-6xl font-bold text-white">BRAZIL</h2>

        <div>
          <Image
            className="absolute top-0 h-full w-full overflow-hidden object-cover z-10"
            src={images[slideshow]}
            alt="Coffee bag"
            width="1000"
            height="1000"
          ></Image>
          <div className="flex gap-8 z-50 absolute bottom-32">
            <button
              onClick={previousStep}
              className="border border-2 border-white text-white p-2"
            >
              &lt;
            </button>
            <button
              onClick={nextStep}
              className="border border-2 border-white text-white p-2"
            >
              &gt;
            </button>
          </div>
        </div>
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
      <section className="h-screen w-screen snap-start">
        <h2 className="flex justify-center pt-52 pb-12 text-3xl font-bold">
          Which coffee subscription is right for you?
        </h2>

        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg">One-time use</h3>
            <p>$50</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg">Monthly</h3>
            <p>$100</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg">Every 2 months</h3>
            <p>$180</p>
          </div>
        </div>
      </section>
    </div>
  );
}

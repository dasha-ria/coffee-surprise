"use client";
import {
  motion,
  useScroll,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const texts = ["BRAZIL", "COLOMBIA", "ETHIOPIA", "COSTA RICA"];
const description = [
  "Our Brazilian blends burst with rich, nutty flavors and a slightly sweet profile - an authentic taste of Brazil in every sip.",
  "Our Colombian blends are celebrated for its bright acidity, smooth body, and caramel hints. It's truly a high-altitude delight!",
  "Our Ethiopian blends are distinctively fruity and wine-like, with a mellow yet exotic complexity that echoes its rich history.",
  "The Costa Rican blends stand out with their robust body, crisp acidity, and flavors that hint at citrus and chocolate. It’s a tropical treat that exemplifies the pure essence of Pura Vida!",
];
const images = [
  "/brazil.jpg",
  "/colombia.jpg",
  "/ethiopia.jpg",
  "/costa-rica.jpg",
];

export default function Home() {
  const [slideshow, setSlideshow] = useState(0);
  const [text, setText] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.matchMedia("(min-width:768px)").matches);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  function nextStep() {
    setDirection(1);
    if (slideshow === images.length - 1) {
      setSlideshow(0);
      setText(0);
      return;
    }
    setSlideshow(slideshow + 1);
    setText(text + 1);
  }

  function previousStep() {
    setDirection(-1);
    if (slideshow === 0) {
      setSlideshow(images.length - 1);
      setText(images.length - 1);
      return;
    }
    setSlideshow(slideshow - 1);
    setText(text - 1);
  }

  const TextAnimate = isDesktop
    ? {
        offscreen: {
          y: 20,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeIn" },
        },
      }
    : {
        offscreen: {
          y: 0,
          opacity: 1,
        },
        onscreen: {
          y: 0,
          opacity: 1,
        },
      };

  const slideshowVariants = {
    initial: (direction: any) => {
      return { x: direction > 0 ? 300 : -300, opacity: 0.5 };
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.1 },
      },
    },
    exit: (direction: any) => {
      return { x: direction > 0 ? -300 : 300, opacity: 0.5 };
    },
  };

  return (
    <div className="h-screen w-screen md:snap-y md:snap-mandatory md:overflow-scroll relative">
      <section className="h-screen w-screen flex justify-center snap-start">
        <div className="flex flex-col gap-4 top-28 md:top-36 absolute items-center">
          <h1 className="font-bold text-2xl md:text-5xl text-center">
            GET A GOOD DOSE OF <br></br>COFFEE SURPRISE!
          </h1>
          <p className="text-center w-2/3 md:text-lg">
            We select good quality coffe for you every month and deliver it to
            your door.
          </p>
        </div>
        <Image
          className="md:h-96 md:w-auto absolute bottom-0"
          src="/homepage-coffee.png"
          width="1000"
          height="1000"
          alt="Picture of coffee bag"
        ></Image>
      </section>
      <section className="h-screen w-screen pt-24 md:pt-36 bg-slate-50 md:snap-start">
        <motion.h2
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 1 }}
          transition={{ duration: 0.5 }}
          variants={TextAnimate}
          className="text-xl md:text-2xl mx-auto md:mx-12 font-bold text-center w-fit"
        >
          HIGH QUALITY THIRD <br></br>WAVE COFFEE.
        </motion.h2>
        <div className="flex justify-center items-center">
          <Image
            className="h-64 md:h-96 mt-8 md:mt-0 w-auto"
            src="/coffee-homepage-2.png"
            width="1000"
            height="1000"
            alt="Picture of three coffee bags"
          ></Image>
        </div>

        <div className="flex gap-x-6 gap-y-0 md:gap-8 mt-2 md:mt-16 lg:mt-8 justify-center items-center flex-wrap">
          <Image
            className="w-24 md:w-28 h-auto"
            src="/koppi.svg"
            width="40"
            height="40"
            alt="Koppi logo"
          ></Image>
          <Image
            className="w-16 md:w-20 h-auto"
            src="/drop-coffee.svg"
            width="40"
            height="40"
            alt="Drop coffee logo"
          ></Image>
          <Image
            className="w-24 md:w-32 h-auto"
            src="/coffee-collective.svg"
            width="40"
            height="40"
            alt="Coffee collective logo"
          ></Image>
          <Image
            className="w-20 md:w-20 h-auto"
            src="/the-barn-coffee.svg"
            width="40"
            height="40"
            alt="The barn logo"
          ></Image>
          <Image
            className="w-24 md:w-24 h-auto"
            src="/solde.svg"
            width="40"
            height="40"
            alt="Solde logo"
          ></Image>
        </div>
      </section>
      <section className="h-screen w-screen relative md:snap-start">
        <video
          autoPlay
          playsInline
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
          className="pt-24 md:pt-36 text-xl md:text-2xl text-white font-bold mx-4 md:mx-10 z-50 absolute"
        >
          FRESH FROM THE FARM.
        </motion.h2>
      </section>
      <section className="relative h-screen w-screen pt-28 md:pt-96 md:snap-start bg-black">
        <div className="flex justify-center items-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.h2
              key={texts[text]}
              className="absolute z-30 text-4xl md:text-6xl font-bold text-black md:text-white"
            >
              {texts[text]}
            </motion.h2>
            <div className="mt-80 w-80 md:w-[40rem] h-40 flex justify-center items-center absolute z-40 bg-white/20 backdrop-blur-md">
              <motion.p
                key={description[text]}
                className="absolute z-30 text-lg md:text-xl w-72 md:w-[35rem] font-bold text-white"
              >
                {description[text]}
              </motion.p>
            </div>
          </AnimatePresence>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              variants={slideshowVariants}
              animate="animate"
              initial="initial"
              exit="exit"
              className="absolute top-0 h-full w-full overflow-hidden object-cover z-10"
              src={images[slideshow]}
              alt="Coffee bag"
              width="1000"
              height="1000"
              key={images[slideshow]}
              custom={direction}
            ></motion.img>
          </AnimatePresence>
        </div>

        <div className="flex gap-8 z-50 absolute w-full px-10 md:px-20 justify-between 2xl:px-80 min-[1800px]:px-[500px]">
          <button
            onClick={previousStep}
            className="-mt-4 lg:mt-36 lg:w-12 lg:h-12 lg:bg-transparent/80 lg:rounded-full lg:flex lg:items-center lg:relative"
          >
            <svg
              className="w-3 h-auto text-black md:text-white fill-current lg:absolute lg:right-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 20"
            >
              <path d="m10.21 20-10-10 10-10v20Z" />
            </svg>
          </button>
          <button
            onClick={nextStep}
            className="-mt-4 lg:mt-36 lg:w-12 lg:h-12 lg:bg-transparent/80 lg:rounded-full lg:flex lg:items-center lg:relative"
          >
            <svg
              className="w-3 h-auto text-black md:text-white fill-current lg:absolute lg:left-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 20"
            >
              <path d="M0 20V0l10 10L0 20Z" />
            </svg>
          </button>
        </div>
      </section>

      <section className="h-screen w-screen relative md:snap-start">
        <video
          autoPlay
          playsInline
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
          className="pt-16 text-xl md:pt-36 md:text-2xl text-white font-bold mx-10 z-50 absolute"
        >
          FOR YOU TO HAVE A GREAT <br></br>COFFEE EXPERIENCE.
        </motion.h2>
      </section>
      <section className="h-screen w-screen md:snap-start">
        <motion.h2
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 1 }}
          transition={{ duration: 0.5 }}
          variants={TextAnimate}
          className="flex justify-center pl-4 md:pl-0 pt-20 md:pt-52 pb-8 md:pb-12 text-2xl md:text-3xl font-bold"
        >
          Which coffee subscription is right for you?
        </motion.h2>

        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 1 }}
          transition={{ duration: 0.5 }}
          variants={TextAnimate}
          className="flex flex-col md:flex-row justify-center gap-12 md:gap-48"
        >
          <div className="flex flex-col items-center">
            <h3 className="font-bold md:text-lg">Try this month's coffee</h3>
            <p>$40</p>
            <div className="flex gap-1 pt-4 pb-2">
              <Image
                className="h-5 w-auto"
                src="/coffee-bean.svg"
                alt="Coffee bean"
                width="5"
                height="5"
              ></Image>
              <Image
                className="h-5 w-auto"
                src="/coffee-bean.svg"
                alt="Coffee bean"
                width="5"
                height="5"
              ></Image>
            </div>
            <p>2 coffee bags</p>
            <p>Sent only once</p>
            <p>No need to cancel</p>
            <p>Free delivery</p>
            <Link href="/subscribe">
              <button className="py-1 px-4 bg-theme-red text-white rounded-full text-sm mt-2">
                Buy
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold md:text-lg">Monthly</h3>
            <p>From $20/mo</p>
            <div className="flex gap-1 pt-4 pb-2">
              <Image
                className="h-5 w-auto"
                src="/coffee-bean.svg"
                alt="Coffee bean"
                width="5"
                height="5"
              ></Image>
              <Image
                className="h-5 w-auto"
                src="/coffee-bean.svg"
                alt="Coffee bean"
                width="5"
                height="5"
              ></Image>
              <Image
                className="h-5 w-auto"
                src="/coffee-bean.svg"
                alt="Coffee bean"
                width="5"
                height="5"
              ></Image>
              <Image
                className="h-5 w-auto"
                src="/coffee-bean.svg"
                alt="Coffee bean"
                width="5"
                height="5"
              ></Image>
            </div>
            <p>1, 2 or 4 coffee bags</p>
            <p>Sent monthly</p>
            <p>Can cancel anytime</p>
            <p>Free delivery</p>
            <Link href="/subscribe">
              <button className="py-1 px-4 bg-theme-red text-white rounded-full text-sm mt-2">
                Buy
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

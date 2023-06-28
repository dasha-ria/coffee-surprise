"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Subscribe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="pt-56 pl-10"
    >
      <h2 className="text-2xl font-bold">
        Which subscription is right for you?
      </h2>
      <div className="flex items-center gap-12">
        <Image
          src="/coffee-homepage-2.png"
          alt="coffee bags"
          width="1000"
          height="1000"
          className="h-80 w-auto mt-20"
        ></Image>
        <div className="flex flex-col gap-4">
          <div className="border border-black rounded-md w-80 pl-4 py-4">
            <p className="text-lg font-bold">Try this month's coffee!</p>
            <p>$40</p>
            <p>2 coffee bags</p>
            <button className="py-1 px-4 bg-theme-red text-white rounded-full text-sm mt-8">
              Buy
            </button>
          </div>
          <div className="border border-black rounded-md w-80 pl-4 py-4">
            <p className="text-lg font-bold">Monthly subscription</p>
            <p>From $20/mo</p>
            <div className="flex gap-2 items-center mt-4">
              <div className="p-1 border border-black rounded-md w-16 flex justify-center items-center">
                <Image
                  src="/arrow-left-black.svg"
                  alt="left arrow"
                  width="10"
                  height="10"
                  className="w-8 h-auto ml-4"
                ></Image>
                <p>1</p>
                <Image
                  src="/arrow-right-black.svg"
                  alt="left arrow"
                  width="10"
                  height="10"
                  className="w-8 h-auto mr-4"
                ></Image>
              </div>
              <p>coffee bags</p>
            </div>
            <button className="py-1 px-4 bg-theme-red text-white rounded-full text-sm mt-8">
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="pl-8 flex gap-12">
        <div className="flex gap-1">
          <Image
            className="w-6 h-auto"
            src="/package.svg"
            alt="package"
            width="10"
            height="10"
          ></Image>
          <p>Free delivery</p>
        </div>
        <div className="flex gap-1">
          <Image
            className="w-6 h-auto"
            src="/shipping.svg"
            alt="package"
            width="10"
            height="10"
          ></Image>
          <p>
            Shipping date: <span>30 July</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

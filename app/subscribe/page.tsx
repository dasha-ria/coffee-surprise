"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useState } from "react";

export default function Subscribe() {
  const [isShown, setIsShown] = useState(false);

  const showCoffeeBagChoose = () => {
    setIsShown(true);
  };

  const hideCoffeeBagChoose = () => {
    setIsShown(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="pt-52 pl-10"
    >
      <h2 className="text-2xl font-bold">
        Which subscription is right for you?
      </h2>
      <div className="flex items-center gap-12 mt-8">
        <Image
          src="/coffee-homepage-2.png"
          alt="coffee bags"
          width="1000"
          height="1000"
          className="h-80 w-auto mt-20"
        ></Image>

        <form>
          <RadioGroup.Root
            className="flex flex-col gap-2.5"
            defaultValue="none"
            aria-label="View density"
          >
            <div className="flex items-center">
              <RadioGroup.Item
                className="flex flex-col w-80 pl-4 py-4 rounded-lg border-[1px] border-black data-[state=checked]:border-blue-600 data-[state=checked]:border-2"
                value="onetime"
                id="r1"
                onClick={hideCoffeeBagChoose}
              >
                <label
                  className="text-black cursor-pointer text-lg font-bold"
                  htmlFor="r1"
                >
                  Try this month's coffee!
                </label>
                <p>$40</p>
                <p>2 coffee bags</p>
              </RadioGroup.Item>
            </div>
            <div className="flex items-center">
              <RadioGroup.Item
                className="flex flex-col w-80 p-4 rounded-lg border-[1px] border-black data-[state=checked]:border-blue-600 data-[state=checked]:border-2"
                value="monthly"
                id="r2"
                onClick={showCoffeeBagChoose}
              >
                <label
                  className="text-black cursor-pointer text-lg font-bold"
                  htmlFor="r2"
                >
                  Monthly subscription
                </label>
                <p>From $20/mo</p>
                <p>1, 2 or 4 coffee bags</p>
              </RadioGroup.Item>
            </div>
          </RadioGroup.Root>
          {isShown && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                Choose how many coffee bags you'd like <br></br> to receive
                monthly
              </p>
              <RadioGroup.Root
                className="flex gap-4 items-center mt-4"
                defaultValue="none"
                aria-label="View density"
              >
                <RadioGroup.Item
                  className="py-1 px-3 border border-black rounded-md data-[state=checked]:border-blue-600 data-[state=checked]:border-2"
                  value="onebag"
                  id="onebag"
                >
                  <label className="cursor-pointer text-black" htmlFor="onebag">
                    1
                  </label>
                </RadioGroup.Item>
                <RadioGroup.Item
                  className="py-1 px-3 border border-black rounded-md data-[state=checked]:border-blue-600 data-[state=checked]:border-2"
                  value="twobag"
                  id="twobag"
                >
                  <label className="cursor-pointer text-black" htmlFor="twobag">
                    2
                  </label>
                </RadioGroup.Item>
                <RadioGroup.Item
                  className="py-1 px-3 border border-black rounded-md data-[state=checked]:border-blue-600 data-[state=checked]:border-2"
                  value="fourbag"
                  id="fourbag"
                >
                  <label
                    className="cursor-pointer text-black"
                    htmlFor="fourbag"
                  >
                    4
                  </label>
                </RadioGroup.Item>
              </RadioGroup.Root>
            </motion.div>
          )}
        </form>
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

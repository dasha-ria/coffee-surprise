"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Checkout() {
  const [pickUpShown, setPickUpShown] = useState(false);
  const [subscriptionChoice, setSubscriptionChoice] = useState("null");
  const [inputValue, setInputValue] = useState("");

  const havePickUp = () => {
    setPickUpShown(true);
  };

  const haveDelivered = () => {
    setPickUpShown(false);
  };

  const maxLengthCheck = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };

  const creditCardSpace = (e) => {
    const val = e.target.value.replace(/[^\d]/g, ""); // replace non digit characters
    let formatted = "";

    for (let i = 0; i < val.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += " ";
      }
      formatted += val[i];
    }

    setInputValue(formatted);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSubscriptionChoice =
        localStorage.getItem("subscriptionChoice");

      if (storedSubscriptionChoice) {
        setSubscriptionChoice(JSON.parse(storedSubscriptionChoice));
      }
    }
  }, []);

  const { subscriptionType, bagsPerMonth } = subscriptionChoice;

  return (
    <div className="pt-32 pl-10 flex gap-16">
      {/* <h2 className="text-2xl font-bold">
        How would you like to get your order?
      </h2>

      <form>
        <RadioGroup.Root
          defaultValue="none"
          aria-label="View density"
          className="flex gap-4 mt-4"
        >
          <RadioGroup.Item
            onClick={haveDelivered}
            value="delivery"
            id="delivery"
            className="flex justify-center items-center gap-2 py-6 w-64 border-2 border-gray-400 rounded-md data-[state=checked]:border-blue-600"
          >
            <Image
              className="w-8 h-auto"
              src="/package.svg"
              alt="package"
              width="10"
              height="10"
            ></Image>
            <label htmlFor="delivery" className="font-semibold text-lg">
              I'd like it delivered
            </label>
          </RadioGroup.Item>
          <RadioGroup.Item
            onClick={havePickUp}
            value="pickup"
            id="pickup"
            className="flex justify-center items-center gap-2 py-6 w-64 border-2 border-gray-400 rounded-md data-[state=checked]:border-blue-600"
          >
            <Image
              className="w-8 h-auto"
              src="/bag.svg"
              alt="package"
              width="10"
              height="10"
            ></Image>
            <label htmlFor="pickup" className="font-semibold text-lg">
              I'll pick it up
            </label>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </form>

      <div className={`mt-4 ${!pickUpShown ? "invisible" : ""}`}>
        <p className="mt-4 font-semibold text-lg">Pick-up location:</p>
        <p>
          5000 Wilshire Blvd <br></br>Los Angeles, CA
        </p>
      </div> */}
      <div>
        <h3 className="font-semibold text-2xl">Shipping</h3>
        <form className="mt-2 flex flex-col gap-3">
          <div className="flex flex-col w-80">
            <label htmlFor="firstname" className="text-sm">
              First name
            </label>
            <input
              type="text"
              placeholder="John"
              className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
            ></input>
          </div>
          <div className="flex flex-col gap-1 w-80">
            <label htmlFor="firstname" className="text-sm">
              Last name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
            ></input>
          </div>
          <div className="flex flex-col gap-1 w-80">
            <label htmlFor="firstname" className="text-sm">
              Email address
            </label>
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
            ></input>
          </div>
          <div className="flex flex-col gap-1 w-80">
            <label htmlFor="firstname" className="text-sm">
              Phone number
            </label>
            <input
              maxLength="10"
              onInput={maxLengthCheck}
              type="text"
              placeholder="1234567890"
              className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
            ></input>
          </div>
          <div className="flex flex-col gap-1 w-80">
            <label htmlFor="firstname" className="text-sm">
              Address
            </label>
            <input
              type="text"
              placeholder="123 Main St"
              className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
            ></input>
          </div>
          <div className="flex flex-col gap-1 w-80">
            <label htmlFor="firstname" className="text-sm">
              Postcode
            </label>
            <input
              type="text"
              placeholder="12345"
              maxLength="5"
              onInput={maxLengthCheck}
              className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
            ></input>
          </div>
          <div className="flex flex-col gap-1 w-80">
            <label htmlFor="firstname" className="text-sm">
              City
            </label>
            <input
              type="text"
              placeholder="Fresno"
              className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
            ></input>
          </div>
        </form>

        <h3 className="font-semibold text-2xl mt-8">Payment</h3>
        <form>
          <RadioGroup.Root
            defaultValue="none"
            aria-label="View density"
            className="flex gap-4 mt-4"
          >
            <RadioGroup.Item
              onClick={haveDelivered}
              value="delivery"
              id="delivery"
              className="flex justify-center items-center gap-2 py-1 w-44 border-2 border-gray-400 rounded-md data-[state=checked]:border-blue-600"
            >
              <Image
                className="w-20 h-auto"
                src="/apple-pay.svg"
                alt="package"
                width="10"
                height="10"
              ></Image>
            </RadioGroup.Item>
            <RadioGroup.Item
              onClick={havePickUp}
              value="pickup"
              id="pickup"
              className="flex justify-center items-center gap-2 py-1 w-44 border-2 border-gray-400 rounded-md data-[state=checked]:border-blue-600"
            >
              <Image
                className="w-8 h-auto"
                src="/credit-card.svg"
                alt="package"
                width="10"
                height="10"
              ></Image>
              <label htmlFor="pickup" className="font-semibold text-lg">
                Credit Card
              </label>
            </RadioGroup.Item>
          </RadioGroup.Root>
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex flex-col gap-1 w-80">
              <label htmlFor="cardname" className="text-sm">
                Name on card
              </label>
              <input
                id="cardname"
                type="text"
                placeholder="John Doe"
                className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
              ></input>
            </div>
            <div className="flex flex-col gap-1 w-80">
              <label htmlFor="cardnumber" className="text-sm">
                Credit card number
              </label>
              <input
                type="text"
                maxLength="19"
                onInput={maxLengthCheck}
                onChange={creditCardSpace}
                value={inputValue}
                id="cardnumber"
                placeholder="1234 5678 9012 3456"
                className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
              ></input>
            </div>
            <div className="flex w-80 justify-between">
              <div className="flex flex-col w-36">
                <label htmlFor="expiry" className="text-sm">
                  Expiry date
                </label>
                <input
                  id="expiry"
                  maxLength="4"
                  onInput={maxLengthCheck}
                  type="number"
                  placeholder="01/19"
                  className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
                ></input>
              </div>
              <div className="flex flex-col w-36">
                <label htmlFor="security" className="text-sm">
                  Security code
                </label>
                <input
                  id="security"
                  maxLength="3"
                  onInput={maxLengthCheck}
                  type="number"
                  placeholder="***"
                  className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
                ></input>
              </div>
            </div>
          </div>
        </form>
        <Link href="/shipping">
          <button className="mt-8 mb-8 py-2 px-4 rounded-full bg-theme-red text-white">
            Buy
          </button>
        </Link>
      </div>

      <div className="sticky">
        <h3 className="font-semibold text-2xl ">Order summary</h3>
        <div className="mt-7 border-2 border-black py-4 px-4 rounded-md w-80">
          {subscriptionType === "one-time" && (
            <p className="font-medium text-lg">Try this month's coffee!</p>
          )}
          {subscriptionType === "monthly" && (
            <p className="font-medium text-lg">Monthly subscription</p>
          )}
          <div className="flex gap-1">
            {subscriptionType === "monthly" && <span>{bagsPerMonth} </span>}
            {subscriptionType === "one-time" && <p>2 </p>}
            {subscriptionType === "monthly" && bagsPerMonth === "1" ? (
              <p>coffee bag</p>
            ) : (
              <p>coffee bags</p>
            )}
          </div>
        </div>

        <h4 className="font-medium text-lg mt-6">Your delivery method:</h4>
        <div className="mt-2 flex border-2 border-black py-4 px-4 rounded-md justify-between w-80">
          <p className="font-medium">Delivers Mon, Aug 3</p>
          <p>FREE</p>
        </div>
      </div>
    </div>
  );
}

"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import Image from "next/image";

export default function Checkout() {
  const maxLengthCheck = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };
  return (
    <div className="pt-40 pl-10">
      <h2 className="text-2xl font-bold">
        How would you like to get your order?
      </h2>

      <form>
        <RadioGroup.Root
          defaultValue="none"
          aria-label="View density"
          className="flex gap-4 mt-4"
        >
          <RadioGroup.Item
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

      {/* <p className="mt-4">Delivering to:</p>
      <form>
        <label htmlFor="zip"></label>
        <input
          type="number"
          id="zip"
          maxLength="5"
          onInput={maxLengthCheck}
          className="w-40 py-2 px-4 border-2 border-gray-500 focus:border-blue-600 rounded-md"
        ></input>
      </form> */}

      {/* <p className="mt-4">Pick-up location:</p>
      <p>
        Asdasd asdasd, <br></br>28231 Los Angeles CA
      </p> */}

      <h3 className="font-semibold text-xl mt-12">Order summary</h3>
      <div className="mt-2 border-2 border-black py-4 px-4 rounded-md w-80">
        <p className="font-medium text-lg">Monthly subscription</p>
        <p>
          <span>2</span> coffee bags
        </p>
      </div>

      <h4 className="font-medium text-lg mt-6">Your delivery method:</h4>
      <div className="mt-2 flex border-2 border-black py-4 px-4 rounded-md justify-between w-80">
        <p className="font-medium">Delivers Mon, Aug 3</p>
        <p>FREE</p>
      </div>
      {/* <div className="mt-2 flex border-2 border-black py-4 px-4 rounded-md justify-between w-80">
        <p className="font-medium">Pick up Mon, Aug 3</p>
        <p>FREE</p>
      </div> */}

      <button className="mt-8 py-2 px-4 rounded-full bg-theme-red text-white">
        Continue to shipping
      </button>
    </div>
  );
}

"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Form, Field } from "react-final-form";
import {
  forwardRef,
  KeyboardEvent,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import {
  FormatCreditCardNumber,
  FormatExpirationDate,
  FormatCVC,
} from "../components/CardFormat";

// function clearNumber(value = "") {
//   return value.replace(/\D+/g, "");
// }

// function formatCreditCardNumber(value) {
//   if (!value) {
//     return value;
//   }

//   const issuer = Payment.fns.cardType(value);
//   const clearValue = clearNumber(value);
//   let nextValue;

//   switch (issuer) {
//     case "amex":
//       nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
//         4,
//         10
//       )} ${clearValue.slice(10, 15)}`;
//       break;
//     case "dinersclub":
//       nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
//         4,
//         10
//       )} ${clearValue.slice(10, 14)}`;
//       break;
//     default:
//       nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
//         4,
//         8
//       )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
//       break;
//   }

//   return nextValue.trim();
// }

// export function formatExpirationDate(value) {
//   const clearValue = clearNumber(value);

//   if (clearValue.length >= 3) {
//     return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
//   }

//   return clearValue;
// }

// export function formatCVC(value, prevValue, allValues = {}) {
//   const clearValue = clearNumber(value);
//   let maxLength = 4;

//   if (allValues.number) {
//     const issuer = Payment.fns.cardType(allValues.number);
//     maxLength = issuer === "amex" ? 4 : 3;
//   }

//   return clearValue.slice(0, maxLength);
// }

export default function Checkout() {
  const router = useRouter();
  const [subscriptionChoice, setSubscriptionChoice] = useState("null");
  const [creditInputValue, setCreditInputValue] = useState("");
  const [expiryInputValue, setExpiryInputValue] = useState("");
  const [creditShown, setCreditShown] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [showPaymentError, setShowPaymentError] = useState(false);

  const showCreditForm = () => {
    setCreditShown(true);
  };

  const hideCreditForm = () => {
    setCreditShown(false);
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

    setCreditInputValue(formatted);
  };

  const expiryDateSeparator = (e) => {
    const val = e.target.value.replace(/[^\d]/g, ""); // replace non digit characters
    let formatted = "";

    for (let i = 0; i < val.length; i++) {
      if (i > 0 && i % 2 === 0) {
        formatted += "/";
      }
      formatted += val[i];
    }

    setExpiryInputValue(formatted);
  };

  const onSubmit = (values, form) => {
    // if (!paymentMethod) {
    //   setShowPaymentError(true);
    //   return;
    // }

    console.log(values);
    console.log(form);
    // router.push("/confirmation");
  };

  //const onSubmit = (data, err) => console.log(err);

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

  const NumberOnlyInput = forwardRef<any>((props, ref) => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { key } = e;
      if (!/[0-9]/.test(key)) {
        e.preventDefault();
      }
    };

    return (
      <input ref={ref} type="text" onKeyDown={handleKeyDown} {...props}></input>
    );
  });
  NumberOnlyInput.displayName = "NumberOnlyInput";

  const required = (value) => (value ? undefined : "Required");
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  return (
    <div className="pt-32 pl-10 flex gap-16">
      <div>
        <h3 className="font-semibold text-2xl">Shipping</h3>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, hasValidationErrors }) => (
            <form className="mt-2 flex flex-col gap-3" onSubmit={handleSubmit}>
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <div className="flex flex-col w-80">
                    <label htmlFor="name" className="text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      {...input}
                      placeholder="John"
                      className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
                    ></input>
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="email" validate={required}>
                {({ input, meta }) => (
                  <div className="flex flex-col gap-1 w-80">
                    <label htmlFor="email" className="text-sm">
                      Email address
                    </label>
                    <input
                      type="email"
                      {...input}
                      placeholder="johndoe@gmail.com"
                      className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
                    ></input>
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="phone">
                {({ input, meta }) => (
                  <div className="flex flex-col gap-1 w-80">
                    <label htmlFor="phone" className="text-sm">
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder="1234567890"
                      className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
                    ></input>
                  </div>
                )}
              </Field>
              <Field name="address" validate={required}>
                {({ input, meta }) => (
                  <div className="flex flex-col gap-1 w-80">
                    <label htmlFor="address" className="text-sm">
                      Address
                    </label>
                    <input
                      {...input}
                      placeholder="123 Main St"
                      className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
                    ></input>
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="postcode" validate={required} type="number">
                {({ input, meta }) => (
                  <div className="flex flex-col gap-1 w-80">
                    <label htmlFor="postcode" className="text-sm">
                      Postcode
                    </label>
                    <input
                      {...input}
                      placeholder="12345"
                      className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
                    ></input>
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="city" validate={required}>
                {({ input, meta }) => (
                  <div className="flex flex-col gap-1 w-80">
                    <label htmlFor="city" className="text-sm">
                      City
                    </label>
                    <input
                      type="text"
                      {...input}
                      placeholder="Fresno"
                      className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
                    ></input>
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <h3 className="font-semibold text-2xl mt-8">Payment</h3>
              <div className="flex gap-2 items-center">
                <Image
                  src="/credit-card.svg"
                  alt="credit card"
                  width="10"
                  height="10"
                  className="w-8 h-auto"
                ></Image>
                <p className="font-semibold text-lg">Credit card</p>
              </div>

              {/* <RadioGroup.Root
                aria-label="View density"
                aria-checked
                className="flex gap-4 mt-4"
                onValueChange={() => {
                  setPaymentMethod();
                  setShowPaymentError(false);
                }}
                required
              >
                <RadioGroup.Item
                  aria-checked
                  onClick={hideCreditForm}
                  value="applepay"
                  id="applepay"
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
                  aria-checked
                  onClick={showCreditForm}
                  value="creditcard"
                  id="creditcard"
                  className="flex justify-center items-center gap-2 py-1 w-44 border-2 border-gray-400 rounded-md data-[state=checked]:border-blue-600"
                >
                  <Image
                    className="w-8 h-auto"
                    src="/credit-card.svg"
                    alt="package"
                    width="10"
                    height="10"
                  ></Image>
                  <label htmlFor="creditcard" className="font-semibold text-lg">
                    Credit Card
                  </label>
                </RadioGroup.Item>
              </RadioGroup.Root> */}

              <div className="mt-2 flex flex-col gap-2">
                <Field name="credit-name" validate={required}>
                  {({ input, meta }) => (
                    <div className="flex flex-col gap-1 w-80">
                      <label htmlFor="cardname" className="text-sm">
                        Name on card
                      </label>
                      <input
                        type="text"
                        {...input}
                        placeholder="John Doe"
                        className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
                      ></input>
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field
                  name="credit-number"
                  validate={required}
                  format={FormatCreditCardNumber}
                  pattern="[\d| ]{16,22}"
                >
                  {({ input, meta }) => (
                    <div className="flex flex-col gap-1 w-80">
                      <label htmlFor="cardnumber" className="text-sm">
                        Credit card number
                      </label>
                      <input
                        type="text"
                        {...input}
                        placeholder="1234 5678 9012 3456"
                        className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
                      ></input>
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <div className="flex w-80 justify-between">
                  <Field
                    name="expiry"
                    validate={required}
                    format={FormatExpirationDate}
                    pattern="\d{3,4}"
                  >
                    {({ input, meta }) => (
                      <div className="flex flex-col w-36">
                        <label htmlFor="expiry" className="text-sm">
                          Expiration date
                        </label>
                        <input
                          type="text"
                          {...input}
                          placeholder="01/19"
                          className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
                        ></input>
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>

                  <Field
                    name="security"
                    validate={required}
                    format={FormatCVC}
                    pattern="\d{3,4}"
                  >
                    {({ input, meta }) => (
                      <div className="flex flex-col w-36">
                        <label htmlFor="security" className="text-sm">
                          Security code
                        </label>
                        <input
                          type="text"
                          {...input}
                          placeholder="123"
                          required
                          className="border-2 focus:border-blue-600 border-black rounded-md pl-2 p-1"
                        ></input>
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
              </div>

              <button
                type="submit"
                className="disabled:bg-theme-red/20 mt-8 mb-36 py-2 px-4 w-20 rounded-full bg-theme-red text-white"
                disabled={hasValidationErrors}
              >
                Buy
              </button>
            </form>
          )}
        ></Form>
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

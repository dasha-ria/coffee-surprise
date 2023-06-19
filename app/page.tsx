import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex col justify-center">
      <div className="mt-32 flex flex-col gap-2">
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
    </div>
  );
}

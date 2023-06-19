import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="h-screen flex justify-center">
        <div className="flex flex-col gap-2 top-64 absolute">
          <div>
            <h1 className="font-bold text-5xl text-center">
              GET A GOOD DOSE OF <br></br>COFFEE SURPRISE!
            </h1>
            <p className="text-center text-lg">
              We select good quality coffe for you every month and deliver it{" "}
              <br></br> to your door.
            </p>
          </div>
        </div>
        <Image
          className="h-96 w-auto absolute bottom-0"
          src="/homepage-coffee.png"
          width="1000"
          height="1000"
          alt="Picture of coffee bag"
        ></Image>
      </section>
      <section className="h-screen">
        <h2 className="text-2xl font-bold mt-60">
          HIGH QUALITY THIRD <br></br>WAVE COFFEE.
        </h2>
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
    </div>
  );
}

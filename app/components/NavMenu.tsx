import Image from "next/image";

export function NavMenu() {
  return (
    <nav className="flex items-end pt-8 pl-8 pr-8 justify-between">
      <Image
        src="/coffeesurprise-logo.svg"
        alt="Coffee Surprise logo"
        width="50"
        height="50"
        className="w-40 h-auto"
      ></Image>
      <ul className="flex gap-8">
        <li>ABOUT</li>
        <li>THE COFFEE</li>
        <li>SUBSCRIBE!</li>
      </ul>
    </nav>
  );
}

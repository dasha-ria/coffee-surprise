import Image from "next/image";
import Link from "next/link";

export function NavMenu() {
  return (
    <nav className="flex items-end pt-8 pr-8 justify-between">
      <Link href="/">
        <Image
          src="/coffeesurprise-logo.svg"
          alt="Coffee Surprise logo"
          width="50"
          height="50"
          className="w-40 h-auto"
        ></Image>
      </Link>
      <ul className="flex gap-8">
        <Link href="/about">
          <li>ABOUT</li>
        </Link>
        <Link href="/the-coffee">
          <li>THE COFFEE</li>
        </Link>
        <Link href="/subscribe">
          <li>SUBSCRIBE!</li>
        </Link>
      </ul>
    </nav>
  );
}

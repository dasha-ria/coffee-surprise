import "./globals.css";
import { Inter } from "next/font/google";
import { NavMenu } from "./components/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coffee Surprise",
  description: "coffee surprise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavMenu></NavMenu>
        {children}
      </body>
    </html>
  );
}

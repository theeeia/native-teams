"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Header component that renders the site logo, navigation links, and a call-to-action button.
 *
 */
export const Header = () => {
  return (
    <header className="bg-white h-[90px] container-padding flex items-center ">
      <div className="container-width py-3 flex items-center justify-between w-[100%]">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Company Logo"
            width={158}
            height={29}
          />
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#">Link group 1</Link>
          <Link href="#">Link group 2</Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="#"
            className="bg-main text-white px-4 py-1.5 rounded-2xl hover:opacity-80 transition"
          >
            Get Started
          </Link>
        </div>

        <img src={"/images/menu.png"} className="md:hidden mr-5"></img>
      </div>
    </header>
  );
};

"use client";

import { footerData } from "@/utils/constants";
import Image from "next/image";

/**
 * Footer component displaying company logo, navigation sections, and legal links.
 *
 */
export const Footer = () => {
  return (
    <footer className="bg-dark-blue ">
      <div className="container-padding flex flex-col sm:flex-row px-4 py-20 justify-between ">
        <div className="mb-10 w-full sm:w-1/3 ">
          <Image
            src="/images/logo-white.png"
            alt="Company Logo"
            width={158}
            height={29}
          />
        </div>
        <div className=" flex justify-around sm:flex-row flex-col w-full sm:w-2/3">
          {footerData.map((section, id) => (
            <div key={id}>
              <h4 className="font-semibold mb-3 uppercase text-white">
                {section.header}
                <img
                  src="/images/down-arrow.svg"
                  alt="arrow icon"
                  className="w-3 h-3 inline sm:hidden"
                />
              </h4>
              <ul className="space-y-2 font-light text-light-purple hidden sm:block">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/20" />

      <div className="text-gray flex flex-col sm:flex-row text-center justify-center container-padding my-10">
        <div className="order-2 sm:order-1 my-10 sm:my-0 w-full sm:w-2/5">
          © Native Teams Limited
        </div>
        <div className="order-1 sm:order-2 w-full sm:w-3/5 flex justify-center md:justify-left gap-4 ">
          <a href="#">Cookie Policy </a> |<a href="#">Privacy Policy </a> |
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

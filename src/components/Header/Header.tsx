"use client";
import Link from "next/link";
import React from "react";
import { headers } from "next/headers";
// import { CustomInput } from "../CustomInput";
// import { CustomIcon } from "../CustomIcon";
// import { CustomChip } from "../CustomChip";
import styles from "./Header.module.css";
import clsx from "clsx";
// import CustomButton from "../CustomButton/CustomButton";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { CustomInput } from "../CustomInput";
import { CustomIcon } from "../CustomIcon";

const LINKS = [
  {
    label: "Products",
    url: "/products",
  },
  {
    label: "Accessories & Devices",
    url: "/accessories-devices",
  },
  {
    label: "Strains",
    url: "/strains",
  },
  {
    label: "Trips & Tricks",
    url: "/trips-tricks",
  },
];

const Header = () => {
  return (
    <header className="bg-white flex mx-auto items-center px-4 py-2 sticky top-0 text-black z-20 min-h-[90px]">
      <div className="max-w-[1320px] grow flex mx-auto space-x-4 justify-around">
        <Link href={"/"} scroll={false} className="relative">
          <h2 className="text-xl font-black md:text-3xl lg:text-4xl font-bold whitespace-nowrap">
            moodi day
          </h2>
          <span className="rounded  px-2 bg-red-500 text-white absolute bottom-[-15px] right-[-30px] font-bold text-lg">CLONE</span>
        </Link>
        <Navbar links={LINKS} />
        <div className="searchBox">
          <div className="searchInputWrapper"></div>
        </div>
        <div className="flex items-center ml-2 ">
          <Link
            href="/budtender-network"
            className="bg-orange-600 rounded-3xl px-4 py-2"
          >
            Join Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export const dynamic = "force-dynamic";
export default Header;

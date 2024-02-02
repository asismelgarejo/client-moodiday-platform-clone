"use client";
import Link from "next/link";
import React from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import clsx from "clsx";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
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
  const [{ y }] = useWindowScroll();
  const pathname = usePathname();

  return (
    <header
      className={clsx(
        "bg-white flex mx-auto items-center px-4 py-2 sticky top-0 text-black z-20 min-h-[90px]",
        { ["shadow-md"]: (y ?? 0) > 0 }
      )}
    >
      <div className={clsx(styles.HeaderContainer, "max-w-[1320px] mx-auto")}>
        <Link
          href={"/"}
          scroll={false}
          style={{ gridArea: "logo", textAlign: "center" }}
          className="relative h-fit mr-5 logo text-xl sm:text-xl md:text-3xl lg:text-4xl"
        >
          <h2 className="font-black font-bold whitespace-nowrap">
            moodi day
          </h2>
          <span className="rounded  px-2 bg-red-500 text-white absolute max-sm:bottom-[-10px] max-sm:right-[40px] bottom-[-15px] right-[-5px] font-bold text-lg max-sm:text-xs">
            CLONE
          </span>
        </Link>
        <ul
          className="flex space-x-3 min-sm:flex-wrap  max-sm:overflow-scroll"
          style={{ gridArea: "links" }}
        >
          {LINKS.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={clsx(
                "flex px-4 items-center py-1 font-light text-black whitespace-nowrap border text-normal rounded-3xl",
                {
                  [styles.Link]: true,
                  [styles.ActiveLink]: pathname.startsWith(`${link.url}`),
                }
              )}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <CustomInput
          style={{ gridArea: "input" }}
          startIcon={
            <CustomIcon
              src="/icon-search-header.svg"
              alt="icon search"
              height={15}
              width={15}
            />
          }
          endIcon={<CustomIcon src="/cross.png" alt="icon search" />}
        />
        <div
          className="flex items-center btn w-full"
          style={{ gridArea: "btn" }}
        >
          <Link
            href="/budtender-network"
            className="bg-orange-600 rounded-3xl px-4 py-2 ml-auto"
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

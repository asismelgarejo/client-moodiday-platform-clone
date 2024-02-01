"use client";
import { LinkModel } from "@/models/Link.model";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CustomInput } from "../CustomInput";
import { CustomIcon } from "../CustomIcon";

type NavbarProps = {
  links: LinkModel[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const pathname = usePathname();
  return (
    <div className={clsx("space-x-2 flex")}>
      <ul className="flex space-x-3">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className={clsx(
              "flex px-4 items-center py-1 font-light text-black  border text-normal rounded-2xl hover:bg-lime-300 hover:border-lime-300 ",
              pathname.startsWith(`/${link.url}`)
                ? "bg-lime-300 border-lime-300 font-bold"
                : ""
            )}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <CustomInput
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
    </div>
  );
};

export default Navbar;

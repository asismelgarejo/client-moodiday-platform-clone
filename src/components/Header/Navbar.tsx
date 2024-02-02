"use client";
import { LinkModel } from "@/models/Link.model";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CustomInput } from "../CustomInput";
import { CustomIcon } from "../CustomIcon";
import styles from "./Header.module.css";

type NavbarProps = {
  links: LinkModel[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return <></>;
};

export default Navbar;

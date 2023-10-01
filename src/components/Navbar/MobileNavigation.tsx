"use client";

import { useState } from "react";
import { INavigation, NavLinks } from ".";
import { Menu } from "react-feather";
import Link from "next/link";

export default function MobileNavigation({ className }: INavigation) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 lg:hidden bg-gradient text-white px-4 py-5">
      <Menu onClick={() => setOpen((open) => !open)} />
      <div className="flex flex-row justify-between flex-wrap">
        <NavLinks open={open} />
        <ul className={`${open ? "mt-4 flex flex-col gap-3" : "hidden"}`}>
          <Link href="/login">
            <li className="hover:text-orange ease-out duration-200">Login</li>
          </Link>
          <Link href="/signup">
            <li className="hover:text-orange ease-out duration-200">Signup</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

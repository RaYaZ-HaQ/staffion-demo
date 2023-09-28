"use client";

import { useState } from "react";
import { INavigation, NavLinks } from ".";
import { Menu } from "react-feather";

export default function MobileNavigation({ className }: INavigation) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 lg:hidden bg-gradient text-white px-4 py-5">
      <Menu onClick={() => setOpen((open) => !open)} />
      <NavLinks open={open} />
    </nav>
  );
}

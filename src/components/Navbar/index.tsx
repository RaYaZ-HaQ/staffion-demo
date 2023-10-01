import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import MobileNavigation from "./MobileNavigation";

export interface INavigation {
  className?: CSSProperties;
}

export interface INavLinks {
  open?: boolean;
}

export default function Navbar() {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation />
    </>
  );
}

export function NavLinks({ open = false }: INavLinks) {
  return (
    <ul
      className={`${
        open ? "mt-4 flex flex-col gap-3" : "hidden"
      } lg:flex lg:flex-row lg:gap-10 lg:ml-24`}
    >
      <Link href="#">
        <li className="hover:text-orange ease-out duration-200">Solutions</li>
      </Link>
      <Link href="#">
        <li className="hover:text-orange ease-out duration-200">Features</li>
      </Link>
      <Link href="#pricing">
        <li className="hover:text-orange ease-out duration-200">Pricing</li>
      </Link>
      <Link href="#">
        <li className="hover:text-orange ease-out duration-200">Support</li>
      </Link>
      <Link href="#">
        <li className="hover:text-orange ease-out duration-200">About</li>
      </Link>
    </ul>
  );
}

function DesktopNavigation({ className }: INavigation) {
  return (
    <nav className="hidden lg:flex flex-row items-center px-[6.25rem] py-5 text-white leading-[1.875rem] font-medium bg-gradient">
      <Image
        src={"/assets/images/logo.svg"}
        width={150}
        height={30}
        alt="Staffion Logo"
      />
      <NavLinks />
      <ul className="ml-auto flex gap-5">
        <Link href="/login">
          <button className="hover:text-orange hover:underline ease-in-out duration-200">
            Log in
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-white hover:bg-secondary text-orange font-bold px-4 py-1 rounded-3xl shadow-sm shrink-0">
            Sign up
          </button>
        </Link>
      </ul>
    </nav>
  );
}

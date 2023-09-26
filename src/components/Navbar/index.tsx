import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center px-[6.25rem] py-5 text-white leading-[1.875rem] font-medium bg-gradient">
      <Image
        src={"/assets/images/logo.svg"}
        width={150}
        height={30}
        alt="Staffion Logo"
      />
      <ul className="flex flex-row gap-10 ml-24">
        <Link href="#">
          <li className="hover:text-orange ease-out duration-200">Solutions</li>
        </Link>
        <Link href="#">
          <li className="hover:text-orange ease-out duration-200">Features</li>
        </Link>
        <Link href="/pricing">
          <li className="hover:text-orange ease-out duration-200">Pricing</li>
        </Link>
        <Link href="#">
          <li className="hover:text-orange ease-out duration-200">Support</li>
        </Link>
        <Link href="#">
          <li className="hover:text-orange ease-out duration-200">About</li>
        </Link>
      </ul>
      <ul className="ml-auto flex gap-5">
        <button className="hover:text-orange hover:underline ease-in-out duration-200">
          Log in
        </button>
        <button className="bg-white hover:bg-secondary text-orange font-bold px-4 py-1 rounded-3xl shadow-sm shrink-0">
          Sign up
        </button>
      </ul>
    </nav>
  );
}

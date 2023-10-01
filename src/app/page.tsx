import Link from "next/link";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-r from-primary to-[#05F] lg:px-[6.25rem] text-white p-4 lg:pt-24">
        <h1 className="max-w-[52.5rem] lg:h-60 text-3xl lg:text-[4.375rem] leading-8 lg:leading-[5rem] font-bold -tracking-tighter">
          The next generation vendor management system
        </h1>
        <p className="max-w-[26.25rem] border-l border-orange pl-5 lg:pl-[3.125rem] lg:ml-[3.125rem] my-8 lg:my-[3.75rem]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="flex gap-5 pb-10 lg:pb-28">
          <Link href="/signup">
            <button className="bg-orange hover:bg-orange/90 text-white font-bold rounded-full px-4 lg:px-12 py-3">
              Sign up
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-white hover:bg-secondary text-orange font-bold rounded-full px-4 lg:px-12 py-3">
              Log in
            </button>
          </Link>
        </div>
      </section>
      <Pricing />
    </main>
  );
}

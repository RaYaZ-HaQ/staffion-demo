import Pricing from "./Pricing";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-r from-primary to-[#05F] px-[6.25rem] text-white pt-24">
        <h1 className="w-[52.5rem] h-60 text-[4.375rem] leading-[5rem] font-bold -tracking-tighter">
          The next generation vendor management system
        </h1>
        <p className="w-[26.25rem] border-l border-orange pl-[3.125rem] ml-[3.125rem] my-[3.75rem]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="flex gap-5 pb-28">
          <button className="bg-orange hover:bg-orange/90 text-white font-bold rounded-full px-12 py-3">
            Sign up
          </button>
          <button className="bg-white hover:bg-secondary text-orange font-bold rounded-full px-12 py-3">
            Log in
          </button>
        </div>
      </section>
      <Pricing />
    </main>
  );
}

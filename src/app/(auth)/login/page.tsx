import Link from "next/link";
import { RotateCcw, UserPlus } from "react-feather";

export default function LoginPage() {
  return (
    <div className="flex items-center flex-1 basis-3/5 px-12 lg:px-[6.25rem] bg-tertiary">
      <div className="w-full max-w-xl mx-auto">
        <Link
          href={"/"}
          className="text-primary hover:underline flex flex-row gap-1 items-center mb-1"
        >
          <RotateCcw className="w-5 h-5" />
          <p className={`font-semibold text-sm font-sans`}>Back to home</p>
        </Link>
        <div className="w-full">
          <h1 className="text-xl font-sans font-semibold leading-7 bg-secondary/50 px-5 py-2.5 rounded-t-md">
            Sign in
          </h1>
          <form className="px-5 py-5 bg-white flex flex-col rounded-b-md">
            <label className="text-sm leading-5">Email address</label>
            <input
              type="email"
              name="email"
              id="signin-email"
              className="border border-black border-opacity-10 p-1.5 rounded"
            />
            <label className="mt-5 text-sm leading-5">Password</label>
            <input
              type="password"
              name="password"
              id="signin-password"
              className="border border-black border-opacity-10 p-1.5 rounded"
            />
            <hr className="absolute " />
            <div className="flex flex-col gap-5 lg:flex-row justify-between items-center mt-5 flex-wrap">
              <Link href={"/signup"}>
                <span className="text-primary flex flex-row gap-1.5 items-center">
                  <UserPlus className="shrink-0" />
                  <span className="font-semibold text-sm leading-5 hover:underline">
                    Create Account
                  </span>
                </span>
              </Link>
              <button
                className="w-3/4 max-w-[10rem] lg:w-fit bg-primary/90 hover:bg-primary py-2.5 px-5 rounded-full text-white"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

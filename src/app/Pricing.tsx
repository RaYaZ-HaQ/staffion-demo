import styles from "./Pricing.module.css";
import { Check } from "react-feather";

export default function Pricing() {
  return (
    <main>
      <div className="bg-white px-[6.25rem] pt-12">
        <div className="grid grid-cols-4">
          <h1 className="font-bold text-4.5xl -tracking-wider">Pricing</h1>
          <div className="col-span-2 w-full place-self-center max-w-[35rem] flex flex-row text-primary border border-primary rounded-full overflow-hidden">
            <div className="py-5 font-semibold leading-5 flex items-center justify-center flex-1 gap-2.5">
              Monthly
            </div>
            <div className="py-5 font-semibold leading-5 flex-1 border-l text-center bg-gradient text-white">
              Yearly (Save up to 40%)
            </div>
          </div>
        </div>
        <table
          className={`${styles["pricing-table"]} mx-auto mt-[3.125rem] mb-24`}
        >
          <tbody>
            <tr>
              <td></td>
              <td className="!border-r-orange">
                <h2 className="text-xl font-semibold">Startup</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                <p>
                  <strong className="text-4.5xl font-semibold">
                    <sup className="text-2xl">$</sup> 36
                  </strong>{" "}
                  / year{" "}
                  <span className="line-through opacity-60">$60 / year</span>
                </p>
                <button className="bg-primary group transition duration-100 text-white ">
                  Get Startup Plan
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white" />
                </button>
              </td>
              <td className={`${styles["price-leader"]}`}>
                <h2 className="text-xl font-semibold">Pro</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                <p>
                  <strong className="text-4.5xl font-semibold">
                    <sup className="text-2xl">$</sup> 144
                  </strong>{" "}
                  / year{" "}
                  <span className="line-through opacity-60">$180 / year</span>
                </p>
                <button className="bg-orange group text-white ">
                  Get Pro Plan
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white" />
                </button>
              </td>
              <td>
                <h2 className="text-xl font-semibold">Enterprise</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                <p>
                  <strong className="text-4.5xl font-semibold">
                    <sup className="text-2xl">$</sup> 240
                  </strong>{" "}
                  / year{" "}
                  <span className="line-through opacity-60">$300 / year</span>
                </p>
                <button className="bg-primary group transition duration-100 text-white ">
                  Get Enterprise Plan
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white" />
                </button>
              </td>
            </tr>
            <tr>
              <td>Candidates per job</td>
              <td className="!border-r-orange">10 simultaneous jobs</td>
              <td className={`${styles["price-leader"]}`}>
                25 simultaneous jobs
              </td>
              <td>Unlimited jobs</td>
            </tr>
            <tr>
              <td>Candidates per job</td>
              <td className="!border-r-orange">100 candidates</td>
              <td className={`${styles["price-leader"]}`}>500 candidates</td>
              <td>Unlimited candidates</td>
            </tr>
            <tr>
              <td>AI video models</td>
              <td className="!border-r-orange">5 male, 5 female</td>
              <td className={`${styles["price-leader"]}`}>
                10 male, 10 female
              </td>
              <td>50 male, 50 female</td>
            </tr>
            <tr>
              <td>Lorem ipsum</td>
              <td className="!border-r-orange">
                <Check className="text-primary" />
              </td>
              <td className={`${styles["price-leader"]}`}>
                <Check className="text-orange" />
              </td>
              <td>
                <Check className="text-primary" />
              </td>
            </tr>
            <tr>
              <td>Dolor sit amet</td>
              <td className="!border-r-orange">
                <Check className="text-primary" />
              </td>
              <td className={`${styles["price-leader"]}`}>
                <Check className="text-orange" />
              </td>
              <td>
                <Check className="text-primary" />
              </td>
            </tr>
            <tr>
              <td>Consectetur adipisicing</td>
              <td className="!border-r-orange"></td>
              <td className={`${styles["price-leader"]}`}></td>
              <td>
                <Check className="text-primary" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

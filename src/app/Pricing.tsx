"use client";

import { useState, Dispatch, SetStateAction } from "react";
import styles from "./Pricing.module.css";
import { Check } from "react-feather";

type PlanDuration = "monthly" | "yearly";

type Plan = {
  name: string;
  description: string;
  pricePerMonth: number;
  pricePerYear: number;
  previousPricePerMonth: number;
  previousPricePerYear: number;
  jobs: number | "unlimited";
  candidatesPerJob: number | "unlimited";
  videoModelsMale: number;
  videoModelsFemale: number;
  loremIpsum: boolean;
  dolorSitAmet: boolean;
  consecteturAdipisicing: boolean;
  bestOffer?: boolean;
};

interface IPlanSelection {
  selectedPlanDuration: PlanDuration;
  setSelectedPlanDuration: Dispatch<SetStateAction<PlanDuration>>;
}

interface IPriceCard {
  plan: Plan;
  planDuration: PlanDuration;
}

export default function Pricing() {
  const [selectedPlanDuration, setSelectedPlanDuration] =
    useState<PlanDuration>("yearly");

  return (
    <div id="pricing" className="bg-white px-4 lg:px-[6.25rem] pt-12">
      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-4">
        <h1 className="font-bold text-4.5xl text-center lg:text-start place-self-center -tracking-wider">
          Pricing
        </h1>
        <PlanSelection
          selectedPlanDuration={selectedPlanDuration}
          setSelectedPlanDuration={setSelectedPlanDuration}
        />
      </div>
      <PricingTable planDuration={selectedPlanDuration} />
      {plans.map((plan) => (
        <PriceCard plan={plan} planDuration={selectedPlanDuration} />
      ))}
    </div>
  );
}

function PlanSelection({
  selectedPlanDuration,
  setSelectedPlanDuration,
}: IPlanSelection) {
  return (
    <div className="col-span-2 w-full place-self-center max-w-[35rem] flex flex-row text-primary border border-primary rounded-full overflow-hidden">
      <div
        className={`py-5 font-semibold leading-5 flex text-primary items-center justify-center flex-1 gap-2.5 hover:cursor-pointer ${
          selectedPlanDuration === "monthly" && "bg-gradient text-white"
        }`}
        onClick={() => setSelectedPlanDuration("monthly")}
      >
        Monthly
      </div>
      <div
        className={`py-5 font-semibold leading-5 flex-1 border-l text-center hover:cursor-pointer ${
          selectedPlanDuration === "yearly" && "bg-gradient text-white"
        } `}
        onClick={() => setSelectedPlanDuration("yearly")}
      >
        Yearly (Save up to 40%)
      </div>
    </div>
  );
}

const plans: Readonly<Plan[]> = [
  {
    name: "Startup",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    pricePerMonth: 36,
    pricePerYear: 36,
    previousPricePerMonth: 60,
    previousPricePerYear: 60,
    jobs: 10,
    candidatesPerJob: 100,
    videoModelsMale: 5,
    videoModelsFemale: 5,
    loremIpsum: true,
    dolorSitAmet: true,
    consecteturAdipisicing: false,
  },
  {
    name: "Pro",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    pricePerMonth: 144,
    pricePerYear: 144,
    previousPricePerMonth: 180,
    previousPricePerYear: 180,
    jobs: 25,
    candidatesPerJob: 500,
    videoModelsMale: 10,
    videoModelsFemale: 10,
    loremIpsum: true,
    dolorSitAmet: true,
    consecteturAdipisicing: false,
    bestOffer: true,
  },
  {
    name: "Enterprise",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    pricePerMonth: 240,
    pricePerYear: 240,
    previousPricePerMonth: 360,
    previousPricePerYear: 360,
    jobs: "unlimited",
    candidatesPerJob: "unlimited",
    videoModelsMale: 50,
    videoModelsFemale: 50,
    loremIpsum: true,
    dolorSitAmet: true,
    consecteturAdipisicing: true,
  },
] as const;

function PricingTable({ planDuration }: { planDuration: PlanDuration }) {
  return (
    <table
      className={`hidden lg:table ${styles["pricing-table"]} mx-auto mt-[3.125rem] mb-24`}
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
              </strong>
              / {planDuration === "monthly" ? "month" : "year"}
              <span className="line-through opacity-60">
                $60 / {planDuration === "monthly" ? "month" : "year"}
              </span>
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
              </strong>
              / {planDuration === "monthly" ? "month" : "year"}
              <span className="line-through opacity-60">
                $180 / {planDuration === "monthly" ? "month" : "year"}
              </span>
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
              </strong>
              / {planDuration === "monthly" ? "month" : "year"}{" "}
              <span className="line-through opacity-60">
                $300 / {planDuration === "monthly" ? "month" : "year"}
              </span>
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
          <td className={`${styles["price-leader"]}`}>25 simultaneous jobs</td>
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
          <td className={`${styles["price-leader"]}`}>10 male, 10 female</td>
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
  );
}

function PriceCard({ plan, planDuration }: IPriceCard) {
  return (
    <table
      className={`border mt-4 mx-auto ${
        plan.bestOffer ? "border-orange" : "border-primary border-opacity-20"
      }`}
    >
      <tbody className="flex flex-col gap-3 items-center p-5">
        <tr>
          <td className="flex flex-col text-center">
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <p>
              <strong className="text-4.5xl font-semibold">
                <sup className="text-2xl">$</sup>{" "}
                {planDuration === "monthly"
                  ? plan.pricePerMonth
                  : plan.pricePerYear}
              </strong>
              / {planDuration === "monthly" ? "month" : "year"}
              <span className="line-through opacity-60 ml-3">
                $
                {planDuration === "monthly"
                  ? plan.previousPricePerMonth
                  : plan.previousPricePerYear}
                / {planDuration === "monthly" ? "month" : "year"}
              </span>
            </p>
            <button
              className={`px-7 py-3 rounded-full ${
                plan.bestOffer ? "bg-orange" : "bg-primary"
              } group transition duration-100 text-white max-w-fit mx-auto`}
            >
              Get {plan.name} Plan
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white" />
            </button>
          </td>
        </tr>
        <tr>
          <td className="text-center">
            {plan.candidatesPerJob === "unlimited" ? "Unlimited" : plan.jobs}{" "}
            Jobs
          </td>
        </tr>
        <tr>
          <td className="text-center">
            {plan.candidatesPerJob === "unlimited"
              ? "Unlimited"
              : plan.candidatesPerJob}{" "}
            Candidates per job
          </td>
        </tr>
        <tr>
          <td className="text-center">
            {plan.videoModelsMale} male, {plan.videoModelsFemale} female AI
            video models
          </td>
        </tr>
        <tr>
          {plan.loremIpsum && <td className="text-center">Lorem ipsum</td>}
        </tr>
        <tr>
          {plan.dolorSitAmet && <td className="text-center">Dolor sit amet</td>}
        </tr>
        <tr>
          {plan.consecteturAdipisicing && (
            <td className="text-center">Consectetur adipisicing</td>
          )}
        </tr>
      </tbody>
    </table>
  );
}

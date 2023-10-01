import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col lg:flex-row h-screen lg:absolute lg:top-0 lg:-z-10">
      <div className="bg-gradient p-10 flex-1 basis-2/5 order-1 lg:order-first grid grid-cols-1 grid-rows-2">
        <Image
          src={"/assets/images/logo.svg"}
          width={150}
          height={30}
          alt="Staffion Logo"
          className="mx-auto lg:w-[22rem] place-self-center row-span-2"
        />
        <Carousel
          className="py-4 place-self-end"
          slides={[
            {
              image: {
                href: "/assets/images/testimonial_avatar.png",
                className: "rounded-full",
                height: 50,
                width: 50,
              },
              quotedText: {
                text: "“A very important part of our day to day operations is to manage the efficiency of our ever-growing supply and delivery fleets. With FleetConnect doing the heavy lifting of monitoring the fleets, we can do what is important to us, that is to just make our products and sell them.”",
                citation: "Joshua Cramwell, CEO, Coders In High Places",
              },
            },
            {
              image: {
                href: "",
                height: 50,
                width: 50,
              },
              quotedText: {
                text: "“A very important part of our day to day operations is to manage the efficiency of our ever-growing supply and delivery fleets. With FleetConnect doing the heavy lifting of monitoring the fleets, we can do what is important to us, that is to just make our products and sell them.”",
                citation: "Mark Cramwell, CEO, Coders In High Places",
              },
            },
          ]}
        />
      </div>
      {children}
    </section>
  );
}

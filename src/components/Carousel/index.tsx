"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export interface Slide {
  image?: {
    href: string;
    width?: number;
    height?: number;
    className?: string;
  };
  text?: string;
  alt?: string;
  quotedText?: {
    text: string;
    citation: string;
  };
}

export interface ICarousel {
  slides: Slide[];
  className?: string;
  fallbackImage?: string | null; // if there is an error loading an image, this image should be shown
}

export default function Carousel({ className = "", slides }: ICarousel) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <CarouselContainer className={className}>
      {slides.map((slide, index) => (
        <CarouselView
          setCurrentSlide={setCurrentSlide}
          totalSlides={slides.length}
          className={`${
            currentSlide != index ? "hidden" : "block"
          } text-white `}
          key={index}
        >
          <div className="flex flex-col gap-5">
            {slide.image && (
              <Image
                src={slide.image.href}
                width={slide.image.width ?? 0}
                height={slide.image.height ?? 0}
                className={
                  slide.image.className + ` ${!slide.image.href && "invisible"}`
                }
                alt={slide.alt ?? ""}
              />
            )}
            {slide.text && <p className="w-full">{slide.text}</p>}
            {slide.quotedText && (
              <blockquote className="w-full">
                <p>{slide.quotedText.text}</p>
                <footer>
                  <strong className="text-sm bold leading-5">
                    {slide.quotedText.citation}
                  </strong>
                </footer>
              </blockquote>
            )}
          </div>
        </CarouselView>
      ))}
    </CarouselContainer>
  );
}

function CarouselContainer({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return <div className={className}>{children}</div>;
}

function CarouselView({
  children,
  className,
  setCurrentSlide,
  totalSlides,
}: {
  children: React.ReactNode;
  className?: string;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
  totalSlides: number;
}) {
  return (
    <div className={`${className} flex flex-row max-w-full`}>
      <ChevronLeft
        onClick={() =>
          setCurrentSlide(
            (currentIndex) => (currentIndex + totalSlides - 1) % totalSlides
          )
        }
        className="self-center flex-shrink-0 mr-2 hover:bg-secondary/75 hover:cursor-pointer rounded-full"
      />
      {children}
      <ChevronRight
        onClick={() =>
          setCurrentSlide(
            (currentIndex) => (currentIndex + totalSlides + 1) % totalSlides
          )
        }
        className="self-center flex-shrink-0 ml-2 hover:bg-secondary/75 hover:cursor-pointer rounded-full"
      />
    </div>
  );
}

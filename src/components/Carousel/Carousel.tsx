"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { useMediaQuery } from "@uidotdev/usehooks";

import { v4 as uuidv4 } from "uuid";
type CarouselProps = {
  children: React.ReactNode;
};

const ArrowControl: React.FC<{
  onClick(): void;
  prev?: boolean;
  id?: string;
}> = ({ onClick, id, prev = true }) => {
  const className = clsx(
    "slick-arrow absolute z-10 top-0 bottom-0 block h-fit w-fit m-auto",
    {
      ["left-[-15px] rotate-180"]: prev,
      ["right-[-15px]"]: !prev,
    }
  );

  return (
    <button
      type="button"
      // id={`${prev ? "prev" : "right"}-${id}`}
      className={className}
      style={
        {
          // display: "block",
          // opacity: 1,
          // cursor: "pointer",
          // marginLeft: "0px",
          // marginRight: "5px",
        }
      }
      onClick={onClick}
    >
      <Image
        alt="next arrow"
        loading="lazy"
        width="30"
        height="30"
        decoding="async"
        data-nimg="1"
        src="/arrow-right.svg"
      />
    </button>
  );
};

const useSlides = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 400px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );

  switch (true) {
    case isSmallDevice:
      return { slidesToShow: 1, slidesToScroll: 1 };
    case isMediumDevice:
      return { slidesToShow: 4, slidesToScroll: 4 };
    case isLargeDevice:
      return { slidesToShow: 5, slidesToScroll: 5 };
    case isExtraLargeDevice:
      return { slidesToShow: 5, slidesToScroll: 5 };
    default:
      return { slidesToShow: 5, slidesToScroll: 5 };
  }
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const { slidesToShow, slidesToScroll } = useSlides();
  const slider = React.useRef<Slider>(null);
  const arrowId = useRef<string>(uuidv4());
  const settings: Settings = {
    infinite: false,
    speed: 500,
    centerMode: false,
    initialSlide: 0,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    nextArrow: (
      <ArrowControl
        id={arrowId.current}
        prev={false}
        onClick={() => slider?.current?.slickNext()}
      />
    ),
    prevArrow: (
      <ArrowControl
        id={arrowId.current}
        onClick={() => slider?.current?.slickPrev()}
      />
    ),
    beforeChange(currentSlide: number, nextSlide: number) {
      // const arrowPrev = document.getElementById(`prev-${arrowId.current}`);
      // console.log("arrowPrev", arrowPrev);
      // if (!arrowPrev) return;
      // console.log("nextSlide", nextSlide);
      // if (nextSlide === 0) arrowPrev.classList.add("hidden");
      // else arrowPrev.classList.remove("hidden");
    },
  };

  return (
    <Slider {...settings} ref={slider}>
      {children}
    </Slider>
  );
};
export default Carousel;

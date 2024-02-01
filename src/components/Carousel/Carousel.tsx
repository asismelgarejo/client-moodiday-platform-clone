"use client";
import React, { Component } from "react";
import Slider from "react-slick";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return <Slider {...settings}>{children}</Slider>;
};
export default Carousel;

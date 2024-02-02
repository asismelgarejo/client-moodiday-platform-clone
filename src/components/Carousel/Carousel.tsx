"use client";
import React, { Component } from "react";
import Slider from "react-slick";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const settings = {
    infinite: false,
    arrows: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return <Slider {...settings}>{children}</Slider>;
};
export default Carousel;

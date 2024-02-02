"use client";
import React, { Component } from "react";
import { Carousel } from "../Carousel";
import { ProductModel } from "@/models/Product.model";
import { ProductCard } from "../ProductCard";

type CardListProps = {
  title: string;
  cards: ProductModel[];
};

const CardList: React.FC<CardListProps> = ({ title, cards }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-black text-black">{title}</h3>
      <div className="px-5">
      <Carousel>
        {cards.map((c) => (
          <span className="px-2" key={c.id}>
            <ProductCard data={c} />
          </span>
        ))}
      </Carousel>
      </div>
    </div>
  );
};
export default CardList;

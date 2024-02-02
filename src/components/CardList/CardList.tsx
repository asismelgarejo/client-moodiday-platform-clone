"use client";
import React, { Component, useState } from "react";
import { Carousel } from "../Carousel";
import { ProductModel } from "@/models/Product.model";
import { ProductCard } from "../ProductCard";
import { CustomDialog } from "../CustomDialog";
import { ProductReviewCard } from "../ProductReviewCard";

type CardListProps = {
  title: string;
  cards: ProductModel[];
};

const CardList: React.FC<CardListProps> = ({ title, cards }) => {
  const [productData, setProductData] = useState<ProductModel | null>(null);

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-black text-black">{title}</h3>
      <div className="px-5">
        <Carousel>
          {cards.map((c) => (
            <span className="px-2" key={c.id}>
              <ProductCard
                data={c}
                openModal={(data) => {
                  window.history.pushState(
                    null,
                    "",
                    `/video/product-review/${data.id}`
                  );
                  setProductData(data);
                }}
              />
            </span>
          ))}
        </Carousel>
      </div>
      {productData && (
        <CustomDialog
          close={() => {
            window.history.pushState(
              null,
              "",
              `/home`
            );
            setProductData(null);
          }}
        >
          <ProductReviewCard data={productData} />
        </CustomDialog>
      )}
    </div>
  );
};
export default CardList;

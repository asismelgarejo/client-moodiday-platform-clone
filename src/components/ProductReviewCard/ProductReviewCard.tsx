import React from "react";
import { ProductModel } from "@/models/Product.model";
import styles from "./ProductReviewCard.module.css";
import { getOpinion, getOpinionColor } from "@/utilities/getOpinion";
import VidePlayer from "./VidePlayer";
import Link from "next/link";
import clsx from "clsx";

type ProductReviewCardProps = {
  data: ProductModel;
};
const ProductReviewCard: React.FC<ProductReviewCardProps> = ({ data }) => {
  return (
    <article>
      <h1 style={{ display: "none" }}>{data.productName}</h1>
      <div className={clsx(styles.container, "grid")}>
        <section className="player-wrapper">
          <VidePlayer data={data} />
        </section>
        <section className="p-8 space-y-8">
          <div className="flex justify-between w-full items-center">
            <Link
              href="/search/Loved"
              className={clsx(
                getOpinionColor(data.opinion),
                "bg-lime-500 hover:font-black flex justify-around items-center min-w-[100px] rounded-lg px-2 py-1 text-sm font-light text-black h-fit"
              )}
            >
              {getOpinion(data.opinion)}
            </Link>
          </div>
          <div className="text-black text-sm space-y-4">
            <p>
              <strong>Product Name</strong>:{" "}
              {data.productName}
            </p>
            <p>
              <strong>Brand Name</strong>: {data.brand}
            </p>
            <p>
              <strong>Category</strong>: {data.category}
            </p>
            <p>
              <strong>Moodi Day Creator Credits</strong>: {data.creator}
            </p>
            <p>
              <em>{data.productDescription}</em>
            </p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default ProductReviewCard;

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
        <section className="p-4">
          <div className="flex justify-between w-full items-center">
            <Link
              href="/search/Loved"
              className={clsx(
                getOpinionColor(data.opinion),
                "hover:font-black flex justify-around items-center w-[100px] rounded-lg px-2 py-1 text-sm font-light text-black h-fit"
              )}
            >
              {getOpinion(data.opinion)}
            </Link>
            <Link href="/" scroll={false} className={clsx(styles.closeBtn, "text-black bg-slate-200   transition-transform duration-300 ease-in-out hover:bg-slate-300")}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
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

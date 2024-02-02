import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { ProductModel } from "@/models/Product.model";
import { getRating, getRatingColor } from "@/utilities/getRating";
import clsx from "clsx";
// import { CustomBadge } from "../CustomBadge";

type ProductCardProps = { data: ProductModel };
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <article className="w-full grid space-y-4">
      <div className="rounded-2xl overflow-hidden w-full h-72 ">
        <div className="w-full h-full relative">
          <div className="w-full h-full relative">
            <Image
              alt="PLUGplay Exotics Vape Cartridge"
              width="190"
              height="300"
              decoding="async"
              data-nimg="1"
              src={data.productImage}
              className="w-full h-full object-cover hover:transform hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <Link
              href={`/video/product-review/${data.id}`}
              className={clsx(
                styles.playbackDurationContainer,
                "absolute bottom-2 right-2 flex rounded-xl px-3 py-2 space-x-1"
              )}
            >
              <Image
                alt="play"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                src="/play-icon.svg"
                style={{
                  color: "transparent",
                }}
              />
              <span className="text-white">{data.videoDuration}</span>
            </Link>
          </div>
          <Link
            href="/search/Loved"
            className={clsx(
              getRatingColor(data.rating),
              "bg-lime-500 rounded px-2 absolute top-2 right-2 text-sm font-light text-black"
            )}
          >
            {getRating(data.rating)}
          </Link>
        </div>
      </div>
      <div className="">
        <h4 className="text-xs font-light">{data.productName}</h4>
      </div>
    </article>
  );
};
export default ProductCard;

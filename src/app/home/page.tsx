import { CardList } from "@/components/CardList";
import { ProductModel } from "@/models/Product.model";
import { API_URL } from "@/utilities/constants";
import Image from "next/image";
import Rudder from "../Rudder";

const Home = async () => {
  const products = await getProducts();
  return (
    <div className="max-w-[1320px] text-black mx-auto">
      <Rudder />
      <div className="p-6 space-y-10">
        <div className="flex items-center w-full justify-center flex-col space-y-4">
          <h1 className="text-5xl font-black">Try More Plants</h1>
          <h2 className="text-3xl font-light">
            Share honest reviews about cannabis brands, earn rewards
          </h2>
          <br />
          <Image
            alt="hero image"
            loading="eager"
            width="1260"
            height="200"
            decoding="async"
            data-nimg="1"
            className="rounded-3xl"
            src="https://moodiday.nyc3.cdn.digitaloceanspaces.com/moodiday/Home/Moodi%20Day%20HB.svg"
          />
        </div>
        <section className="px-12">
          <CardList cards={products} title={"Trending Reviews"} />
        </section>
        <section className="px-12">
          <CardList cards={products} title={"Popular strains"} />
        </section>
        <section className="px-12">
          <CardList cards={products} title={"Concentrates 101"} />
        </section>
      </div>
    </div>
  );
};

export default Home;
const getProducts = async (): Promise<ProductModel[]> => {
  const response = await fetch(API_URL + `/products`);
  return response.json();
};

import { CustomDialog } from "@/components/CustomDialog";
import { ProductReviewCard } from "@/components/ProductReviewCard";
import { ProductModel } from "@/models/Product.model";
import { API_URL } from "@/utilities/constants";

type pageProps = {
  params: {
    ["section"]: string;
  };
};

const page: React.FC<pageProps> = async ({ params }) => {
  const productData = await getProduct(params["section"]);
  console.log(">productData", productData);
  
  return (
    <CustomDialog>
      <ProductReviewCard data={productData} />
    </CustomDialog>
  );
};

export default page;

const getProduct = async (id: string): Promise<ProductModel> => {
  const response = await fetch(API_URL + `/products/${id}`);
  return response.json();
};

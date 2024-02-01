import { CustomDialog } from "@/components/CustomDialog";
import { ProductModel } from "@/models/Product.model";
import { API_URL } from "@/utilities/constants";

const page = async ({}) => {
  return (
    <CustomDialog>
      <h2>Loading...</h2>
    </CustomDialog>
  );
};

export default page;

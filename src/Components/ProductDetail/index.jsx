import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import "./style.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border-orange-800 rounded-lg bg-orange-200`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="text-xl font-medium">Detail</h2>
        <div onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;

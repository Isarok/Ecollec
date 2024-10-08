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
      } checkout-side-menu flex-col fixed right-0 border-orange-800 rounded-lg bg-orange-200`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="text-xl font-medium">Detail</h2>
        <div onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <figure className="w-full h-2/5  ">
        <img
          className="w-4/5 h-5/6 rounded-lg m-auto border border-orange-800
                    lg:w-90% lg:h-full lg:m-auto"
          src={context.productShow.image}
          alt={context.productShow.title}
        />
      </figure>
      <p className="flex flex-col p-4 ">
        <span className="font-medium text-2xl mb-2">
          ${context.productShow.price}
        </span>
        <span className="font-medium text-2md">
          {context.productShow.title}
        </span>
        <span className="font-light text-sm">
          {context.productShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;

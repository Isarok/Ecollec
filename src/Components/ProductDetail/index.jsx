import { XMarkIcon } from "@heroicons/react/24/solid";
import "./style.css";

const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border-orange-800 rounded-lg bg-orange-200">
      <div className="flex justify-between items-center p-6">
        <h2 className="text-xl font-medium">Detail</h2>
        <div>
          <XMarkIcon className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;

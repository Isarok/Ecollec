import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import Layaout from "../../Components/Layaout";
import OrderCard from "../../Components/OrderCard";
const MyOrder = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layaout>
      <div className="flex items-center justify-center relative w-80 mb-8">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="w-6 h-6 cursor-pointer" />
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layaout>
  );
};

export default MyOrder;

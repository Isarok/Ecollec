import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layaout from "../../Components/Layaout";
import OrderCard from "../../Components/OrderCard";
const MyOrder = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layaout>
      MyOrder
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

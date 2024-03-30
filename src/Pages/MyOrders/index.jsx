import { useContext } from "react";
import { Link } from "react-router-dom";
import Layaout from "../../Components/Layaout";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";
const MyOrders = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layaout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1>MyOrders</h1>
      </div>

      {context.order?.map((order, index) => {
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>;
      })}
      <OrdersCard />
    </Layaout>
  );
};

export default MyOrders;

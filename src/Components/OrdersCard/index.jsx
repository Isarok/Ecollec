import { ChevronRightIcon } from "@heroicons/react/24/solid";
const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-purple-700 rounded-lg p-4 w-80 ">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01.02.24</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-bold text-2xl">${totalPrice} </span>
          <ChevronRightIcon className="w-6 h-6 cursor-pointer"></ChevronRightIcon>
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;

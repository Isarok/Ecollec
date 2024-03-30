const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-4 border border-purple-700">
      <p>
        <span>=1.02.24</span>
        <span>${totalPrice}</span>
        <span>{totalProducts}</span>
      </p>
    </div>
  );
};

export default OrdersCard;

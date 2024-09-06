import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
  const { id, title, image, price, handleDelete } = props;
  let renderXmarkIcon;
  if (handleDelete) {
    renderXmarkIcon = (
      <XMarkIcon
        onClick={() => handleDelete(id)}
        className="w-6 h-6 cursor-pointer"
      ></XMarkIcon>
    );
  }

  return (
    <div className="flex justify-between items-center mb-4 ">
      <div className="flex items-center gap-2">
        <figure className="w-12 h-12">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        {renderXmarkIcon}
      </div>
    </div>
  );
};

export default OrderCard;

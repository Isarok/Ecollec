import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import "./style.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border-orange-800 rounded-lg bg-orange-200`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="text-xl font-medium">My Order</h2>
        <div>
          <XMarkIcon
            className="w-6 h-6 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;

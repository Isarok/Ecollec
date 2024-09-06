import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import img from "../../../public/EcollecN.svg";
const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-orange-600">
      <ul className="flex gap-4 items-center">
      <li className="font-bold text-lg">
          <NavLink to="/">
            <img 
            src={img}
            alt="logo"
            className="max-w-[200px] max-h-[40px] "/>
            </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory("")}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women's clothing"
            onClick={() => context.setSearchByCategory("women's clothing")}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            women's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men's clothing"
            onClick={() => context.setSearchByCategory("men's clothing")}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined
          }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            onClick={() => context.setSearchByCategory("jewelery")}
            className={({ isActive }) =>
             isActive ? activeStyle : undefined
            }>
            jewelery
          </NavLink>
        </li>
       {/*  <li>
          <NavLink
            to="/toys"
            onClick={() => context.setSearchByCategory("toys")}
            className={({ isActive }) => isActive ? activeStyle : undefined
          }>
           Toys
          </NavLink>
        </li> */}
       
       
      </ul>
      <ul className="flex gap-4 items-center">
        <li className="text-orange-200">YetLi@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign in
          </NavLink>
        </li>
        <li className="flex items-center gap-2">
          <ShoppingCartIcon className="w-6 h-6 text-black cursor-pointer" />
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

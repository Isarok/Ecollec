import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import img from "../../../public/EcollecN.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import icons for menu

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la apertura del menú

  const activeStyle = "underline underline-offset-4";

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-orange-600
                    ">
      {/* Icono e imagen a la derecha */}
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <img src={img} alt="logo" className="max-w-auto  max-h-auto lg:hidden" />
        </NavLink>

        {/* Icono para abrir el menú */}
        <Bars3Icon
          className="w-16 h-12 ml-40 text-gray-200 cursor-pointer md:ml-[550px] lg:hidden" // Visible solo en pantallas pequeñas
          onClick={toggleMenu} // Toggle del menú
        />
        
      </div>

      {/* Menú de navegación */}
      <ul
        className={`fixed top-0 right-0 w-full h-50 opacity-95 bg-orange-600 py-4 px-3 z-20 grid grid-cols-2 justify-items-center items-center gap-4 transition-transform duration-900
                  mx-auto
                 md:px-2 md:py-5
                  lg:bg-transparent lg:transform-none lg:flex lg:flex-row lg:justify-start lg:max-w-auto lg:py-2
                  xl:max-w-auto 
                  2xl:max-w-auto ${
          isMenuOpen ? "translate-y-0" : "translate-x-full"
        }`}
      >
        <li>
        <NavLink to="/">
          <img src={img} alt="logo" className="max-w-auto  max-h-auto mr-[18px]  md:mr-52 lg:mr-0 " />
        </NavLink>
        </li>
        <li className="lg:hidden  ">
          {/* Icono para cerrar el menú */}
          <XMarkIcon className="w-16 h-12 ml-20  text-gray-200 cursor-pointer md:ml-[23vh]" onClick={toggleMenu} />
          
        </li>
        
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory("")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li className="text-orange-200 lg:hidden">YetLi@gmail.com</li>
        <li>
          <NavLink
            to="/women's clothing"
            onClick={() => context.setSearchByCategory("women's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Women's clothing
          </NavLink>
        </li>
        <li className="lg:hidden">
          <NavLink
           to="/my-orders"
           className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men's clothing"
            onClick={() => context.setSearchByCategory("men's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            onClick={() => context.setSearchByCategory("jewelery")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        {/* Aquí puedes agregar más enlaces si es necesario */}
        
        
        <li className="lg:hidden">
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            My Account
          </NavLink>
        </li>
        <li className="lg:hidden">
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            Sign in
          </NavLink>
        </li>
        <li className="flex items-center gap-2 lg:hidden">
          <ShoppingCartIcon className="w-6 h-6 text-black cursor-pointer" />
            <div>{context.cartProducts.length}</div>
       </li>
      </ul>

      {/* Menú de usuario a la derecha */}
      <ul className="hidden lg:flex gap-4 items-center">
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
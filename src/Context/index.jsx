import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Product Detail · Increment Counter
  const [count, setCount] = useState(0);

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Prduct Detail · Show product
  const [productShow, setProductShow] = useState({});

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart · Order
  const [order, setOrder] = useState([]);

  // Get product
  const [items, setItems] = useState(null);

  // Get product by title
  const [serchByTitle, setSearchByTitle] = useState(null);
  console.log("serchByTitle", serchByTitle);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products").then((response) =>
      response.json().then((data) => setItems(data))
    );
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productShow,
        setProductShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        serchByTitle,
        setSearchByTitle,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

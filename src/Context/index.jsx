import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Product Detail · Increment Counter
  const [count, setCount] = useState(0);

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Prduct Detail · Show product
  const [productShow, setProductShow] = useState({});

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productShow,
        setProductShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

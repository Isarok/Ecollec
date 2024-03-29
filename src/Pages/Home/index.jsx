import { useState, useEffect } from "react";
import Layaout from "../../Components/Layaout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products").then((response) =>
      response.json().then((data) => setItems(data))
    );
  }, []);

  return (
    <Layaout>
      Home
      <div className="grid grid-cols-4 w-full max-w-screen-lg gap-4">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layaout>
  );
};

export default Home;

import { useContext } from "react";
import Layaout from "../../Components/Layaout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
const Home = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layaout>
      <div className="flex items-center justify-center relative w-full mb-4">
        <h1 className="text-xl font-medium mb-4">
          Dive into a Treasure Trove of Unique Finds!
        </h1>
      </div>
      <input
        type="text"
        placeholder="Find you tresor..."
        className="rounded-lg border border-orange-500 w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid grid-cols-4 w-full max-w-screen-lg gap-4">
        {context.items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layaout>
  );
};

export default Home;

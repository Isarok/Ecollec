import { useContext } from "react";
import Layaout from "../../Components/Layaout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

const Home = () => {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    // Si hay productos filtrados (por título, categoría o ambos)
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } 
    // Si hay búsqueda pero no se encontraron productos
    else if (context.searchByTitle || context.searchByCategory) {
      return <div>This treasure is not found</div>;
    } 
    // Si no hay filtros aplicados, muestra todos los productos
    else {
      return context.items?.map((item) => <Card key={item.id} data={item} />);
    }
  };

  return (
    <Layaout>
      <div className="flex justify-center items-center relative w-full mb-2">
        <h1 className="text-xl font-medium m-4">
          Dive into a Treasure Trove of Unique Finds!
        </h1>
      </div>

      {/* Input para buscar por título */}
      <input
        type="text"
        placeholder="Find your treasure..."
        className="rounded-lg border border-orange-500 w-60 p-2 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />

      {/* Mostrar productos */}
      <div className="grid grid-cols-1 w-full max-w-screen-lg gap-8
                      md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 justify-items-center">
        {renderView()}
      </div>

      {/* Detalles del producto */}
      <ProductDetail />
    </Layaout>
  );
};

export default Home;

import CardProduct from "../utils/CardProduct";
import ProductCategory from "../utils/ProductCategory";
import products from "../utils/products";

const Products = () => {
  return (
    <>
      <div className="m-2">
        <div className="carousel w-full space-x-2 my-4">
          <ProductCategory category="Populer" />
          <ProductCategory category="Promo" />
          <ProductCategory category="Obat" />
          <ProductCategory category="Vitamin" />
          <ProductCategory category="Sirup" />
          <ProductCategory category="Jamu" />
        </div>
        <div className="flex"></div>
        <h1 className="font-bold">Produk populer</h1>
        <div className="grid grid-cols-2 gap-2  my-2">
          {products.map((product) => (
            <div key={product.id}>
              <CardProduct
                to={`/products/${product.id}`}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;

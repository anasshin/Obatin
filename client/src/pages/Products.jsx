import CardProduct from "../utils/CardProduct";
import products from "../utils/products";

const Products = () => {
  return (
    <>
      <div className="mx-auto">
        <h1 className="text-4xl font-bold text-center mt-10">Products</h1>

        <div className="grid grid-cols-2 gap-2 mx-4 my-2">
          {products.map((product) => (
            <div key={product.id}>
              <CardProduct
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

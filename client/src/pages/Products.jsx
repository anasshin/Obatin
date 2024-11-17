import CardProduct from "../utils/CardProduct";
import data from "../utils/data";

const Products = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mt-10">Products</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <div key={item.id}>
            <CardProduct
              src={item.image}
              title={item.title}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;

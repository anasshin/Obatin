// import { useParams } from "react-router-dom";
// import { useProduct } from "../hooks/useProduct"; // Adjust the path as necessary
import CardProduct from "../utils/CardProduct";
import data from "../utils/data";

const Product = () => {
  //   const { id } = useParams();
  //   const { data: product, error, isLoading } = useProduct(id);

  //   if (isLoading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item) => (
        <div key={item.id}>
          <CardProduct src={item.image} title={item.title} />
        </div>
      ))}
    </div>
  );
};
export default Product;

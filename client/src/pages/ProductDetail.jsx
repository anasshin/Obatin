import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import products from "../utils/products";
import back from "../assets/icons/left_fill.svg";

const ProductDetail = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += qty;
    } else {
      cart.push({ ...product, quantity: qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const price = () => {
    return qty * product.price;
  };

  const product = products.find((item) => item.id.toString() === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="flex flex-col m-2">
        <Link
          to="/products"
          className="absolute btn btn-outline btn-circle btn-base"
        >
          <img src={back} className="w-8 h-8" />
        </Link>
        <img src={product.image} className="h-64 w-auto object-contain " />
        <div className="m-2">
          <h1 className="text-2xl font-bold my-2">{product.name}</h1>

          <p className="text-md">{product.description}</p>
        </div>
      </div>
      {/* NavBottom */}
      <div className="fixed bottom-0 w-full max-w-[475px] mx-auto p-2 ">
        <div className="grid grid-rows-2 items-center w-full ">
          <div className="grid grid-cols-2">
            <div className="join join-horizontal p-2">
              <button
                onClick={() => {
                  if (qty > 1) {
                    setQty(qty - 1);
                  }
                }}
                className="btn btn-outline btn-neutral join-item font-bold"
              >
                -
              </button>
              <div className="join-item btn btn-outline btn-neutral w-12">
                {qty}
              </div>
              <button
                onClick={() => {
                  setQty(qty + 1);
                }}
                className="btn btn-outline btn-neutral join-item"
              >
                +
              </button>
            </div>
            <div className="flex justify-end font-bold text-2xl px-2 items-center">
              {price().toLocaleString("id-ID", {})}
            </div>
          </div>
          <div className="grid grid-cols-2 w-full gap-4">
            <button
              className="btn btn-outline btn-primary flex-1"
              onClick={addToCart}
            >
              Keranjang
            </button>
            <Link to={"/checkout/:id"} className="btn btn-primary flex-1">
              Beli
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

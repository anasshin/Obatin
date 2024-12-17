import { useState } from "react";

export default function CardCart({ name, image, price }) {
  // const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(1);

  //   useEffect(() => {
  //     const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //     setCart(cart);
  //     setTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  //     setQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
  //   }, []);

  // const increment = (id) => {
  //   const newCart = cart.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, quantity: item.quantity + 1 };
  //     }
  //     return item;
  //   });
  //   setCart(newCart);
  //   localStorage.setItem("cart", JSON.stringify(newCart));
  // };
  // const decrement = (id) => {
  //   const newCart = cart.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, quantity: item.quantity - 1 };
  //     }
  //     return item;
  //   });
  //     setCart(newCart);
  //     localStorage.setItem("cart", JSON.stringify(newCart));
  //   };
  return (
    <>
      <div className="flex justify-between px-2 items-center w-full">
        <div className="flex items-center gap-2">
          <img src={image} className="h-12" />
          <div className="flex flex-col ">
            <h3>{name}</h3>
            <p className="font-bold text-sm">
              {(price * qty).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </div>
        </div>
        <div className="flex justify-between join join-horizontal p-2">
          <button
            className="join-item btn btn-sm btn-outline btn-neutral "
            onClick={() => {
              if (qty > 1) {
                setQty(qty - 1);
              }
            }}
          >
            -
          </button>
          <span className="join-item btn btn-outline btn-neutral btn-sm w-12">
            {qty}
          </span>
          <button
            className="join-item btn btn-sm btn-outline btn-neutral"
            onClick={() => setQty(qty + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}

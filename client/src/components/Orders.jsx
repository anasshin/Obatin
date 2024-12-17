// import { useEffect } from "react";
import { useState } from "react";

import CardOrder from "../utils/CardOrder";

const Orders = () => {
  // useEffect(() => {
  //   fetch("/api/orders")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // });

  // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   fetch("/api/orders")
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data));
  // }, []);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <div className="w-full mx-auto">
        <div className="p-4 bg-gray-50 rounded-3xl my-2">
          <div className="grid grid-cols-8">
            <div className="col-span-5">
              <p className="font-medium text-base text-indigo-600">Product </p>
            </div>
            <div className="col-span-1 ">
              <p className="font-medium text-sm text-gray-600">Qty </p>
            </div>
            <div className="col-span-2">
              <p className="font-medium text-sm text-gray-500">Delivery at </p>
            </div>
          </div>
        </div>
        {orders.map((order) => (
          <CardOrder key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;

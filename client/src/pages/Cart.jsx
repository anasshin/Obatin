import { Link } from "react-router-dom";
import back from "../assets/icons/left_fill.svg";
import CardCart from "../utils/CardCart";
// import { useEffect} from "react";
// import { Obat } from "../assets/doctor.svg";

const Cart = () => {
  //   const { cart, setCart } = useContext();

  //   const handleRemove = (product) => {
  //     const newCart = cart.filter((item) => item.id !== product.id);
  //     setCart(newCart);
  //   };

  return (
    <div className="">
      <div className="mx-2 flex">
        <Link to="/" className="btn btn-outline btn-circle btn-base">
          <img src={back} className="w-8 h-8" />
        </Link>
        <h1 className="flex text-2xl font-bold justify-center items-center w-full text-center">
          Cart
        </h1>
      </div>
      <div className="mt-4"></div>
      <CardCart
        image={
          "https://png.pngtree.com/png-clipart/20190604/original/pngtree-colored-pills-capsules-png-image_1428469.jpg"
        }
        name="Paracetamol"
        price="1000"
      />
      <CardCart
        image={
          "https://png.pngtree.com/png-clipart/20190604/original/pngtree-colored-pills-capsules-png-image_1428469.jpg"
        }
        name="Paracetamol"
        price="1000"
      />
      {/* {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => handleRemove(product)}>Remove</button>
        </div>
      ))} */}
      <div className=""></div>
      <Link
        to={"/checkout/:id"}
        className="btn btn-primary fixed bottom-0 w-full max-w-[475px]"
      >
        Beli
      </Link>
    </div>
  );
};
export default Cart;

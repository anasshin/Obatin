import { Link, useLocation } from "react-router-dom";
import Home from "../assets/icons/home_4_line.svg";
import Product from "../assets/icons/box_3_line.svg";
import Consult from "../assets/icons/message_1_line.svg";
import User from "../assets/icons/user_2_line.svg";

function DefaultNavbot() {
  return (
    <>
      <div className="fixed bottom-0 w-full max-w-[475px] mx-auto p-2 ">
        <div className="flex justify-around items-center w-full rounded-2xl bg-slate-200 shadow-lg py-2">
          <Link to="/" className="btn btn-circle btn-active">
            <img src={Home} className="w-8" />
          </Link>
          <Link to="/products" className="btn btn-circle">
            <img src={Product} className="w-8" />
          </Link>
          <Link to={"/consult"} className="btn btn-circle">
            <img src={Consult} className="w-8" />
          </Link>
          <Link to={"/user"} className="btn btn-circle">
            <img src={User} className="w-8" />
          </Link>
        </div>
      </div>
    </>
  );
}

function ProductNavbot() {
  return (
    <>
      <div className="fixed bottom-0 w-full max-w-[475px] mx-auto p-2 ">
        <div className="flex justify-around items-center w-full rounded-2xl bg-slate-200 shadow-lg py-2">
          <button className="">Keranjang</button>
          <button className="">Beli</button>
        </div>
      </div>
    </>
  );
}

const NavBottom = () => {
  const location = useLocation();
  if (location.pathname === "/products:id") {
    return <ProductNavbot />;
  } else if (
    location.pathname === "/login" ||
    location.pathname === "/register"
  ) {
    return null;
  }
  return <DefaultNavbot />;
};

export default NavBottom;

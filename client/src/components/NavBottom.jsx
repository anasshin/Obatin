import { Link, useLocation } from "react-router-dom";
import Home from "../assets/icons/home_4_line.svg";
import Product from "../assets/icons/box_3_line.svg";
import Consult from "../assets/icons/message_1_line.svg";
import Profile from "../assets/icons/user_2_line.svg";

function DefaultNavbot() {
  return (
    <>
      <div className="">
        <div className="btm-nav btm-nav-md max-w-[475px] mx-auto">
          <Link to="/">
            <button className="active mx-auto">
              <img src={Home} className="w-6 pt-4" />
            </button>
            <span className="btm-nav-label">Home</span>
          </Link>
          <Link to="/products">
            <button>
              <img src={Product} className="w-6 pt-4" />
            </button>
            <span className="btm-nav-label">Produk</span>
          </Link>
          <Link to={"/consult"}>
            <button>
              <img src={Consult} className="w-6 pt-4" />
            </button>
            <span className="btm-nav-label">Konsultasi</span>
          </Link>
          <Link to={"/profile"}>
            <button>
              <img src={Profile} className="w-6 pt-4" />
            </button>
            <span className="btm-nav-label">Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
}

const NavBottom = () => {
  const location = useLocation();
  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/profile" ||
    /^\/products\/[^/]+$/.test(location.pathname) ||
    location.pathname === "/cart" ||
    location.pathname === "/account" ||
    location.pathname === "/orders" ||
    location.pathname === "/address"
  ) {
    return null;
  }
  return <DefaultNavbot />;
};

export default NavBottom;

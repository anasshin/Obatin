import { Link, useLocation } from "react-router-dom";
import ObatLogo from "../../src/assets/obatin.svg";
import Notification from "../../src/assets/icons/notification_line.svg";
import Cart from "../utils/BtnCart";
import Back from "../assets/icons/left_fill.svg";

const NavTop = () => {
  const [items] = [3];
  // const [items, setItems] = useState(0);
  // const [total, setTotal] = useState(0);

  return (
    <>
      <div className="navbar justify-between bg-base-100">
        <Link to="/" className="btn btn-circle">
          <img src={Notification} alt="Notification" className="w-6 h-6" />
        </Link>
        <Link to="/">
          <img src={ObatLogo} alt="Obatin" className="w-24" />
        </Link>
        <div className="btn btn-circle">
          <Cart items={items} />
        </div>
      </div>
    </>
  );
};

const NavBack = ({ address, name }) => {
  return (
    <>
      <div className="navbar ">
        <Link
          to={address}
          className="absolute btn btn-outline btn-circle btn-base"
        >
          <img src={Back} className="w-8 h-8" />
        </Link>
        <p className="text-2xl font-bold mx-auto text-center">{name}</p>
      </div>
    </>
  );
};

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }
  if (location.pathname === "/profile") {
    return <NavBack address="/" name="Profile" />;
  }
  if (location.pathname === "/account") {
    return <NavBack address="/profile" name="Account" />;
  }
  if (location.pathname === "/orders") {
    return <NavBack address="/profile" name="Riwayat Transaksi" />;
  }
  if (location.pathname === "/address") {
    return <NavBack address="/profile" name="Alamat Saya" />;
  }
  return <NavTop />;
};
export default Navbar;

import { Link, useLocation } from "react-router-dom";
import ObatLogo from "../../src/assets/obatin.svg";
import Notification from "../../src/assets/icons/notification_line.svg";
import Cart from "../utils/Cart";

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
        <Link to="/cart" className="btn btn-circle">
          <Cart items={items} />
        </Link>
      </div>
    </>
  );
};

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }
  return <NavTop />;
};
export default Navbar;

// import React from "react";

import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import PropTypes from "prop-types";
import { useEffect } from "react";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Consult from "./pages/Consult.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Orders from "./components/Orders.jsx";
import Account from "./components/Account.jsx";
import Navbar from "./components/Navbar.jsx";
import NavBottom from "./components/NavBottom.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./components/About.jsx";

// import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <RequireAuth>
            {/* <ConditionalPadding> */}
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="error" element={<Error />} /> */}
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/consult" element={<Consult />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account" element={<Account />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            {/* </ConditionalPadding> */}
          </RequireAuth>
          <NavBottom />
        </div>
      </Router>
    </>
  );
}
const ConditionalPadding = ({ children }) => {
  const location = useLocation();

  const noPaddingPaths = ["/login", "/register", "/profile"];
  if (noPaddingPaths.includes(location.pathname)) {
    return <>{children}</>;
  }

  return <div className="pb-20">{children}</div>;
};
const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = false; // Replace with actual authentication check

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return <>{children}</>;
};
export default App;

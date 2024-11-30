// import React from "react";

import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Consult from "./pages/Consult.jsx";
import Transactions from "./pages/Transactions.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import NavBottom from "./components/NavBottom.jsx";
// import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <ConditionalPadding>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="error" element={<Error />} /> */}
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/consult" element={<Consult />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </ConditionalPadding>
          <NavBottom />
        </div>
      </Router>
    </>
  );
}
const ConditionalPadding = ({ children }) => {
  const location = useLocation();

  // Tidak ada padding untuk halaman login dan register
  const noPaddingPaths = ["/login", "/register"];
  if (noPaddingPaths.includes(location.pathname)) {
    return <>{children}</>;
  }

  // Tambahkan padding bawah untuk halaman lainnya
  return <div className="pb-20">{children}</div>;
};

export default App;

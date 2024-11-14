import { Routes, Route } from "react-router-dom";

import { Home, Product, Consult, Transaction, NotFound } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/consult" element={<Consult />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

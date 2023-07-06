import { Routes, Route, Outlet } from "react-router-dom";

import HomePage from "@/pages/home";
import AccountPage from "@/pages/account";
import CartPage from "@/pages/cart";
import CheckoutPage from "@/pages/checkout";
import ProductPage from "@/pages/products";
import ProductDetailPage from "@/pages/product-details";
import HeaderModule from "@/components/modules/header";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  return (
    <div className="w-full mx-auto max-w-screen-lg">
      <HeaderModule />
      <main style={{ padding: "1rem 0" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;

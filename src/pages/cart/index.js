import React from "react";
import Layout from "@/components/layouts/Layout";
import CartPage from "@/views/cart/CartPage";
import CartButton from "@/components/add-to-cart/components/CartButton";

const Cart = () => {
  return (
    <Layout>
      <CartPage />
    </Layout>
  );
};

export default Cart;

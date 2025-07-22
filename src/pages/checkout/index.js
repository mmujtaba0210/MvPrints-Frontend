import Layout from "@/components/layouts/Layout";
import CheckoutPage from "@/views/checkout";
import React from "react";

const Checkout = () => {
  return (
    <Layout>
      <div className="bg-[#f8f9fa]">
        <CheckoutPage />
      </div>
    </Layout>
  );
};

export default Checkout;

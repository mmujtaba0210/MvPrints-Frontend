import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import OrderReturnsPanel from "@/views/dashboard/tab panels/OrderReturnsPanel";
import React from "react";

const OrderReturnsPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <OrderReturnsPanel />
      </DashboardLayout>
    </Layout>
  );
};

export default OrderReturnsPage; 
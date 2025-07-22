import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import OrderPanel from "@/views/dashboard/tab panels/OrderPanel";
import React from "react";

const OrdersPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <OrderPanel />
      </DashboardLayout>
    </Layout>
  );
};

export default OrdersPage; 
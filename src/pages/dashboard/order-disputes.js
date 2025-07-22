import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import OrderDispute from "@/views/dashboard/tab panels/OrderDispute";
import React from "react";

const OrderDisputesPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <OrderDispute />
      </DashboardLayout>
    </Layout>
  );
};

export default OrderDisputesPage; 
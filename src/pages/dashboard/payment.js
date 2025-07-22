import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import PaymentPanel from "@/views/dashboard/tab panels/paymentpanel";
import React from "react";

const PaymentPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <PaymentPanel />
      </DashboardLayout>
    </Layout>
  );
};

export default PaymentPage; 
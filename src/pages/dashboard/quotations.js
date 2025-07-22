import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import QuotationPanel from "@/views/dashboard/tab panels/QuotationPanel";
import React from "react";

const QuotationsPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <QuotationPanel />
      </DashboardLayout>
    </Layout>
  );
};

export default QuotationsPage; 
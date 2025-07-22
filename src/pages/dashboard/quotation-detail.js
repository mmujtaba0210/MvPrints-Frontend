import DashboardLayout from "@/components/layouts/DashboardLayout";
import Layout from "@/components/layouts/Layout";
import QuotationDetailPage from "@/views/dashboard/tab panels/QuotationDetail";
import React from "react";

const QuotationDetail = () => {
  return (
    <Layout>
      <DashboardLayout>
        <QuotationDetailPage />
      </DashboardLayout>
    </Layout>
  );
};

export default QuotationDetail;

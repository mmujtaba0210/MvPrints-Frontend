import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import AffiliateInfoPanel from "@/views/dashboard/tab panels/AffiliateInfoPanel";
import React from "react";

const AffiliateInfoPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <AffiliateInfoPanel />
      </DashboardLayout>
    </Layout>
  );
};

export default AffiliateInfoPage;

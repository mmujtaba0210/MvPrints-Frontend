import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import GiftCardPanel from "@/views/dashboard/tab panels/GiftcardPanel";
import React from "react";

const GiftCardsPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <GiftCardPanel />
      </DashboardLayout>
    </Layout>
  );
};

export default GiftCardsPage; 
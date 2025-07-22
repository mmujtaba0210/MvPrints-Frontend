import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import WalletPanel from "@/views/dashboard/tab panels/WalletPanel";
import React from "react";

const WalletPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <WalletPanel />
      </DashboardLayout>
    </Layout>
  );
};

export default WalletPage; 
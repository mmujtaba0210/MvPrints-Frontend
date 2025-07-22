import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import AccountPanel from "@/views/dashboard/tab panels/account";
import React from "react";

const AccountPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <AccountPanel />
      </DashboardLayout>
    </Layout>
  );
};

export default AccountPage;

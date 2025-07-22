import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import DashboardPanel from "@/views/dashboard/tab panels/dashboard";
import withAuth from '@/utils/withAuth';

import React from "react";

const DashboardPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <DashboardPanel />
      </DashboardLayout>
    </Layout>

  );
};

export default withAuth(DashboardPage);
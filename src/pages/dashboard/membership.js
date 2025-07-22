import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import MembershipPanel from "@/views/dashboard/tab panels/MembershipPanel";
import React from "react";

const MembershipPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <MembershipPanel />
      </DashboardLayout>
    </Layout>
  );
};

export default MembershipPage; 
import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import SupportTicket from "@/views/dashboard/tab panels/SupportTicket";
import React from "react";

const SupportTicketsPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <SupportTicket />
      </DashboardLayout>
    </Layout>
  );
};

export default SupportTicketsPage; 
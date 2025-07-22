import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import MessagesPanel from "@/views/dashboard/tab panels/MessagesPanel";
import React from "react";

const MessagesPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <MessagesPanel />
      </DashboardLayout>
    </Layout>
  );
};

export default MessagesPage; 
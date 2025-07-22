import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import TrackOrderPanel from "@/views/dashboard/tab panels/TrackOrderPanel";
import React from "react";

const TrackOrderPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <TrackOrderPanel />
      </DashboardLayout>
    </Layout>
  );
};

export default TrackOrderPage; 
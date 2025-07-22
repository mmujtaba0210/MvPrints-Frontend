import Layout from "@/components/layouts/Layout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ProductQuestions from "@/views/dashboard/tab panels/ProductReviews";
import React from "react";

const ProductQuestionsPage = () => {
  return (
    <Layout>
      <DashboardLayout>
        <ProductQuestions />
      </DashboardLayout>
    </Layout>
  );
};

export default ProductQuestionsPage; 
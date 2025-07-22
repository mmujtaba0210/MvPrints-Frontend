import WishlistPage from '@/views/wishlist'
import React from 'react'
import Layout from '@/components/layouts/Layout'

const wishlist = () => {
  return (
    <Layout>
      <div>
        <WishlistPage />
      </div>
    </Layout>
  );
};

export default wishlist
'use client';

import { useRouter } from 'next/router';
import Products from '@/views/products';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // This would typically come from an API or database
  const products = [
    { id: 1, name: 'Business Cards', price: 19.99, image: '/images/businessCard.png' },
    { id: 2, name: 'Poster', price: 29.99, image: '/images/poster.png' },
    { id: 3, name: 'Flysers', price: 49.99, image: '/images/flyers.png' },
    { id: 4, name: 'Books & Magazine', price: 24.99, image: '/images/booksMagazine.png' },
    { id: 5, name: 'Yarn Signs', price: 24.99, image: '/images/yardSigns.png' },
    { id: 6, name: 'Retracting Banner', price: 24.99, image: '/images/retracterBanner.png' },
    { id: 7, name: 'T-Shirts', price: 24.99, image: '/images/Tshirts.png' }
  ];

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <Products product={product} />;
};

export default ProductPage; 
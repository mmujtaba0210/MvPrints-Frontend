# Product Image Gallery Component

A React component for displaying product images in an ecommerce setting with zoom functionality.

## Features

- Main image display with zoom on hover
- Thumbnail gallery for selecting different images
- Responsive design
- Image zoom that follows cursor position

## Usage

```jsx
import ProductImageGallery from '../components/ProductImageGallery';

// Example usage
const MyProductPage = () => {
  const productImages = [
    '/images/product-front.jpg',
    '/images/product-back.jpg',
    '/images/product-side.jpg',
    '/images/product-detail.jpg',
  ];

  return (
    <div>
      <h1>Product Name</h1>
      <ProductImageGallery images={productImages} />
      {/* Rest of your product page */}
    </div>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| images | array | [] | Array of image URLs to display in the gallery |

## How It Works

1. The component displays a main image area and thumbnails below
2. When hovering over the main image, a zoom effect shows a magnified portion of the image
3. The zoom follows the cursor position
4. Clicking on thumbnails changes the main image

If no images are provided, the component will use default images from the public directory. 
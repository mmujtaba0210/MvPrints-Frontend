"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const ProductImageGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setPosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  // Default images if none provided
  const defaultImages = [
    "/images/flyers.png",
    "/images/businessCard.png",
    "/images/poster.png",
    "/images/Tshirts.png",
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  return (
    <div className="flex flex-col lg:flex-row w-full mx-auto justify-between gap-4">
      {/* Main image container with zoom */}
      <div
        className="relative w-full lg:w-[80%] aspect-[4/3] lg:aspect-auto h-auto lg:h-[600px] overflow-hidden bg-gray-100 border border-[#0000001a] rounded-lg mb-4"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={imageRef}
      >
        <Image
          src={galleryImages[selectedImage]}
          alt={`Product image ${selectedImage + 1}`}
          fill
          className="mx-auto w-full object-contain transition-transform hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        {showZoom && (
          <div
            className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-10"
            style={{
              backgroundImage: `url(${galleryImages[selectedImage]})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "250%",
            }}
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 lg:grid-cols-1 w-full lg:w-[20%] gap-3">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`relative h-[100px] lg:h-full cursor-pointer flex justify-center items-center border rounded ${
              selectedImage === index
                ? "border-[#0096ff] ring-2 ring-[#0096ff]"
                : "border-[#0000001a]"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={160}
              height={120}
              className="object-cover max-w-full max-h-full"
              sizes="(max-width: 768px) 24vw, 10vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;

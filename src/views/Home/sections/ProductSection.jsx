import CustomButton from "@/components/CustomButton";
import ProductShowcase from "@/components/ProductShowcase";
import { useRouter } from "next/navigation";
import React from "react";
// Featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Business Cards",
    price: 19.99,
    image: "/images/businessCard.png",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Poster",
    price: 29.99,
    image: "/images/poster.png",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Flysers",
    price: 49.99,
    image: "/images/flyers.png",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Books & Magazine",
    price: 24.99,
    image: "/images/booksMagazine.png",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Yarn Signs",
    price: 24.99,
    image: "/images/yardSigns.png",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Retracting Banner",
    price: 24.99,
    image: "/images/retracterBanner.png",
    rating: 4.5,
  },
  {
    id: 7,
    name: "T-Shirts",
    price: 24.99,
    image: "/images/Tshirts.png",
    rating: 4.5,
  },
];

const ProductSection = () => {
  const router = useRouter();
  return (
    <section className=" w-full lg:-mt-40 bg-gradient-to-bs from-[#0095ff]s to-whites bg-white">
      <div className="mx-auto ">
        <h2 className="text-3xl font-bold text-center text-[#fa09a7] 2xl:text-5xl">
          Our Products
        </h2>
        <p className="text-center mb-5 text-[#fa09a7] 2xl:text-2xl">
          We offer the products you love most — designed to inspire, crafted to
          impress and made to last!
        </p>
      </div>
      <div className="w-full">
        <ProductShowcase products={featuredProducts} />
      </div>
      <div className="flex justify-center pt-6">
        <CustomButton
          className="w-[50%] md:w-[40%] 2xl:w-[20%] 2xl:text-3xl 2xl:my-18"
          text="See All Products"
          onClick={() => router.push("/products")}
        />
      </div>
    </section>
  );
};

export default ProductSection;

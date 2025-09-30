import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import HomePage from "@/views/Home";
import Layout from "@/components/layouts/Layout";
import { CartProvider } from "@/components/add-to-cart/components/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      <CartProvider>
        <HomePage />
      </CartProvider>
    </Layout>
  );
}

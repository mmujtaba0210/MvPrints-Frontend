// filepath: c:\Users\Barely Works\Desktop\Mecarvi_Technology\mecarvi\src\pages\_app.js
import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import { CartProvider } from "@/components/add-to-cart/components/CartContext";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import { AuthProvider } from "../context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <div
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Component {...pageProps} />
          </div>
        </CartProvider>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;

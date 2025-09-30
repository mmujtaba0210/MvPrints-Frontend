import React from "react";
import CartButton from "./components/CartButton";

export default function Cart() {
  return (
    <main className="p-10">
      <CartButton />
      <h1 className="text-2xl mt-5">Welcome to the Shop</h1>
    </main>
  );
}

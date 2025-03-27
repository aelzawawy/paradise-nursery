import React from "react";
import { useSelector } from "react-redux";
import Button from "../button";
const Navbar = () => {
  const cart = useSelector((state) => state.shop.cart);
  const total = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="flex justify-around bg-green-400/50 backdrop-blur-sm p-3 sticky z-10 left-0 top-0 w-full items-center">
      <Button
        path="/"
        text="Paradise Nursery"
        style={{ className: "font-medium text-2xl" }}
      />
      <div className="text-white font-medium text-2xl">Plants</div>
      <Button style={{className: "text-2xl font-medium"}} path="/shop/cart" text={`Cart (${total})`} id="cart" />
    </nav>
  );
};

export default Navbar;

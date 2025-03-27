import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button";
import Card from "../../components/card";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shop.cart);
  const total = cart.reduce((acc, item) => acc + item.quantity * item.plant.price, 0);

  return (
    <div className="flex flex-col gap-2 items-center mx-auto mt-10">
      <div className="text-2xl font-bold text-center border-white py-2 px-6 mb-4">Total Cart Amount: ${total.toFixed(2)}</div>
      <div className="flex flex-col gap-2 mt-10">
        {cart.map((item) => (
          <Card
            view="cart"
            data={item.plant}
            quantity={item.quantity}
            key={item.plant.id}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-10">
        <Button
          path="/shop"
          style={{
            className:
              "bg-green-500 text-2xl py-3 px-6 rounded hover:cursor-pointer transition",
          }}
          text="Continue Shopping"
        />
        <Button
          style={{
            className:
              "bg-green-500 text-2xl py-3 px-6 rounded hover:cursor-pointer transition",
          }}
          text="Checkout"
        />
      </div>
    </div>
  );
};

export default Cart;

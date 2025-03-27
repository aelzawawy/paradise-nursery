import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../reducers";

const Card = ({ data, view, quantity }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shop.cart);
  const inCart = cart.some((item) => item.plant.id === data.id);

  const renderCartView = () => (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm text-xl p-5 rounded-md">
      <img src={data.thumbnail} alt={data.name} className="w-50 h-60 mr-4" />
      <div className="flex flex-col gap-1 items-start">
        <div className="font-bold">{data.name}</div>
        <span>${data.price}</span>
        <div className="flex gap-3 justify-center">
          <Button
            text="➖"
            style={{
              className:
                "bg-white text-sm text-black p-1 rounded hover:cursor-pointer transition disabled:bg-gray-400 disabled:cursor-not-allowed",
            }}
            onClick={() => dispatch(decrementQuantity(data.id))}
            disabled={quantity === 1}
          />
          <span className="w-10 text-center">{quantity}</span>
          <Button
            text="➕"
            style={{
              className:
                "bg-white text-sm text-black p-1 rounded hover:cursor-pointer transition",
            }}
            onClick={() => dispatch(incrementQuantity(data.id))}
          />
        </div>
        <div className="text-md font-bold">
          Total: ${(data.price * quantity).toFixed(2)}
        </div>
        <Button
          text="Delete"
          style={{
            className:
              "bg-red-500 p-1 text-sm rounded hover:cursor-pointer transition disabled:bg-gray-500 ",
          }}
          onClick={() => dispatch(removeFromCart(data.id))}
        />
      </div>
    </div>
  );

  const renderPlantsView = () => (
    <div className="flex flex-col w-100 items-center gap-1 bg-white/10 backdrop-blur-sm font-bold text-xl text-center p-4 rounded-md">
      <div className="">{data.name}</div>
      <img src={data.thumbnail} alt={data.name} className="w-100 h-100  mb-2" />
      <span>${data.price}</span>
      <div className="">{data.description}</div>
      <Button
        text="Add to Cart"
        style={{
          className:
            "bg-green-700 py-2 px-4 rounded hover:cursor-pointer transition disabled:bg-gray-500 disabled:cursor-not-allowed",
        }}
        disabled={inCart}
        onClick={() => dispatch(addToCart({ plant: data, quantity: 1 }))}
      />
    </div>
  );

  const viewMap = {
    cart: renderCartView,
    plants: renderPlantsView,
  };

  return <div>{viewMap[view]?.()}</div>;
};

export default Card;

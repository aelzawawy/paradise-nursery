import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  plants: [
    {
      id: 1,
      name: "Snake Plant",
      thumbnail: "/images/snake-plant.jpg",
      price: 29.99,
      description:
        "Low-maintenance plant known for its air purifying qualities",
      type: "air purifying",
    },
    {
      id: 2,
      name: "Lavender",
      thumbnail: "/images/lavender.jpg",
      price: 24.99,
      description: "Beautiful purple flowers with a calming fragrance",
      type: "aromatic fragrant",
    },
    {
      id: 3,
      name: "Spider Plant",
      thumbnail: "/images/spider-plant.jpg",
      price: 19.99,
      description: "Fast growing plant that removes indoor air pollutants",
      type: "air purifying",
    },
    {
      id: 4,
      name: "Jasmine",
      thumbnail: "/images/jasmine.jpg",
      price: 34.99,
      description: "Sweet-scented white flowers that bloom at night",
      type: "aromatic fragrant",
    },
    {
      id: 5,
      name: "Aloe Vera",
      thumbnail: "/images/aloe.jpg",
      price: 22.99,
      description: "Medicinal plant with healing properties",
      type: "medicinal",
    },
    {
      id: 6,
      name: "Peace Lily",
      thumbnail: "/images/peace-lily.jpg",
      price: 39.99,
      description: "Elegant white flowers and excellent air purifier",
      type: "air purifying",
    },
    {
      id: 7,
      name: "Mint",
      thumbnail: "/images/mint.jpg",
      price: 15.99,
      description: "Fresh aromatic herb perfect for culinary use",
      type: "culinary herb",
    },
    {
      id: 8,
      name: "Boston Fern",
      thumbnail: "/images/boston-fern.jpg",
      price: 27.99,
      description: "Humidity-loving plant that removes air toxins",
      type: "air purifying",
    },
    {
      id: 9,
      name: "Eucalyptus",
      thumbnail: "/images/eucalyptus.jpg",
      price: 32.99,
      description: "Strong aromatic leaves with medicinal properties",
      type: "medicinal",
    },
    {
      id: 10,
      name: "Rosemary",
      thumbnail: "/images/rosemary.jpg",
      price: 18.99,
      description: "Fragrant herb used in cooking and aromatherapy",
      type: "culinary herb",
    },
  ],
  cart: [],
};

export const plantSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.plant.id !== action.payload
      );
    },
    incrementQuantity: (state, action) => {
      state.cart.find((item) => item.plant.id === action.payload).quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.plant.id === action.payload);
      item.quantity > 1 && item.quantity--;
    },
  },
});

export const {
  listPlants,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = plantSlice.actions;
export default plantSlice.reducer;

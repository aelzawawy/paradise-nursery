import { Route, Routes } from "react-router";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Plants from "./pages/plants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Layout />}>
        <Route index element={<Plants />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;

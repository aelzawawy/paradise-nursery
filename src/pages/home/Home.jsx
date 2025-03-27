import React from "react";
import Button from "../../components/button";
const Home = () => {
  const btnStyle = {
    className: `bg-green-600 text-white px-5 py-2 rounded hover:cursor-pointer transition`,
  };
  return (
    <div className="h-screen lg:px-30 flex items-center">
      <div className="flex items-center lg:gap-20 justify-around">
        <div className="flex flex-col gap-5 items-center text-center">
          <div className="text-4xl font-medium md:max-w-full lg:max-w-4/6 text-wrap-stable">Welcome to Paradise Nursery</div>
          <div className="text-1xl lg:max-w-3/4">Where Plants Meet Nature</div>
          <Button path="/shop" text="Get Started" style={btnStyle} />
        </div>
        <div className="flex flex-col flex-1 text-xl min-w-3/5 gap-5 p-4">
          <div className="text-start font-medium">
            Welcome to Paradise Nursery, where nature meets nurture. Our carefully curated 
            collection of plants brings the beauty of the outdoors into your space. From 
            vibrant flowering plants to lush greenery, we have everything you need to 
            create your own slice of paradise.
          </div>
          <div className="text-start font-medium">
            Whether you're an experienced plant parent or just beginning your green journey,
            our expert staff is here to help. We offer personalized guidance on plant selection,
            care tips, and maintenance to ensure your plants thrive in their new home.
          </div>
          <div className="text-start font-medium">
            Visit us today to explore our diverse selection of indoor and outdoor plants,
            premium potting supplies, and gardening accessories. Let us help you transform
            your space into a natural sanctuary that brings joy and tranquility to your daily life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

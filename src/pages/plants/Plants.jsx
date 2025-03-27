import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card";
const Plants = () => {
  const plants = useSelector((state) => state.shop.plants);
  const groupedPlants = plants.reduce((acc, plant) => {
    const type = plant.type;
    acc[type] = acc[type] || [];
    acc[type].push(plant);
    return acc;
  }, {});

  return (
    <div>
      <div className="flex flex-col gap-2">
        {Object.keys(groupedPlants).map((category) => (
          <div key={category} className="flex flex-col items-center gap-2 text-white rounded-xl text-4xl px-5 py-5 font-bold text-center mt-6">
            <div className="text-2xl font-bold text-center border-y-2 border-white py-2 px-6 mb-4 capitalize tracking-widest">{category}</div>
            <div className="flex flex-wrap justify-center gap-5">
              {groupedPlants[category].map((plant) => (
                <Card view="plants" data={plant} key={plant.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plants;

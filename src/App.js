import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "통삼겹",
    image:
      "https://images.pexels.com/photos/8408388/pexels-photo-8408388.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 2,
    name: "햄버거",
    image:
      "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    name: "피자",
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 4,
    name: "스테이크",
    image:
      "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;

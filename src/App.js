const initialItems = [
  { id: 1, description: "pepperoni mushrooms", color: "blue", img: "👍" },
  { id: 2, description: "onions", color: "green", img: "🍙" },
  { id: 3, description: "barbecue chicken", color: "orange", img: "🐔" },
  { id: 4, description: "pineapple", color: "pink", img: "🍍" },
  { id: 5, description: "vegan alternatives", color: "yellow", img: "🥒" },
];

export default function App() {
  return (
    <div className="card">
      <Card />
      <Header />
      <Data />
      <PackingList />
    </div>
  );
}

const Card = () => {
  return (
    <img className="avatar" src="pizzas/focaccia.jpg" alt="Pizza ID card"></img>
  );
};
const Header = () => {
  return <h1>Delicious Pizza</h1>;
};
const Data = () => {
  return (
    <p className="data">
      Delicious pizza is a culinary delight enjoyed by people all around the
      world. It is a classic Italian dish that has gained immense popularity and
      has countless variations to suit different tastes and preferences
    </p>
  );
};

function PackingList() {
  return (
    <div>
      <ul className="skill-list">
        {initialItems.map((item) => (
          <Item itemObj={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ itemObj }) {
  return (
    <li className="skill" style={{ backgroundColor: `${itemObj.color}` }}>
      {itemObj.description} {itemObj.img}
    </li>
  );
}

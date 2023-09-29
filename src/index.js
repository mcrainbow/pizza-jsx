import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "images/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzas ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven,all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizzaData={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour < closeHour && hour >= openHour;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <Order close={closeHour} />
        ) : (
          <p>
            Now our restoraunt is closed. We're happy to welcome you between{" "}
            {openHour}:00 and {closeHour}:00
          </p>
        )}
      </div>
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open");
}

const Order = ({ close }) => {
  return (
    <div className="order">
      <p>We're open untill {close}:00. Come visit us or order online</p>
      <button className="btn">Order now</button>
    </div>
  );
};

function Pizza({ pizzaData }) {
  return (
    <div className={`pizza${pizzaData.soldOut ? " sold-out" : ""}`}>
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h2>{pizzaData.name}</h2>
        <p>{pizzaData.ingredients}</p>
        {pizzaData.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>${pizzaData.price}</span>
        )}
      </div>
    </div>
  );
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

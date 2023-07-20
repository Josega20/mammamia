/*import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import "./Home.css";
import MyContext from "../../Context/MyContext";
import PizzaCard from "../../Components/PizzaCard/PizzaCard";
export const Home = () => {
  
  return (
    <>
      <header className="header">
        <h2> ¡Pizzería Mamma Mia!</h2>
        <h3>¡ Tenemos las mejores pizzas que podras encontrar!</h3>
      </header>
      <body>
        <div className="galeria grid-columns-5 p-3">
          <PizzaCard> kdfadsf</PizzaCard>
        </div>
      </body>
    </>
  );
};*/
import "./Home.css";
import PizzaCard from "../../Components/PizzaCard/PizzaCard";

export const Home = () => {
  return (
    <>
      <header className="header">
        <h2>¡Pizzería Mamma Mia!</h2>
        <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3>
      </header>

      <div >
        <PizzaCard />
      </div>
    </>
  );
};

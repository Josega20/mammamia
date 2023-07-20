/*import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import MyContext from "../../Context/MyContext";
import "./PizzaDescrip.css";

const PizzaDescrip = () => {
  const { id } = useParams();
  const { pizzas } = useContext(MyContext);
  const pizza = pizzas.find((p) => p.id === id);

  return (
    <div className="cardss  p-3">
      <div>
      <img src={pizza.img} alt="" />
      </div>
      <Card style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Title className="title">{pizza.name}</Card.Title>
          <div>
            <h4>{pizza.desc}</h4>
          </div>
          <Card.Text className="ingredientes">
            <div>
              <h4>Ingredientes</h4>
              <ul className="ingrediente">
                {pizza.ingredients.map((ing, i) => {
                  return <li key={i}>🍕 {ing}</li>;
                })}
              </ul>
            </div>
          </Card.Text>

          <div className="price">
            <h3>${pizza.price}</h3>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default PizzaDescrip;*/

import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import MyContext from "../../Context/MyContext";
import "./PizzaDescrip.css";

const PizzaDescrip = () => {
  const { id } = useParams();
  const { pizzas } = useContext(MyContext);
  const pizza = pizzas.find((p) => p.id === id);
  const { carrito, setCarrito, sumarPizza, restarPizza, total, setTotal } = useContext(MyContext);


  return (
    <>
      <div className="cardss">
        <img className="image" src={pizza.img} alt="" />

        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title className="title">{pizza.name}</Card.Title>
            <div>
              <h4>{pizza.desc}</h4>
            </div>
            <Card.Text className="ingredientes">
              <div>
                <h4>Ingredientes</h4>
                <ul className="ingrediente">
                  {pizza.ingredients.map((ing, i) => {
                    return <li key={i}>🍕 {ing}</li>;
                  })}
                </ul>
              </div>
            </Card.Text>

            <div className="price">
              <h3>${pizza.price}</h3>
            </div>
            <div className="buttons">
              <Button onClick={() =>
                sumarPizza(pizza.id, pizza.img, pizza.name, pizza.price)
              } variant="danger">Añadir 🛒</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default PizzaDescrip;

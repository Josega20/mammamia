import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import MyContext from "../../Context/MyContext";
import "./PizzaCard.css";

function PizzaCard() {
  const { pizzas } = useContext(MyContext);
  console.log(pizzas);
  const navigate = useNavigate();
  const irAPizza = (id) => {
    navigate(`/pizza/${id}`);
  };
  const {carrito, setCarrito, sumarPizza}=  useContext (MyContext) ;


  return (
    <div className="galeria grid-5 p-3">
      {pizzas.map((pizza) => (
        <Card style={{ width: "15rem" }} key={pizza.id} className="cardss">
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title className="title">{pizza.name}</Card.Title>

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
              <Button
                onClick={() => irAPizza(pizza.id)}
                className="button1"
                variant="primary"
              >
                Ver mas
              </Button>
              <Button onClick={() => sumarPizza(pizza.id, pizza.img,pizza.name,pizza.price,)} variant="danger">Añadir</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PizzaCard;

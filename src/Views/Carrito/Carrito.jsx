import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import MyContext from "../../Context/MyContext";
import "./Carrito.css";

const Carrito = () => {
  const { carrito, setCarrito, sumarPizza, restarPizza, total, setTotal } =
    useContext(MyContext);

  function parcial(a, b) {
    return a * b;
  }

  const cumulativeTotal = carrito.reduce((acc, pizza) => {
    return acc + parcial(Number(pizza.price), Number(pizza.cantidad));
  }, 0);

  useEffect(() => {
    setTotal(cumulativeTotal);
  }, [cumulativeTotal, setTotal]);

  return (
    <div className="container1">
      <h2>Detalles del pedido</h2>

      <div>
        {carrito.map((pizza) => (
          <div key={pizza.id} className="container2">
            <div className="present">
              <img className="imagenCarrito" src={pizza.img} alt="" />
              <h3>{pizza.name}</h3>
            </div>
            <div className="precio">
              {/*<p>precio{pizza.price}</p>*/}
              <h3>${parcial(Number(pizza.price), Number(pizza.cantidad))}</h3>
              <Button className="add"
                onClick={() =>
                  restarPizza(pizza.id, pizza.img, pizza.name, pizza.price)
                }
                variant="primary"
              >
                -
              </Button>
              <h3>cantidad {pizza.cantidad}</h3>
              <Button className="add"
                onClick={() =>
                  sumarPizza(pizza.id, pizza.img, pizza.name, pizza.price)
                }
                variant="danger"
              >
                +
              </Button>
            </div>
          </div>
        ))}
        {console.log(carrito)}
        <h3>Total: $ {total}</h3>
        <Button variant="success">PAGAR</Button>
      </div>
    </div>
  );
};

export default Carrito;

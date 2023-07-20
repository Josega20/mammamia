import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarPizza from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import Pizza from "./Views/Pizza/Pizza";
import Carrito from "./Views/Carrito/Carrito";
import { useEffect, useState } from "react";
import MyContext from "./Context/MyContext";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const endpoint = "/pizzas.json";
  async function getPizzas() {
    const res = await fetch(endpoint);
    const datosPizza = await res.json();
    console.log(datosPizza);
    setPizzas(datosPizza);
  }
  useEffect(() => {
    getPizzas();
  }, []);

  const sumarPizza = (id, img, name, price) => {
    const index = carrito.findIndex((p) => p.id === id);
    if (index >= 0) {
      carrito[index].cantidad++;
      setCarrito([...carrito]);
    } else {
      carrito.push({ id: id, img: img, name: name, price: price, cantidad: 1 });
      setCarrito([...carrito]);
    }
  };
  const restarPizza = (id, img, name, price) => {
    const index = carrito.findIndex((p) => p.id === id);
    if (carrito[index].cantidad > 0) {
      carrito[index].cantidad--;
      setCarrito([...carrito]);
    }
  };
 

  return (
    <>
      <MyContext.Provider
        value={{
          pizzas,
          setPizzas,
          carrito,
          setCarrito,
          sumarPizza,
          restarPizza,
          total,
          setTotal,
        }}
      >
        <BrowserRouter>
          <NavbarPizza></NavbarPizza>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<h1> Pagina no encontrada</h1>} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;

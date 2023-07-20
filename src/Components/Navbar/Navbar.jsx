import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import MyContext from "../../Context/MyContext";

function NavbarPizza() {
  const {  total,} =   useContext(MyContext);
return(
    <Navbar  className=" bg-primary text-white">
      <Container>
        <Link to="/" className="text-white ms-3 text-decoration-none">
        🍕 Pizzería Mamma Mia!
        </Link>
       
          <Link to="/carrito" className="text-white ms-3 text-decoration-none" >🛒 $ {total}</Link>
        
      </Container>
    </Navbar>
  );
}

export default NavbarPizza;

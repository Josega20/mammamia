import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import PizzaDescrip from "../../Components/PizzaDescrip/PizzaDescrip";

const Pizza = () => {


  return (
    <>
      <div className="imagen">
  <PizzaDescrip >

  </PizzaDescrip>
   
      </div>
      <div className="detalles"></div>
    </>
  );
};

export default Pizza;

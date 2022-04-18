import React, { useState } from "react";

function Listado() {
  const [number, setNumber] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <>
      <h2>Listado</h2>

      {number.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </>
  );
}

export default Listado;

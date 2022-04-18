import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";

function Contador() {
  const [number, setNumber] = useState(0);

  const Aumentar = () => {
    setNumber(number + 1);
  };
  const Reducir = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <h2>
        Cantidad: <strong>{number}</strong>
      </h2>
      <Container>
        <Row className="contenedor-botones">
          <Button onClick={Aumentar} variant="dark" className="mx-2">
            +
          </Button>
          <Button onClick={Reducir} variant="secondary" className="mx-2">
            -
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default Contador;

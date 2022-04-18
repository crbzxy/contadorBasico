import React, { useState } from "react";
import { Row } from "react-bootstrap";

function Temperatura() {
  const [temperatura, setTemperatura] = useState(0);
  return (
    <div>
      <h3>Temperatura</h3>

      <Row>
        <Button variant="primary">Obtener</Button>
      </Row>
    </div>
  );
}

export default Temperatura;

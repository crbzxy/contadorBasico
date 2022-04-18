import React, { useEffect } from "react";
import { Row, Button, Container } from "react-bootstrap";
import axios from "axios";
function Temperatura() {
  const uri =
    "https://api.openweathermap.org/data/2.5/weather?lat=19.299185&lon=-99.106845&appid=7f95e86edc8e9261d43bc273b7c5b489&units=metric";

  const [temperatura, setTemperatura] = React.useState(null);
  const [humedad, setHumedad] = React.useState(null);
  const [presion, setPresion] = React.useState(null);
  const [viento, setViento] = React.useState(null);
  useEffect(() => {
    axios.get(uri).then((res) => {
      setTemperatura(res.data.main.temp);
      setHumedad(res.data.main.humidity);
      setPresion(res.data.main.pressure);
      setViento(res.data.wind.speed);
    });
  }, [uri]);
  if (temperatura) {
    return (
      <div class="card text-left">
        <div class="card-body">
          <h4 class="card-title">{temperatura}</h4>
          <p class="card-text">{humedad}</p>
          <ul>
            <li>{presion}</li>
            <li>{viento}</li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <>
      <h3>Temperatura</h3>

      <Container>
        <Row>
          <Button variant="primary"> Temperatura</Button>
        </Row>
      </Container>
    </>
  );
}

export default Temperatura;

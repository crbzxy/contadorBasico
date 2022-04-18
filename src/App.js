import "./App.css";
import Contador from "./components/Contador";
import Listado from "./components/Listado";
//import Hola from './components/Hola';

function App() {
  return (
    <div className="App bg-body text-dark">
      <div className="container">
        <div className="row">

          <div className="col-md-12">

            <h1>Contador Básico</h1>
            <Contador />
            <Listado />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

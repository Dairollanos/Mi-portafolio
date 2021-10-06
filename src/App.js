import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./Views/Inicio";
import Proyectos from "./Views/Proyectos";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing"
import AboutUs from "./components/AboutUs/AboutUs"

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/aboutUs" component={AboutUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

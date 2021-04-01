import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>login</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

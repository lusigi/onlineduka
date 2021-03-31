import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>login</h1>
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

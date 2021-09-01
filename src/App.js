import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/all.css";
import Index from "./components/Index";
import Discuss from "./components/Discuss";
import Chars from "./components/Chars";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
import Merch from "./components/Merch";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>

        <Route exact path="/discuss">
          <Discuss />
        </Route>

        <Route exact path="/characters">
          <Chars />
        </Route>

        <Route exact path="/chat">
          <Chat />
        </Route>

        <Route exact path="/merch">
          <Merch />
        </Route>

        <Route exact path="*">
          <div className="container">
            <h1>404</h1>
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

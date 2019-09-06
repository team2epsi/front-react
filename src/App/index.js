import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Header";
import NotFound from "../NotFound/";
import Home from "../Home/";
import Excursion from "../Excursion/";
import UpdateExcursion from "../UpdateExcursion/";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header title="Loclandes" />

        <div id="container">
          <div id="main">
            <div className="inside">
              <Switch>
                <Route path="/" component={Home} exact />
                {/* <Route path="/soumettre" component={Soumettre} exact /> */}
                <Route
                  path="/excursion/read/:idExcursion"
                  component={Excursion}
                  exact
                />
                <Route
                  path="/excursion/update/:idExcursion"
                  component={UpdateExcursion}
                  exact
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from "react";
import Header from "../Header";
import ExpeditionList from "../ExpeditionList";

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     products: [],
  //     basketItems: []
  //   };
  // }

  render() {
    return (
      <div>
        <Header title="Loclandes" />
        <ExpeditionList />
      </div>
    );
  }
}

export default App;

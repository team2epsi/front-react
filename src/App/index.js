import React from "react";
import Header from "../Header";
import ExpeditionList from "../ExpeditionList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      basketItems: []
    };
  }

  componentDidMount() {
    // {
    //   mode: "no-cors",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*"
    //   }
    // }

    var options = {
      method: "get",
      mode: "no-cors",
      headers: {
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*",
        "Access-Control-Allow-Origin": "*"
      }
    };

    //const URL = "https://sdiscount-api.herokuapp.com/products";
    const URL = "https://localhost:44311/api/values";
    //fetch(URL, options)
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const products = data.map(product => ({
          title: product.libelleMiniExcursion
        }));

        this.setState({
          products
        });
      });
  }

  // componentDidMount() {
  //   //const URL = "https://sdiscount-api.herokuapp.com/products";
  //   const URL = "https://localhost:44311/api/values";
  //   fetch(URL, {
  //     mode: "no-cors",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*"
  //     }
  //   })
  //     .then(response => {
  //       return response.json();
  //       //console.log('success', response.json())
  //     })
  //     .then(data => {
  //       const products = data.map(product => ({
  //         title: product.libelleMiniExcursion
  //       }));

  //       this.setState({
  //         products
  //       });
  //     });
  // }

  render() {
    return (
      <div>
        <Header title="Loclandes" />
        <ExpeditionList products={this.state.products} />
      </div>
    );
  }
}

export default App;

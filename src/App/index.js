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
    fetch("https://sdiscount-api.herokuapp.com/products")
      .then(response => response.json())
      .then(data => {
        const products = data.map(product => ({
          // description: product.description,
          // imageUrl: product.imageUrl,
          // price: product.price,
          // reference: product.reference,
          title: product.title
        }));

        this.setState({
          products
        });
      });
  }

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

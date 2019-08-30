import React from "react";
import ExpeditionList from "../ExpeditionList";
import Spinner from "../Spinner";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      excursions: [],
      loading: true
    };
  }

  componentDidMount() {
    //const URL = "https://sdiscount-api.herokuapp.com/products";
    const URL = "https://localhost:44311/api/MiniExcursion";
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const excursions = data.map(excursion => ({
          libelleMiniExcursion: excursion.libelleMiniExcursion,
          nombresPlaces: excursion.nombrePlaceMiniExcursion,
          reference: excursion.idMiniExcursion
        }));

        this.setState({
          excursions,
          loading: false
        });
      });
  }

  render() {
    return (
      <div>
        {/* opérateur ternaire si loading vaut true */}
        {this.state.loading ? (
          <Spinner />
        ) : (
          <ExpeditionList excursions={this.state.excursions} />
        )}
      </div>
    );
  }
}

export default Home;

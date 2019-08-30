import React from "react";
import { Link } from "react-router-dom";

class Excursion extends React.Component {
  constructor() {
    super();

    this.state = {
      excursionItem: {}
    };
  }

  componentWillMount() {
    console.log("Params :", this.props.match.params);
    let getIdExcursion = this.props.match.params.idExcursion;
    fetch(`https://localhost:44311/api/miniExcursion/${getIdExcursion}`)
      .then(response => response.json())
      .then(json => {
        console.log("json :", json);
        // this.setState({ features: json.features });
        this.setState({
          excursionItem: json
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="DashboardTool">
          <button type="button" className="btn btn-success">
            <Link to="/" title="Loclandes">
              Retour liste des excursions
            </Link>
          </button>
        </div>
        <hr />
        <h1>Excursion : {this.state.excursionItem.libelleMiniExcursion}</h1>

        <table className="table table-striped">
          <tbody>
            <tr>
              <th scope="row">id</th>
              <td>{this.props.match.params.idExcursion}</td>
            </tr>
            <tr>
              <th scope="row">Expédition</th>
              <td>{this.state.excursionItem.libelleMiniExcursion}</td>
            </tr>
            <tr>
              <th scope="row">Nombre de places</th>
              <td>{this.state.excursionItem.nombrePlaceMiniExcursion}</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Excursion;

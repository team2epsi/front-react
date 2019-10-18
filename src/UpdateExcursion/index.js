import React from "react";
import { Link } from "react-router-dom";

class UpdateExcursion extends React.Component {
  constructor() {
    super();

    this.state = {
      excursionItem: {
        libelleMiniExcursion: "",
        nombrePlaceMiniExcursion: ""
      }
    };

    this.handleChangeInputLibelle = this.handleChangeInputLibelle.bind(this);
    this.handleChangeInputPlace = this.handleChangeInputPlace.bind(this);
    this.handleUpdateExcursion = this.handleUpdateExcursion.bind(this);
  }

  handleChangeInputLibelle(e) {
    console.log("coucou input :", e);
    console.log(e.currentTarget.value);
    let excursion = this.state.excursionItem;

    excursion.libelleMiniExcursion = e.currentTarget.value;

    this.setState({
      excursionItem: excursion
    });
  }

  handleChangeInputPlace(e) {
    let excursion = this.state.excursionItem;
    excursion.nombrePlaceMiniExcursion = e.currentTarget.value;

    this.setState({
      excursionItem: excursion
    });
  }

  // Méthode pour mettre à jour l'excursion
  handleUpdateExcursion(e) {
    let data = {
      idMiniExcursion: this.props.match.params.idExcursion,
      libelleMiniExcursion: this.state.excursionItem.libelleMiniExcursion,
      nombrePlaceMiniExcursion: this.state.excursionItem
        .nombrePlaceMiniExcursion
    };

    console.log(data);

    var initPost = {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(
      `https://localhost:44311/api/MiniExcursion/${data.idMiniExcursion}`,
      initPost
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          if (response.ok === true) {
            alert("Mise à jour ok !");
            window.location.href = "/";
          }
        }
      })
      .catch(error => {
        console.log("error: " + error);
      });
  }

  componentWillMount() {
    console.log("Params :", this.props.match.params);
    let getIdExcursion = this.props.match.params.idExcursion;
    fetch(`https://localhost:44311/api/miniExcursion/${getIdExcursion}`)
      .then(response => response.json())
      .then(json => {
        console.log("json :", json);
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
        <h1>
          Modification de la fiche :
          {this.state.excursionItem.libelleMiniExcursion}
        </h1>

        {/* <form class="tl_form tableextended" method="post" action="" id="mm_produits" enctype="multipart/form-data"> */}

        <table className="table table-striped">
          <tbody>
            <tr>
              <th scope="row">id</th>
              <td>{this.props.match.params.idExcursion}</td>
            </tr>
            <tr>
              <th scope="row">Expédition</th>
              <td>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChangeInputLibelle}
                  value={this.state.excursionItem.libelleMiniExcursion}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Nombre de places</th>
              <td>
                <input
                  type="number"
                  className="form-control"
                  min="0"
                  max="50"
                  placeholder="nombre de places"
                  onChange={this.handleChangeInputPlace}
                  value={this.state.excursionItem.nombrePlaceMiniExcursion}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="DashboardTool">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleUpdateExcursion}
          >
            Mettre à jour la mini-excursion
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateExcursion;

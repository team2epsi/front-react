import React from "react";
import "./styles.css";

class FormAddMiniExcursion extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      libelleExcursionInputText: "",
      placeExcursionInputText: ""
    };
  }

  handleChangetitle(event) {
    this.setState({
      libelleExcursionInputText: event.target.value
    });
  }

  handleChangePlace(event) {
    this.setState({
      placeExcursionInputText: event.target.value
    });
  }

  handleClose() {
    console.log("click on close");
  }

  handleSave = event => {
    event.preventDefault();
    console.log("click on save");

    const data = {
      libelleMiniExcursion: this.state.libelleExcursionInputText,
      nombrePlaceMiniExcursion: this.state.placeExcursionInputText
    };

    console.log("data", data);
    console.log(
      "titre de l'excursion  : " + this.state.libelleExcursionInputText
    );
    console.log("nombre de place : " + this.state.placeExcursionInputText);

    var initPost = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch("https://localhost:44311/api/MiniExcursion", initPost)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          console.log("response.json() : ", response.json());
          console.log("response.ok test:", response);
          if (response.ok === true) {
            this.setState({
              libelleExcursionInputText: "",
              placeExcursionInputText: ""
            });
          }
          //return response.json();
        }
      })
      .then(data => {
        console.log("Data Stored : " + data);

        console.log(data);
      })
      .catch(error => {
        console.log("error: " + error);
        //this.setState({ requestFailed: true });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="DashboardTool">
          <button
            type="button"
            className="btn btn-success"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            + Ajouter une mini-excursion
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Formulaire Mini-excursion
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputText">
                      Titre de la mini-excursion
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Titre Mini-Excursion"
                      aria-label="MiniExcursion"
                      aria-describedby="textHelp"
                      onChange={this.handleChangetitle.bind(this)}
                      name="title"
                      value={this.state.libelleExcursionInputText}
                    />
                    <small id="textHelp" className="form-text text-muted">
                      Titre : Mettre une information en relation avec le champ.
                    </small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputText">
                      Nombre de places de la mini-excursion (Max)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Nombre de places Mini-Excursion"
                      aria-label="NombrePlaces"
                      aria-describedby="numberHelp"
                      min="1"
                      max="50"
                      value={this.state.placeExcursionInputText}
                      onChange={this.handleChangePlace.bind(this)}
                    />
                    <small id="numberHelp" className="form-text text-muted">
                      Places : Mettre une information en relation avec le champ.
                    </small>
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Publication
                    </label>
                  </div>
                </form>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={this.handleClose}
                  >
                    Fermer
                  </button>
                  {/* Type = button ? */}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleSave.bind(this)}
                  >
                    Créer la mini-excursion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormAddMiniExcursion;

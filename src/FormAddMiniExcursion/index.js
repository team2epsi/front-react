import React from "react";
import "./styles.css";

class FormAddMiniExcursion extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    console.log("click on close");
    this.setState({ show: false });
  }

  handleShow() {
    console.log("click on save");
    this.setState({ show: true });
  }

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
                    <label for="exampleInputText">
                      Titre de la mini-excursion
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Titre Mini-Excursion"
                      aria-label="MiniExcursion"
                      aria-describedby="textHelp"
                    />
                    <small id="textHelp" className="form-text text-muted">
                      Titre : Mettre une information en relation avec le champ.
                    </small>
                  </div>

                  <div className="form-group">
                    <label for="exampleInputText">
                      Nombre de places de la mini-excursion (Max)
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Nombre de places Mini-Excursion"
                      aria-label="NombrePlaces"
                      aria-describedby="numberHelp"
                      min="1"
                      max="50"
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
                    <label className="form-check-label" for="exampleCheck1">
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
                    onClick={this.handleShow}
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

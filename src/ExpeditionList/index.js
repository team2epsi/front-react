import React from "react";
import "./styles.css";
import ExpeditionItem from "../ExpeditionItem";
import FormAddMiniExcursion from "../FormAddMiniExcursion";

const ExpeditionList = props => (
  <React.Fragment>
    <FormAddMiniExcursion />

    <div className="ProductList">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Expédition</th>
            <th scope="col">Nombre de places</th>
            <th scope="col">Voir</th>
            <th scope="col">Modifier</th>
            <th scope="col">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {props.excursions.length > 0 ? (
            props.excursions.map(excursion => (
              <ExpeditionItem
                key={excursion.reference}
                id={excursion.reference}
                titleExpedition={excursion.libelleMiniExcursion}
                placesExpedition={excursion.nombresPlaces}
              />
            ))
          ) : (
            <div className="noresult">Pas d'expédition disponible...</div>
          )}
        </tbody>
      </table>
    </div>
  </React.Fragment>
);

export default ExpeditionList;

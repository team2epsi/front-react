import React from "react";
import "./styles.css";
import ExpeditionItem from "../ExpeditionItem";

const ExpeditionList = props => (
  <div className="ProductList">
    <ul>
      <ExpeditionItem titleExpedition="Balade à la cité du vin" />
      <ExpeditionItem titleExpedition="Visite de Bordeaux" />
    </ul>
    {/* {props.expeditions.length > 0 ? (
      props.expeditions.map(expedition => (
        <ExpeditionCard key={expedition.reference} title={expedition.title} />
      ))
    ) : (
      <p>Pas d'expédition disponible...</p>
    )} */}
  </div>
);

export default ExpeditionList;

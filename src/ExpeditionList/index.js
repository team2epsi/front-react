import React from "react";
import "./styles.css";
import ExpeditionItem from "../ExpeditionItem";

const ExpeditionList = props => (
  <div className="ProductList">
    <ul>
      {props.products.length > 0 ? (
        props.products.map(product => (
          <ExpeditionItem
            key={product.reference}
            titleExpedition={product.title}
          />
        ))
      ) : (
        <p>Pas d'expédition disponible...</p>
      )}
    </ul>
  </div>
);

export default ExpeditionList;

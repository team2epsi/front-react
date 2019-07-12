import React from 'react';
import './styles.css';
import ExpeditionItem from '../ExpeditionItem';
import FormAddMiniExcursion from '../FormAddMiniExcursion';

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
            <th scope="col">Edit</th>
            <th scope="col">Clear</th>
          </tr>
        </thead>
        <tbody>
          {props.products.length > 0 ? (
            props.products.map(product => (
              <ExpeditionItem
                key={product.reference}
                id={product.reference}
                titleExpedition={product.libelleMiniExcursion}
                placesExpedition={product.nombresPlaces}
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

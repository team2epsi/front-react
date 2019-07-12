import React from 'react';
import './styles.css';

const ExpeditionItem = props => (
  // <li className="ExpeditionLi">
  //   <strong>Expédition : </strong>
  //   {props.titleExpedition} - <strong>Places : </strong>

  // </li>
  <tr>
    <th scope="row">{props.id}</th>
    <td>{props.titleExpedition}</td>
    <td>{props.placesExpedition}</td>
    <td>
      <button type="button" className="btn btn-primary">
        Edit
      </button>
    </td>
    <td>
      <button type="button" className="btn btn-danger">
        Clear
      </button>
    </td>
  </tr>
);

export default ExpeditionItem;

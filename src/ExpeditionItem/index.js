import React from 'react';
import './styles.css';

const ExpeditionItem = props => (
  <tr>
    <th scope="row">{props.id}</th>
    <td>{props.titleExpedition}</td>
    <td>{props.placesExpedition}</td>
    <td>
      <button type="button" className="btn btn-success">
        <a
          title="Voir le détail de l'excursion"
          href={`http://localhost:3000/excursion/read/${props.id}`}
        >
          Voir
        </a>
      </button>
    </td>
    <td>
      <button type="button" className="btn btn-primary">
        <a
          title="Voir le détail de l'excursion"
          href={`http://localhost:3000/excursion/update/${props.id}`}
        >
          Modifier
        </a>
      </button>
    </td>
    <td>
      <button type="button" className="btn btn-danger">
        Supprimer
      </button>
    </td>
  </tr>
);

export default ExpeditionItem;

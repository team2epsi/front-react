import React from 'react';

class ButtonDeleteMiniExcursion extends React.Component {
  handleConfirm() {
    const confirm = window.confirm(`Voulez-vous supprimer l'expédition ${this.props.titleExpedition} ?`);

    if (confirm) {
      this.handleDelete();
      console.log('Deleted ' + this.props.id);
    } else {
      console.log('Not Deleted');
    }
  }

  handleDelete() {
    var initDelete = {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(`https://localhost:44311/api/MiniExcursion/${this.props.id}`, initDelete)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          console.log(this.props.id + ' successfully deleted');
          window.location.reload();
        }
      })
      .catch(error => {
        console.log('error: ' + error);
      });
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          this.handleConfirm();
        }}
      >
        Supprimer
      </button>
    );
  }
}

export default ButtonDeleteMiniExcursion;

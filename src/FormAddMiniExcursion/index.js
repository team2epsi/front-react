import React from "react";
import "./styles.css";
import { Button, Modal } from "react-bootstrap";

// const FormAddMiniExcursion = props => (
//   <React.Fragment>
//     <div className="DashboardTool">
//       {/* <!-- Button trigger modal --> */}
//       <button
//         type="button"
//         className="btn btn-success"
//         data-toggle="modal"
//         data-target="#exampleModalLong"
//       >
//         + Ajouter une mini-excursion
//       </button>
//     </div>

//     {/* <!-- Modal --> */}
//     <div
//       className="modal fade"
//       id="exampleModalLong"
//       tabIndex="-1"
//       role="dialog"
//       aria-labelledby="exampleModalLongTitle"
//       aria-hidden="true"
//     >
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title" id="exampleModalLongTitle">
//               Modal title
//             </h5>
//             <button
//               type="button"
//               className="close"
//               data-dismiss="modal"
//               aria-label="Close"
//             >
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">...</div>
//           <div className="modal-footer">
//             <button
//               type="button"
//               className="btn btn-secondary"
//               data-dismiss="modal"
//             >
//               Close
//             </button>
//             <button type="button" className="btn btn-primary">
//               Save changes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </React.Fragment>
// );

// export default FormAddMiniExcursion;

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
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <React.Fragment>
        <div className="DashboardTool">
          <Button
            className="btn btn-success"
            variant="primary"
            onClick={this.handleShow}
          >
            + Ajouter une mini-excursion
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

//   render(<Example />);

export default FormAddMiniExcursion;

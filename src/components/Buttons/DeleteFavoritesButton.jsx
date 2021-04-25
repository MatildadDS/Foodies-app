<<<<<<< HEAD
import React from "react";
import "./Buttons.scss";

class DeleteFavorit extends React.Component {
  Delete() {
    localStorage.clear();
  }

  render() {
    console.log(this.props.onClick);
    return (
      <button onClick={() => this.Delete()} className="ButtonAdd">
        Delete
      </button>
    );
  }
}

export default DeleteFavorit;
=======

>>>>>>> 565c358de7bcade55cf19e99dbe39a1ac32601e5

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

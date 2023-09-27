import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h2>{greeting}</h2>
      </div>
    </div>
  );
}

export default ItemListContainer;

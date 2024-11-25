import React from "react";
import "./App.css";

const Item = ({ name, isPacked }) => {
  const itemClass = isPacked ? "packed" : "unpacked";

  return (
    <div className="flexRow spaceBetween">
      <div className={`item ${itemClass}`}>
        <div>{name}</div>
      </div>
      <div>
        {isPacked ? (
          <img className="button" src="./public/packed.png" />
        ) : (
          <img className="button" src="./public/unpacked.png" />
        )}
      </div>
    </div>
  );
};

export default Item;
import React from "react";
import Item from "./Item";
import "./App.css";

const PackageList = ({ title, items }) => {
  return (
    <div className="package flexCol">
      <h1 className="title">{title}</h1>
      {items.map((item) => (
        <Item name={item.name} isPacked={item.isPacked} />
      ))}
    </div>
  );
};

export default PackageList;
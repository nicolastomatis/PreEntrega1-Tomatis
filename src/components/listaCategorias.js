import React from "react";

function CategoryList() {
  const categories = ["Electrónica", "Ropa", "Hogar", "Juguetes"];

  return (
    <ul className="list-group">
      {categories.map((category, index) => (
        <li key={index} className="list-group-item">
          <a href="#">{category}</a>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;

import React from 'react';

const items = ["Item 1", "Item 2", "Item 3"];

const ItemList = () => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default ItemList;

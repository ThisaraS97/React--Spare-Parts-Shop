// ProductItem.js

import React from 'react';

const ProductItem = ({ name, description, imageUrl }) => {
  return (
    <div className="product-item">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default ProductItem;

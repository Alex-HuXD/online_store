import React from 'react';

import './collection-item.scss';

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="item-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="item-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;

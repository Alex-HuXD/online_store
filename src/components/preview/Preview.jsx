import './preview.scss';
import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';

const Preview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="category-preview">
        {items.slice(0, 4).map(({ id, ...otherItemProps }) => {
          return <CollectionItem key={id} {...otherItemProps} />;
        })}
      </div>
    </div>
  );
};

export default Preview;

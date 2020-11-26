import React from 'react';
import './Breadcrumb.scss'

const Breadcrumb = props => {
  const arrow = (() =>{
    return <span className="arrow-breadcrumb">{'>'}</span>
  });
  return (
    <>
      <ul className="meli-breadcrumb">
        <li>pepe {arrow()}</li>
        <li>Alfonso</li>
      </ul>
    </>
  );
};

export default Breadcrumb;
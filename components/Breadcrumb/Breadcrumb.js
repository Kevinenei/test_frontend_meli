import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = props => {
  const arrow = (() => {
    return <span className="arrow-breadcrumb">{'>'}</span>
  });

  return (
    <>
      <ul className="meli-breadcrumb">
        {props.categories.map(function (e, i) {
          return <li key={i}>{e.name} {props.categories.length !== i + 1 && arrow()}</li>
        })
        }
      </ul>
    </>
  );
};

Breadcrumb.defaultProps = {
  categories: [{ id: "ML1", name: "test" }, { id: "ML1", name: "test2" }],
}

Breadcrumb.propTypes = {
  categories: PropTypes.array
}

export default Breadcrumb;
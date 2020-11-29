import React from 'react';
import './ProductInfo.scss'
import { priceFormat } from '../../utils/index';
import PropTypes from 'prop-types';


const ProductInfo = props => {
  return (
    <>
      <div className="ui-productinfo-img-title">
        <div className="ui-productinfo-img-wrap">
          <img
            src={props.picture_url}
            alt={props.title}
            style={{ width: props.picture_size.substring(0, 3) + 'px' }}
          />
        </div>
        <div className="ui-productinfo-left-title-wrap">
          <span className="ui-productinfo-subtitle">{props.condition} - {props.sold_quantity} Vendidos</span>
          <h1 className="ui-productinfo-title">{props.title}</h1>
          <div className="ui-productinfo-price-wrap">
            <span>$</span>
            <span>{priceFormat(props.price_amount)}</span>
          </div>
          <button className="ui-productinfo-button-buy">
            Comprar Ahora
          </button>
        </div>
      </div>
      <div className="ui-productinfo-desc-wrap">
        <h2>Descripción Producto</h2>
        <p>{props.description}</p>
      </div>
    </>
  );
};

ProductInfo.defaultProps = {
  picture_url: "https://http2.mlstatic.com/D_641268-MLA43654417348_102020-O.jpg",
  title: "iPhone 11 64 Gb Blanco",
  picture_size: "259x500",
  condition: "Nuevo",
  sold_quantity: "2",
  price_amount: 159000,
  description: "Texto de test"
}

ProductInfo.propTypes = {
  picture_url: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  picture_size: PropTypes.string,
  condition: PropTypes.string,
  sold_quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price_amount: PropTypes.number,
  description: PropTypes.string
}

export default ProductInfo;
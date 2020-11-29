import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import { priceFormat } from '../../utils/index';

const ProductList = props => {
  return (
    <div className="ui-search-productlist">
      <Link href={'/items/' + props.id} >
        <img
          src={props.thumbnail}
          alt={props.title}
          width='180px'
          height='180px'
          className="ui-thumbnail"
        />
      </Link>
      <div className="ui-search-result__content-wrapper">
        <div className="ui-price">
          <span>$</span>
          <span>{priceFormat(props.price)}</span>
          {props.free_shipping &&
            <Image
              src="/ic_shipping.png"
              alt="Envio Express"
              width={18}
              height={18}
              className="envio-icon"
            />
          }
        </div>
        <Link href={'/items/' + props.id}>
          <a><h2 className="ui-search-title">{props.title}</h2></a>
        </Link>
      </div>
      <div className="ui-search-state-name">
        <span>{props.state_name}</span>
      </div>
    </div>
  );
};

ProductList.defaultProps = {
  id: 'MLA828617891',
  title: "Producto Test",
  price: "800",
  thumbnail: 'https://http2.mlstatic.com/D_931634-MLA42289477841_062020-O.jpg',
  state_name: 'Buenos Aires',
  free_shipping: true

}

ProductList.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  thumbnail: PropTypes.string,
  state_name: PropTypes.string,
  free_shipping: PropTypes.bool
}

export default ProductList;
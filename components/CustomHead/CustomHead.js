import Head from 'next/head'
import React from 'react';
import PropTypes from 'prop-types';

const CustomHead = props => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.11.0/mercadolibre/favicon.svg" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content={props.description}
      />
    </Head>
  );
};

CustomHead.defaultProps = {    
  title: "Kevin Enei - Test Práctico - Frontend MELI",
  description:"Desarrollo en React con Next js y Node para Mercado Pago en Meli"
}

CustomHead.propTypes = {
  title:PropTypes.string,
  description:PropTypes.string
}

export default CustomHead;
import React, { useEffect, useState } from 'react';
import SearchHeader from '../../components/SearchHeader'
import dynamic from 'next/dynamic'
const Breadcrumb = dynamic(() => import('../../components/Breadcrumb'))
const ProductInfo = dynamic(() => import('../../components/ProductInfo'))
const NotFound = dynamic(() => import('../../components/NotFound'))
const CustomHead = dynamic(() => import('../../components/CustomHead'))



const ProductPage = props => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    try {
      const api = await fetch(`${props.url}/items/${props.id}`);
      const data = await api.json();
      setCategories(data.categories);
      setItem(data.item[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);



  return (
    <div className="container">
      {item.id !== undefined ?
        //Params For SEO
        <CustomHead title={item.title} description={item.description.substring(0, 160)}></CustomHead>
        :
        <CustomHead></CustomHead>
      }
      <SearchHeader></SearchHeader>
      {item.title !== undefined &&
        <div className="standarwrap">
          <Breadcrumb categories={categories}></Breadcrumb>
        </div>
      }
      {item.id !== undefined &&
        <main className="main standarwrap bg-white">
          <ProductInfo
            id={item.id}
            price_amount={item.price.amount}
            picture_url={item.picture}
            picture_size={item.picture_size}
            state_name={item.title}
            title={item.title}
            description={item.description}
            condition={item.condition}
            sold_quantity={item.sold_quantity}
          >
          </ProductInfo>
        </main>
      }
      {
        (item.id === undefined && !loading) &&
        <NotFound title="Parece que esta página no existe"></NotFound>
      }
      {
        loading &&
        <NotFound title="Cargando..."></NotFound>
      }
      <footer className="footer">

      </footer>
    </div>
  )
}

ProductInfo.defaultProps = {
  id: 'MLA828617891',
  categories: [{ id: "ML1", name: "bazar" }, { id: "ML1", name: "lavarropas" }],
  price_amount: "8002",
  price_currency: "ARS",
  price_decimals: "0.5",
  picture_url: 'http://http2.mlstatic.com/D_908826-MLA40744019686_022020-O.jpg',
  picture_size: "500x435",
  state_name: 'Buenos Aires',
  free_shipping: true,
  title: "Lavarropas"
}


export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  const { params } = context;
  const { id } = params
  return {
    props: { url: API_URL, id: id }, // will be passed to the page component as props
  }
}
export default ProductPage;
import SearchHeader from '../components/SearchHeader'
import CustomHead from '../components/CustomHead'
import dynamic from 'next/dynamic'

const Breadcrumb = dynamic(() => import('../components/Breadcrumb'))
const ProductList = dynamic(() => import('../components/ProductList'))

const Items = props => {
  const items = props.data.items;
  const categories = props.data.categories;

  return (
    <div className="container">
      <CustomHead title={categories[0].name}></CustomHead>
      <SearchHeader></SearchHeader>
      <div className="standarwrap">
        <Breadcrumb categories={categories}></Breadcrumb>
      </div>
      <main className="main standarwrap">
        {
          items.length &&
          items.map(function (item, i) {
            return <ProductList
              id={item.id}
              title={item.title}
              price={item.price.amount}
              thumbnail={item.picture}
              state_name={item.state_name}
              free_shipping={item.free_shipping}
              key={i}>
            </ProductList>
          })
        }
      </main>
      <footer className="footer"> </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  const { query, res } = context;
  try {
    const api = await fetch(`${API_URL}/items?q=${query.search}`);
    const data = await api.json();
    return {
      props: { data: data }, // will be passed to the page component as props
    }
  } catch (error) {
    res.writeHead(301, { Location: "/home" }).end()
  }

}


export default Items;
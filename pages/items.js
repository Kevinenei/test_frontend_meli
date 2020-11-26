import SearchHeader from '../components/SearchHeader'
import Breadcrumb from '../components/Breadcrumb'
import CustomHead from '../components/CustomHead'
import ProductList from '../components/ProductList'

const Items = props => {
  console.log(props)
  const items = props.data.items;
  return (
    <div className="container">
      <CustomHead></CustomHead>
      <SearchHeader></SearchHeader>
      <main className="main standarwrap">
        <Breadcrumb></Breadcrumb>
        {
          items.map(function (item, i) {
            return <ProductList
              title={item.title}
              price={item.price}
              thumbnail={item.thumbnail}
              state_name={item.address.state_name}
              free_shipping={item.shipping.free_shipping}
              key={i}>
            </ProductList>
          })
        }
      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  console.log(API_URL);
  const { query } = context;
  const res = await fetch(`${API_URL}/items?q=${query.search}`);
  const data = await res.json();
  return {
    props: { data: data }, // will be passed to the page component as props
  }
}


export default Items;
import SearchHeader from './../components/SearchHeader'
import Breadcrumb from './../components/Breadcrumb'
import CustomHead from './../components/CustomHead'

export default function Home() {
  return (
    <div className="container">
      <CustomHead></CustomHead>
      <SearchHeader></SearchHeader>
      <main className="main standarwrap">
        <Breadcrumb></Breadcrumb>
      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}

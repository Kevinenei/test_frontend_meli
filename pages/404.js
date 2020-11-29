import SearchHeader from './../components/SearchHeader'
import CustomHead from './../components/CustomHead'
import NotFound from './../components/NotFound'


export default function Home() {
  return (
    <div className="container">
      <CustomHead></CustomHead>
      <SearchHeader></SearchHeader>
      <main className="main standarwrap">
        <NotFound title="UPS ! 404"></NotFound>
      </main>
      <footer className="footer"></footer>
    </div>
  )
}

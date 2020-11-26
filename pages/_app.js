import '../styles/globals.scss'
import useGlobalState from './../store/useGlobalState';
import Context from './../store/context';

function MyApp({ Component, pageProps }) {
  const store = useGlobalState();
  return (
    <>
      <Context.Provider value={store}>
        <Component {...pageProps} />
      </Context.Provider>
    </>
  )

}

export default MyApp

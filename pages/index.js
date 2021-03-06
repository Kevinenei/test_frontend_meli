import React, { useEffect, useContext } from 'react';
import SearchHeader from './../components/SearchHeader'
import CustomHead from './../components/CustomHead'
import NotFound from './../components/NotFound'
import Context from "./../store/context";


export default function Home() {
  const { state, actions } = useContext(Context);
  useEffect(async () => {
    actions({ type: 'setState', payload: { ...state, search: "" } });
  }, []);

  return (
    <div className="container">
      <CustomHead></CustomHead>
      <SearchHeader></SearchHeader>
      <main className="main standarwrap">
        <NotFound title="Bienvenido al test práctico para aspirantes al área de front-end de Mercado Libre."></NotFound>
      </main>
      <footer className="footer"></footer>
    </div>
  )
}

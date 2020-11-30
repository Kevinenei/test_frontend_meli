import React, { useContext } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import './SearchInputs.scss'
import Context from "./../../store/context";
import { useRouter } from 'next/router'

const SearchInputs = () => {
  const router = useRouter()
  const { state, actions } = useContext(Context);

  const writeWord = (product) => {
    actions({ type: 'setState', payload: { ...state, search: product } });
  }

  const handleKeypress = e => {
    if (e.charCode === 13) {
      actions({ type: 'setState', payload: { ...state, search: state.search } });
      e.preventDefault()
      router.push(state.search.length ? '/items?search=' + state.search : '/');
    }
  };



  return (
    <form className="search">
      <input
        type="text"
        className="search_input"
        placeholder="Nunca dejes de buscar"
        onChange={(e) => writeWord(e.target.value)}
        onKeyPress={handleKeypress}
        value={state.search}
        aria-label="Ingresá lo que quieras encontrar"
        placeholder="Buscar productos, marcas y más…"
        maxLength="120"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
      />
      <Link href={state.search.length ? '/items?search=' + state.search : '/'}><button className="search__button" >
        <Image
          src="/ic_Search.png"
          alt="Mercado Libre Logo"
          width={18}
          height={18}
        />
      </button></Link>
    </form>
  );
};

export default SearchInputs;
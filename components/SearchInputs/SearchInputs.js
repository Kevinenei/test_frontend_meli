import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import './SearchInputs.scss'
import Context from "./../../store/context";
import { useRouter } from 'next/router'

const SearchInputs = props => {
  const router = useRouter()
  const { state, actions } = useContext(Context);
  const [searchword, setSearchWord] = useState("");
  useEffect(function () {
    console.log(state);
  }, []);

  const writeWord = (product) => {
    setSearchWord(product);
  }

  const handleKeypress = e => {
    if (e.charCode === 13) {
      e.preventDefault()
      router.push('/items?search=' + searchword);
    }
  };



  return (
    <div className="search">
      <input
        type="text"
        className="search_input"
        placeholder="Nunca dejes de buscar"
        onChange={(e) => writeWord(e.target.value)}
        onKeyPress={handleKeypress}
      />
      <Link href={'/items?search=' + searchword}><button className="search__button" >
        <Image
          src="/ic_Search.png"
          alt="Mercado Libre Logo"
          width={18}
          height={18}
        />
      </button></Link>
    </div>
  );
};

export default SearchInputs;
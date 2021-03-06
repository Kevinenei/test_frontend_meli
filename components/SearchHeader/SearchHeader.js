import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import SearchInputs from './../SearchInputs';
import './SearchHeader.scss'

const SearchHeader = () => {
  return (
    <>
      <header>
        <div className="standarwrap headerwrap">
          <Link href='/'>
            <a aria-label="Ir al contenido principal">
              <Image
                src="/Logo_ML.png"
                alt="Mercado Libre Logo"
                width={53}
                height={36}
                className="nav-logo"
              />
            </a>
          </Link>
          <SearchInputs></SearchInputs>
        </div>
      </header>
    </>
  );
};


export default SearchHeader;
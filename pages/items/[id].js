import React, { useEffect, useState } from 'react';
import SearchHeader from '../../components/SearchHeader'
import Breadcrumb from '../../components/Breadcrumb'
import CustomHead from '../../components/CustomHead'

const Items = props => {
  console.log(props)
  const items = props.data.items;
  use
  return (
    <div className="container">
      <CustomHead></CustomHead>
      <SearchHeader></SearchHeader>
      <main className="main standarwrap">
        <Breadcrumb></Breadcrumb>
        <h1>saf</h1>
      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}



export default Items;
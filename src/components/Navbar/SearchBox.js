import React, { useState } from 'react';
import searcheImg from "./search.svg"
import './styles/SearchBar.scss'
const SearchBox =(props)=>{
  return<div className="searchBox">
    <input  type="search" className="search"
    // it will take the placeholder value of it's props
     placeholder={props.placeholder}
     // it will take the function handelChange in props
     onChange={props.handelChange}
     
     
     />
     
<img className="serchImg" src={searcheImg}></img>
     </div>
}

export default SearchBox
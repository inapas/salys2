import React, {useEffect} from 'react';
import './Country.css'

export const Search = ({searchCountries,searchInp}) => {
  return(
  <div className='virsus'>
      <input className='inp' type="search" name='search' id='search' placeholder='Search by name...' value={searchInp} onChange={(e)=>searchCountries(e.target.value)} />

  </div>
  )
};

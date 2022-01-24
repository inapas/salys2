import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Countries.css'
import { Search } from './Search'
let url = 'https://restcountries.com/v3.1/all'

const Countries= () => {
    const [countries, setCountries] = useState([])
    const [filtered, setFiltered] = useState([])
    const [searchInp, setSearchInp] = useState("")
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() =>{
        const fetchCountriesData = async () => {
                    const response = await fetch(url)
                    const countries = await response.json()
                    setCountries(countries)
                }

          fetchCountriesData()
          setIsLoading(false)
    }, [])

    const searchCountries = (searchValue) =>{
        setSearchInp(searchValue)

        if(searchInp){
            const filteredCountries = countries.filter((country)=>
            Object.values(country).join("").toLowerCase().includes(searchValue.toLowerCase()))
        setFiltered(filteredCountries)
        }else{
            setFiltered(countries)
        }
    }
    

    return (
    <div>
        
    <Search searchCountries ={searchCountries} searchInp={searchInp} />   
        {searchInp.length > 0 ?<div className='countries'> 
        
        {filtered.map(({name, flags, population, capital, region, index}) =>{
            return ( <div key={index} >
                        <img src={flags.png} alt={name.common} />
                        <div className="info">
                        <h3>{name.common}</h3>
                        <div className='reg'>
                            <p><span>Region:</span> {region}</p>
                            <p><span>Capital:</span> {capital}</p>
                            <p><span>Population:</span> {population}</p>
                            
                        </div>
                        <div>
                        <Link to = {`/countries/${name.common}`} className='more'>More</Link>
                        </div>
                        </div>
                    </div>
                 )
             })} 
    </div>
    
    :
    <div className='countries'> 
        
        {countries.map(({name, flags, population, capital, region, index}) =>{
            return ( <div key={index}>
                        <img src={flags.svg} alt={name.common} />
                        <div className="info">
                        <h3>{name.common}</h3>
                        <div className='reg'>
                            <p><span>Region:</span> {region}</p>
                            <p><span>Capital:</span> {capital}</p>
                            <p><span>Population:</span> {population}</p>
                            
                        </div>
                        <div>
                        <Link to = {`/countries/${name.common}`} className='more'>More</Link>
                        </div>
                        </div>
                    </div>

                 )
             })} 
        
    </div>
        }
    </div>
    ) 
}

export default Countries






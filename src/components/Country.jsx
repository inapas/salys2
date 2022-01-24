import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import './Country.css'

export default function Country() {
  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { name } = useParams()

  useEffect(() => {
    const fetchCountryData = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      )
      const data = await res.json()
      setCountry(data)
      setIsLoading(false)
    }

    fetchCountryData()
  }, [name.common])

  return (
    <div className="country">
      {isLoading ? (
        <h1 className="load"> Loading...</h1>): 
        (
        <div >
          <Link to="/" className="back"> &larr; Back</Link>
          {country.map(({name, borders, flags, population, area, capital,index}) => (
            <div key={index}>
                <div className="cntr">
                <img src={flags.png} alt={name.common} />
                <h1>{name.common}</h1>
                <br></br>
                <h3><span>Capital: </span>{capital}</h3>
                <br></br>
                <h3><span>Population: </span>{population}</h3>
                <br></br>
                <h3><span>Area: </span>{area} &#13218;</h3>
                <br></br>
                <h3><span>Borders:</span> 
                 {borders?borders.map((border, index) => {
                    return (
                            <ul key={index}>
                                <li>{border}</li>
                            </ul>
                            )
                  }):"none"
                } 
                </h3>
                <br></br>
                <h3><span>Langueges: </span>
                {
                country[0].languages?Object.keys(country[0].languages).map(key => {
                    return(
                         <ul key={key}>
                         <li>{country[0].languages[key]}</li>
                         </ul>
                           )
                    }):"No info given..."
                }
                </h3>
                <br></br>
                <h3><span>Currencies: </span> {
                 country[0].currencies ? Object.keys(country[0].currencies).map(key=>{
                    return (
                            <ul key={key}>
                            <li>{key} - {country[0].currencies[key].name}</li>
                            </ul>
                             )
                    }): "No info given..." 
                }
                </h3>
                </div>

             
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


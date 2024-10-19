import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, capital, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithParams = () => handleVisitedCountry(country);

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'red' : 'white'}}>{name.common}</h3>
            <img className='img' src={flags.png} alt="" />
            <p>Official: {name.official}</p>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Visited Flags</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit.'}
        </div>
    );
};

export default Country;
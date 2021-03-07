import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountries] = useState([]);

    const {name, capital, population, area, subregion} = country;

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data[0]))
    },[])
    return (
        <div className="country-container">
            <h2>Country Name: {name}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Subregion: {subregion}</p>
        </div>
    );
};

export default CountryDetail;
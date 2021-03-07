import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'

const Home = () => {
    const [countries,setCountries] = useState([]);

    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div className="home">
            <h1>Total countries: {countries.length}</h1>
            <div className="all-country">
                {
                    countries.map((country) => <Country key={country.alpha3Code} country={country}></Country>)
                }
            </div>
        </div>

    );
};

export default Home;
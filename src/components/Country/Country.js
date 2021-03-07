import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const {name , flag} = props.country;
    let history = useHistory();

    const handleClick =(name) =>{
        const url =`/detail/${name}`;
        history.push(url);
    }
    

    return (
        <div className="container">
            <div className="country-container">
                <img src={flag} alt=""/>
                <h1>{name}</h1>
                <p><Link to={`/detail/${name}`}>Click Here for more details</Link></p>
                <button onClick={() => handleClick(name)}>Click Me</button>
            </div>
        </div>
    );
};

export default Country;
import { useEffect, useState } from "react";
import ShowCountry from "./ShowCountry";
import './countrystyle.css';
import Watch from "./Watch";
const Countires = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();
                console.log(data);
                // Assuming the API returns an array of countries
                setCountry(data);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }
        , []);
    const [visitedCountries, setVisitedCountries] = useState([]);
    function visitedFunc(country) {
        console.log(country);
        const newvisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newvisitedCountries);
    }
    return (
        <div>
            <h3>Countries: {country.length}</h3>
            <h3>Countries I visited {visitedCountries.length}</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
                {
                    visitedCountries.map(country => <li key={country.cca2} style={{display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'space-between',margin: '10pxc'}}>{country.name.common} <img src={country.flags.png} alt="country" style={{width:'80px', height: '50px'}} /></li>)
                }
            </ul>
            <div className="country-container">
                {
                    country.map(country => <ShowCountry country={country} key={country.cca2} visitedFunc={visitedFunc}></ShowCountry>)
                }
            </div>
            <div>
                <Watch></Watch>
            </div>
        </div>
    );
};

export default Countires;
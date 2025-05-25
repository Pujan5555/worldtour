import { useState } from "react";

const ShowCountry = ({country, visitedFunc}) => {
    const { name , flags, area, cca3} = country;
    // Assuming 'name' is an object with a 'common' property
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    const beforeVisited = () => visitedFunc(country);
    return (
        <div style={{ border: "1px solid yellow", margin: "10px", padding: "10px" ,borderRadius: "10px"}} className={visited && 'visited'}>
            <p>Name: {name.common}</p>
            <p>Official: {name.official}</p>
            <img src={flags.png} alt="country" />
            <p>Area: {area}</p>
            <p>CODE: {cca3}</p>
            <button style={{margin: '10px'}} onClick={beforeVisited}>Mark as visited</button>
            <br />
            <button onClick={handleVisited}>{!visited?"Let's Go":"Visited"}</button>
            <h2>{visited? 'I have visited': 'I want to go'}</h2>
        </div>
    );
};

export default ShowCountry;
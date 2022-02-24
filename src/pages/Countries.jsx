import * as React from 'react';
import CountryCard from "../components/CountryCard";
import useFetch from '../utils/useFetch';

export default function Countries() {
    const { data: allCountries } = useFetch('https://restcountries.com/v2/all?fields=name,region,population,capital,flags');
    console.log(allCountries);

    return (
        <div style={{inline: "block"}}>
        {allCountries.map((country) => country.name && (
            <CountryCard 
            key={country.name}
            name={country.name}
            region={country.region}
            population={country.population}
            capital={country.capital}
            flag={country.flags.svg}
            />
        ))}
        </div>
    )}

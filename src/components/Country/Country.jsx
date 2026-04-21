import React from "react";

const Country = ({ country }) => {
  return (
    <div className="card">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <h3>Name: {country.name.official}</h3>
      <p>ccn3: {country.ccn3.ccn3}</p>
      <p>
        Currencies:
        {Object.values(country.currencies.currencies || {}).map((c) => c.name)}
      </p>
      <p>
        Symbol:
        {Object.values(country.currencies.currencies || {}).map(
          (c) => c.symbol,
        )}
      </p>
      <p>Capital: {country.capital.capital}</p>
      <p>Region: {country.region.region}</p>
      {/* <p>
        Languages:
        {Object.values(country.languages.languages || {}).map((ln) => ln.languages)}
      </p> */}
      <p>Area: {country.area.area}</p>
      <p>cca3: {country.cca3.cca3}</p>
      <p>Population: {country.population.population}</p>
      <p>Continents: {country.continents.continents}</p>
      {/* <p>Currencies: {country.currencies.currencies}</p> */}
    </div>
  );
};

export default Country;

import Image from "next/image";
import React from "react";
import "./cardCountry-styles.css";

type Props = {
  country: ICountry;
};

function CardCountry({ country }: Props) {
  return (
    <div className="card-container">
      <div className="h-[180px] relative">
        <Image src={country.flagImg} alt={country.name} fill sizes="2000" />
      </div>
      <div className="card-details grid p-5">
        <h2>{country.name}</h2>
        <span>
          <span className="font-bold">Population: </span>
          {country.population.toLocaleString()}
        </span>
        <span>
          <span className="font-bold">Region: </span>
          {country.region}
        </span>
        <span>
          <span className="font-bold">Capital: </span>
          {country.capital}
        </span>
      </div>
    </div>
  );
}

export default CardCountry;

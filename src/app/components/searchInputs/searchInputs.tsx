import { IconSearch } from "@/app/assets/search-svgrepo-com";
import { IconDown } from "@/app/assets/down-chevron-svgrepo-com";
import React, { useState } from "react";
import style from "./style.module.css";

type Props = {
  handleSearch: (
    event: React.KeyboardEvent<HTMLInputElement>,
    val: string,
    callbacks: () => void
  ) => void;
  handleFilter: (val: string, callbacks: () => void) => void;
};

function SearchInputs({ handleSearch, handleFilter }: Props) {
  const [filterCountry, setFilterCountry] = useState("");
  const [searchCountry, setSearchCountry] = useState("");

  const handleResetSearch = () => {
    setSearchCountry("");
  };

  const handleResetFilter = () => {
    setFilterCountry("");
  };

  return (
    <div className={style.container}>
      <div className={style.input_container}>
        <div className={`${style.icon} ${style.search}`}>
          <IconSearch />
        </div>
        <input
          type="text"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
          onKeyDown={(e) => handleSearch(e, searchCountry, handleResetFilter)}
          placeholder="Search for a country..."
        />
      </div>
      <div className={`${style.select_container}`}>
        <div className={`${style.icon} ${style.down}`}>
          <IconDown />
        </div>
        <select
          value={filterCountry}
          onChange={(e) => {
            handleFilter(e.target.value, handleResetSearch);
            setFilterCountry(e.target.value);
          }}>
          <option value="">Filter Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default SearchInputs;

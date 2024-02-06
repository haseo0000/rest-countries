"use client";

import React, { useEffect, useState } from "react";
import "./search-styles.css";
import CardCountry from "../components/cardCountry/cardCountry";
import SearchInputs from "../components/searchInputs/searchInputs";
import Link from "next/link";

function Screen() {
  const [data, setData] = useState<ICountry[]>([]);
  const [listData, setListData] = useState<ICountry[]>([]);

  const getData = async () => {
    const res = await fetch(`/api`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const dataJson = await res.json();
    const mapData: ICountry[] = dataJson.map((item: any) => {
      return {
        name: item.name,
        population: item.population,
        region: item.region,
        capital: item.capital,
        flagImg: item.flags.png,
      };
    });
    setData(mapData);
    setListData(mapData);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilter = (val: string, callbacks: () => void) => {
    callbacks();

    if (val === "") {
      setListData(data);
      return;
    }

    const temp = [...data].filter((item) => item.region === val);
    setListData(temp);
  };

  const handleSearch = (
    event: React.KeyboardEvent<HTMLInputElement>,
    val: string,
    callbacks: () => void
  ) => {
    if (event.key === "Enter") {
      callbacks();
      if (val === "") {
        setListData(data);
        return;
      }

      const temp = [...data].filter((item) =>
        item.name.toLowerCase().includes(val.toLowerCase())
      );
      setListData(temp);
    }
  };

  return (
    <div>
      <SearchInputs handleFilter={handleFilter} handleSearch={handleSearch} />
      <div className="Countries-container">
        {listData.map((country) => (
          <Link key={country.name} href={`/details/${country.name}`}>
            <CardCountry country={country} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Screen;

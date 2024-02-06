import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { name: string };
};

async function getData(name: string) {
  debugger;
  const res = await fetch(`http://localhost:3000/api/${name}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  // console.log({ data });
  const mapData: ICountryDetails = {
    name: data.name,
    population: data.population,
    region: data.region,
    capital: data.capital,
    flagImg: data.flags.png,
    nativeName: data.nativeName,
    subregion: data.subregion,
    topLevelDomain: data.topLevelDomain,
    currencies: data.currencies[0].code,
    languages: data.languages.map((item: any) => item.name),
    borders: data.borders,
  };

  return mapData;
}

export default async function Details({ params }: Props) {
  const data: ICountryDetails = await getData(params.name);

  return (
    <div className={styles.container}>
      <Link className={styles.backBtn} href={`/`}>
        Back
      </Link>
      <div className={styles.details_container}>
        <div className="relative h-[300px] w-full">
          <Image
            src={data.flagImg}
            alt={data.name}
            fill
            sizes="5000"
            objectFit="contain"
          />
        </div>
        <div className="self-center pb-[1.5rem]">
          <h2 className="text-[2em] mb-10 font-bold lg:mb-5">{data.name}</h2>
          <div className={styles.details_country}>
            <div className="grid gap-[1rem]">
              <div>
                <span className={styles.head}>Native Name: </span>
                <span className={styles.text}>{data.nativeName}</span>
              </div>
              <div>
                <span className={styles.head}>Population: </span>
                <span className={styles.text}>{data.population.toLocaleString()}</span>
              </div>
              <div>
                <span className={styles.head}>Region: </span>
                <span className={styles.text}>{data.region}</span>
              </div>
              <div>
                <span className={styles.head}>Sub Region: </span>
                <span className={styles.text}>{data.subregion}</span>
              </div>
              <div>
                <span className={styles.head}>Capital: </span>
                <span className={styles.text}>{data.capital}</span>
              </div>
            </div>
            <div className="grid content-start  gap-[1rem]">
              <div>
                <span className={styles.head}>Top Level Domain: </span>
                <span className={styles.text}>{data.topLevelDomain[0]}</span>
              </div>
              <div>
                <span className={styles.head}>Currencies: </span>
                <span className={styles.text}>{data.currencies}</span>
              </div>
              <div>
                <span className={styles.head}>Languages: </span>
                {data.languages.map((item, idx) => (
                  <span className={styles.text}>
                    {item + `${idx !== data.languages.length - 1 ? ", " : ""}`}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.border_countries}>
            <span style={{ fontWeight: "bold", minWidth: "fit-content" }}>
              Border Countries:
            </span>
            <div className={styles.border_container}>
              {data.borders?.map((item) => (
                <span key={item} className={styles.borderCty}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

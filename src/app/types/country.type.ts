interface ICountry {
  name: string;
  population: number;
  region: string;
  capital: string;
  flagImg: string;
}

interface ICountryDetails extends ICountry {
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: string;
  languages: string[];
  borders: string[];
}

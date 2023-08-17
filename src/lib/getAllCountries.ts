// function to get all the countries data using REST countries API

export default async function getAllCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,currency,languages,tld,borders,flags,cca3"
  );

  if (!response.ok) {
    throw new Error("Failed to load the data!");
  }

  return response.json();
}

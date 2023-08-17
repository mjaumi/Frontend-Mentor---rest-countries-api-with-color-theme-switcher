// function to get a country data bt CCA3 code using REST countries API

export default async function getCountryByCode(countryCode: string) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryCode}`
  );

  if (!response.ok) {
    throw new Error("No such country exists!!");
  }

  return response.json();
}

// function to get a country name bt CCA3 code using REST countries API

export default async function getCountryNameByCode(countryCode: string[]) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${countryCode.join(
      ","
    )}&fields=name,cca3`
  );

  if (!response.ok) {
    throw new Error("No Country Found!!");
  }

  return response.json();
}

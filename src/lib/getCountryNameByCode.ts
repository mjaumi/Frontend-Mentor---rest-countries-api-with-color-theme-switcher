// function to get a country name bt CCA3 code using REST countries API

export default async function getCountryNameByCode(
  countryCode: string[] | undefined
) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${countryCode?.join(
      ","
    )}&fields=name,cca3`
  );

  return response.json();
}

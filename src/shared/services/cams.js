import apiClient from 'shared/services/apiClient';

export async function fetchCamsList() {
  const response = await apiClient.get(
    'list/country=PL/category=city/orderby=popularity/limit=20?show=webcams:location,image',
  );
  return response.data.result.webcams;
}

function sort(array, key) {
  return array.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
}

export async function fetchCountryList() {
  const response = await apiClient.get('list?show=countries');
  const countries = response.data.result.countries;
  const countriesSorted = sort(countries, 'name');
  return countriesSorted;
}

export async function fetchCityList(country) {
  const response = await apiClient.get(
    `list/country=${country}/limit=20?show=webcams:location,image`,
  );
  const cities = response.data.result.webcams;
  const citiesSorted = sort(cities, 'title');
  return citiesSorted;
}

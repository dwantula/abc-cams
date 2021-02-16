import apiClient from 'shared/services/apiClient';
import { sort } from 'shared/utills/sort';

export async function fetchCamsList() {
  const response = await apiClient.get(
    'list/country=PL/category=city/orderby=popularity/limit=20?show=webcams:location,image',
  );
  return response.data.result.webcams;
}

export async function fetchCountryList() {
  const response = await apiClient.get('list?show=countries');
  const { countries } = response.data.result;
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

import React, { useEffect, useState } from 'react';
import { fetchCountryList, fetchCityList } from 'shared/services/cams';

import Select from 'shared/components/Select/Select';

import './styles.scss';

function Cams() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [chosenCountry, setChosenCountry] = useState('');
  const [chosenCityId, setChosenCityId] = useState('');
  const [chosenCityCamUrl, setChosenCityCamUrl] = useState('');

  useEffect(() => {
    async function getCountry() {
      const countryList = await fetchCountryList();
      setCountries(countryList);
    }
    getCountry();
  }, []);

  useEffect(() => {
    async function getCity() {
      const citiesList = await fetchCityList(chosenCountry);
      setCities(citiesList);
    }
    if (chosenCountry) {
      getCity();
    }
  }, [chosenCountry]);

  function handleCityChange(event) {
    const cityId = event.target.value;
    setChosenCityId(cityId);
    const chosenCityId = cities.find((city) => city.id === cityId);
    setChosenCityCamUrl(chosenCityId.image.current.preview);
  }

  return (
    <div className="cams">
      <div className="cams__select">
        <Select
          placeholder="Choose country"
          value={chosenCountry}
          name="country"
          options={countries.map(({ id, name }) => ({
            label: name,
            value: id,
          }))}
          onChange={(event) => setChosenCountry(event.target.value)}
        />
        {chosenCountry && (
          <Select
            placeholder="Choose city"
            value={chosenCityId}
            name="city"
            options={cities.map(({ id, title }) => ({
              label: title,
              value: id,
            }))}
            onChange={handleCityChange}
          />
        )}
      </div>
      {chosenCityId && (
        <img className="cams__image" src={chosenCityCamUrl} alt="picture" />
      )}
    </div>
  );
}

export default Cams;

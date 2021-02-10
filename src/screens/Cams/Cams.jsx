import React, { useEffect, useState } from 'react';

import { fetchCountryList, fetchCityList } from 'shared/services/cams';
import Select from 'shared/components/Select/Select';
import Spinner from 'shared/components/Spinner/Spinner';

import './styles.scss';

function Cams() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [chosenCountry, setChosenCountry] = useState('');
  const [chosenCityId, setChosenCityId] = useState('');
  const [chosenCityCamUrl, setChosenCityCamUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCountry() {
      setLoading(true);
      const countryList = await fetchCountryList();
      setCountries(countryList);
      setLoading((prevState) => !prevState);
    }
    getCountry();
    setChosenCityId('');
  }, [chosenCountry]);

  useEffect(() => {
    async function getCity() {
      setLoading(true);
      const citiesList = await fetchCityList(chosenCountry);
      setCities(citiesList);
      setLoading((prevState) => !prevState);
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
        {loading === true ? (
          <Spinner />
        ) : (
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
        )}
        {loading === true ? (
          <Spinner />
        ) : (
          chosenCountry && (
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
          )
        )}
      </div>
      <div className="cams__image">
        {chosenCityId === '' ? (
          <p></p>
        ) : (
          chosenCityId && (
            <img className="cams__img" src={chosenCityCamUrl} alt="picture" />
          )
        )}
      </div>
    </div>
  );
}

export default Cams;

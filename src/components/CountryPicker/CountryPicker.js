import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import classes from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = (props) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    }

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={classes.formContol}>
      <NativeSelect defaultValue="" onChange={(event) => props.handleCountryChange(event.target.value)}>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;
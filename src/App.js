import React, { Component } from 'react';
import coronaImage from './images/corona.gif';
import covidTextImage from './images/covid-text-image.png';
import { Cards, Chart, CountryPicker } from './components';
import classes from './App.module.css';
import { fetchData } from './api';

class App extends Component {

  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country)=> {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={classes.container}>
        <img src={covidTextImage} alt="COVID19 Text"/>
        <img src={coronaImage} alt="Corona"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
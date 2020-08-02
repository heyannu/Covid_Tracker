import React, { Component } from 'react';
import { Cards, Charts, CountryPicker } from "./Components"
import './App.css'
import Corona from './images/covid19.png'
import { fetchData } from "./api"
class App extends Component {

  state = {
    data: {},
    country: ''
  }
  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  handlecountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })
  }

  render() {
    return (
      <div className="container" >
        <img src={Corona} className="image" alt="COVID-19"/>
        <Cards data={this.state.data} />
        <CountryPicker handlecountryChange={this.handlecountryChange} />
        <Charts data={this.state.data} country={this.state.country} />
      </div>
    )
  }
}

export default App;

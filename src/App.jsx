import React, { Component } from 'react';
import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import { geocode, getCafeInfo } from './utils/index';
import Map from './Map';
import CafeTable from './CafeTable';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 35.6721142,
        lng: 139.7708253
      },
      place: 'Ginza',
      cafes: []
    };
  }

  setErrorMessage(message){
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0
      }
    })
  }

  handlePlaceSubmit(place) {
    geocode(place)
      .then(({ status, address, location }) => {
        if (status === 'OK'){
          this.setState({ address, location });
          return getCafeInfo(place);
        } else if (status === 'ZERO_RESULTS'){
          this.setErrorMessage('No result.');
        } else {
          this.setErrorMessage('An error happens.');
        }
      })
      .then(cafes => {
        this.setState({ cafes });
      })
      .catch(err => {
        this.setErrorMessage('Communication error.');
      })
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center', color: '#444'}}>Cafe Search</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <div className='result-area' style={{display: 'flex'}}>
          <Map location={this.state.location} />
          <div style={{marginLeft: 20}}>  
            <GeocodeResult 
              address={this.state.address}
              location={this.state.location}
            />
            <h2 style={{marginLeft: 80}}>Result of Searching Cafes</h2>
            <CafeTable cafes={this.state.cafes}/>
          </div>
        </div>
      </div>
    )
  };
}

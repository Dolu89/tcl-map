import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Place from './Place.js';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      stations: []
    }
  }
  
  readData(){
    var self = this;
    fetch('https://download.data.grandlyon.com/ws/rdata/jcd_jcdecaux.jcdvelov/all.json').then(function(response) {
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          self.setState((prevState, props) => {
            return {stations: json.values};
          });
          console.log(json.values)
        });
      } else {
        console.log("Oops, nous n'avons pas du JSON!");
      }
    });
  }
  
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key:"AIzaSyBnV43DVVuh42Oz4HV9BWQpVILPrXkxeVo"}}
        defaultCenter={{lat: 45.7543732, lng: 4.8278179}}
        defaultZoom={13}
      >
        
        {this.state.stations.map(place => {
          return <Place 
          lat={place.lat} 
          lng={place.lng} 
          text={'A'}
          availableBikes={place.available_bikes}
          available_bike_stands={place.available_bike_stands}
          />
        })}
      </GoogleMapReact>
    );
  }
  
  componentDidMount(){
    this.readData();
  }
}

export default App;

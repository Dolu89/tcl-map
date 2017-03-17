import React, { Component } from 'react';

class Place extends Component {
  
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this._onClick = this._onClick.bind(this);
  }
  
  _onClick(){
    
    console.log(this.props.availableBikes)
    console.log(this.props.available_bike_stands)
  }
  
  render() {
    return (
      <div onClick={this._onClick}>
          {this.props.text}
      </div>
    );
  }
}

export default Place;

import React, { Component } from 'react';

class Places extends Component {
  
  render() {
    return (
      <div>
          {this.props.text}
       </div>
    );
  }
  
  componentDidMount(){
      fetch('https://download.data.grandlyon.com/ws/rdata/jcd_jcdecaux.jcdvelov/all.json').then(function(response) {
          var contentType = response.headers.get("content-type");
          if(contentType && contentType.indexOf("application/json") !== -1) {
            return response.json().then(function(json) {
              console.log('json', json)
            });
          } else {
            console.log("Oops, nous n'avons pas du JSON!");
          }
        });
  }
  
}

export default Places;

import React, { Component } from "react";
import EarthWeather from "../Earth/earthweather";
  
   
  
  
   
  //take the value from this then prop this ito marsweather to dispkay in table
  /*
  */
  // address formula --- need to use current weather
  //"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=184b90f195e0b6670ef9fee34b9291e1"
  
  
  
      class CitySearch extends Component {
    
  
           constructor(props) {
              super(props);
              this.state = { 
                lat:"40.71",
              long:"-74.00",
              };
          }
          
        
      
          // need to get the query to show up in the URL fetch
  //set state comes back as undefined, work on this           
           componentDidMount() {
                // Get location of user
                const success = position => {
                  const latitude = position.coords.latitude;
                  const longitude = position.coords.longitude;
                 // console.log(latitude, longitude);
                  this.setState({
                    lat: latitude,
                    long: longitude
                  });
                };
              
                const error = () => {
                  this.setState({
                    lat: 40.71,
                    long: -74.00
                  });
                 alert("Unable to retrieve your location, so here's NY City's Comparison")
                
                };
              
                navigator.geolocation.getCurrentPosition(success, error);
              }
              
              
              /*if ("geolocation" in navigator) {




                navigator.geolocation.getCurrentPosition(function(position) {
                  this.setState({
                 lat:position.coords.latitude,
                 long: position.coords.longitude,
                  })
                });
              } else {
               alert("You browser does support Geolocation- See the comparison with NYC")
              }
            }
*/
      
                    

              
        
  
          render() {
         
            const {lat,long} = this.state;
            console.log(lat,long)
      
      return (
        
          <EarthWeather {...this.state}></EarthWeather>
    
        
      );
    }; 
  }
  
    export default CitySearch;
  

// Below code was for selecting their city, keeping it in case I go with that 
// for browsers that do not let you use html geolocation
/*

function CitySearch() {
  const [city, setCity] = useState(" ");

  const handleInput = event => {
    setCity(event.target.value);
  };

  const logValue = () => {
    console.log(city);
  };

  return (
    <>
    
    <div>
      <input onChange={handleInput} placeholder="Enter name"/>
      <button onClick={logValue}>Log value</button>
    </div>
    </>
  );
}


export default CitySearch;
*/
import React, { Component } from "react";
import EarthWeather from "../Earth/earthweather";
  
   
  
  //Need to rewrite code- currently the state will change, get passed correctly to
  //child component, but I need to re-run the API fetch at that time to use fallback location
  //or user geolocation
   
// Fall back location is around NYC, USA. 

//the Latitude and Longitude states get passed to Earthweather for use with Open Weather API
  
  
  
  
      class CitySearch extends Component {
    
  
           constructor(props) {
              super(props);
              this.state = { 
                lat: [40.71],
          long: [-74.00]
              };
          }
          
         
        componentDidMount(){
          this.handleEvent()
        }
      
  handleEvent = event => {

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

  };
        
          render() {
         
            const {lat,long} = this.state;
            console.log(lat,long)
      
      return (
        <>
      {/*} In Future will fix re-rendering that allows working geolocation for local weather
        <button onClick={this.props.handleEvent}>Click on me</button>*/}
          <EarthWeather lat={this.state.lat} long={this.state.long}></EarthWeather>
    </>
        
      );
    }; 
  }
  
    export default CitySearch;
  

// Below code was for selecting their city, keeping it in case I go with that 
// for browsers that do not let you use html geolocation in the future
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
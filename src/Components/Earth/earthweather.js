
import React, { Component } from "react";
import MarsWeather from "../Mars/marsweather";


 
//take the value from this then prop this ito marsweather to dispkay in table
/*
*/
// address formula --- need to use current weather
//"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=184b90f195e0b6670ef9fee34b9291e1"



    class EarthWeather extends Component {
  

         constructor(props) {
            super(props);
            console.log(this.props)
            this.state = { 
    
    minEarth:[],
    maxEarth: [],
    condition: [],
    earthWind: [],
    icon:[],
    pressure:[]
            //  marsweather: [],
            };
          
        }
        
    
        // need to get the query to show up in the URL fetch
        componentDidMount() {
          const lat= this.props.lat;
          const long= this.props.long;
                     
               console.log(lat,long)
       /*   
          navigator.geolocation.getCurrentPosition((position) => {
           const lat = position.coords.latitude;
           const long= position.coords.longitude;*/
          /// api.openweathermap.org/data/2.5/weather?lat={position.coords.latitude}&lon={position.coords.longitude}&appid={API key}
    const ow_api= process.env.REACT_APP_OPEN_WEATHER;
const owUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${ow_api}&units=metric`;
console.log(owUrl)
            fetch(owUrl)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                  
                 minEarth:response.main.temp_min,
                 maxEarth: response.main.temp_max,
                 earthPressure: response.main.pressure,
                 condition: response.weather[0].main,
                 icon: response.weather[0].icon,
                 earthWind:response.wind.speed
                     
                      
                          
                })
              })
            }

        render() {
        const {minEarth, maxEarth, condition, earthWind, pressure} = this.state;
         console.log(minEarth, maxEarth, condition,earthWind, pressure)

       
    
    return (
      
        <MarsWeather {...this.state}></MarsWeather>
  
      
    );
  }; 
}

  export default EarthWeather;

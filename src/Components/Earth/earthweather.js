
import React, { Component } from "react";
import MarsWeather from "../Mars/marsweather";


 
/* The weather values collected here are then passed to the Marsweather component.
These values populate the Mars vs Earth Comparison chart. I need to rework code,
so that the state change from the citySearch component will trigger the weather
API to refetch.

*/
// address formula --- need to use current weather
//"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=184b90f195e0b6670ef9fee34b9291e1"

    class EarthWeather extends Component {
  

         constructor(props) {
            super(props);
            console.log(props)
            this.state = { 
    
    minEarth:[],
    maxEarth: [],
    condition: [],
    earthWind: [],
    icon:[],
    earthPressure:[]
            };
          
        }
        
        componentDidMount() {
          const lat= this.props.lat;
          const long= this.props.long
                     
               console.log(lat,long)
      
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
              this.forceUpdate()
            }

        render() {
        const {minEarth, maxEarth, condition, earthWind, earthPressure} = this.state;
         console.log(minEarth, maxEarth, condition,earthWind, earthPressure)

                    

    
    return (
      
        <MarsWeather {...this.state} lat={this.props.lat} long={this.props.long}></MarsWeather>
  
      
    );
  }; 
}

  export default EarthWeather;

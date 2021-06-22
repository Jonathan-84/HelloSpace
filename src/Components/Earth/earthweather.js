
import React, { Component } from "react";

 


 
//take the value from this then prop this ito marsweather to dispkay in table
/*
*/
// address formula --- need to use current weather
//"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=184b90f195e0b6670ef9fee34b9291e1"



    class EarthWeather extends Component {
  

         constructor(props) {
            super(props);
            this.state = { 
    
    minEarth:[],
    maxEarth: []
            //  marsweather: [],
           
            
             
    
            };
        }
        
        
    
        // need to get the query to show up in the URL fetch
        componentDidMount() {
          navigator.geolocation.getCurrentPosition((position) => {
           const lat = position.coords.latitude;
           const long= position.coords.longitude;
         

          /// api.openweathermap.org/data/2.5/weather?lat={position.coords.latitude}&lon={position.coords.longitude}&appid={API key}
    const ow_api= process.env.REACT_APP_OPEN_WEATHER;
const owUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${ow_api}&units=imperial`;
console.log(owUrl)
            fetch(owUrl)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                  
                 minEarth:response.main.temp_min,
                 maxEarth: response.main.temp_max
                     
                      
                    })
                })
              });
        }
      
       

        render() {
          const {minEarth, maxEarth} = this.state;
    
    return (
      <>
      <h1 className="display-4 text-center border-bottom border-warning">EarthWeather</h1>
      <p className="text-md-center text-sm-left m-3"> Check it out. {minEarth} F   High {maxEarth}F
        </p>
   
<br>
</br>
<br>
</br>
<br></br>
      </>
    );
  }; 
}

  export default EarthWeather;

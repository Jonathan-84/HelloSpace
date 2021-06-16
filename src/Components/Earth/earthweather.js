
import React, { Component } from "react";
import CitySearch from "./citySearch"

//const ow_api= process.env.REACT_APP_OPEN_WEATHER;

//const url=` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${ow_api}`
// address formula --- need to use current weather
//"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=184b90f195e0b6670ef9fee34b9291e1"

    class EarthWeather extends Component {
  /*     constructor(props) {
            super(props);
            this.state = { 
    
    mnTemp:[]
            //  marsweather: [],
           
            
             
    
            };
        }
      

        componentDidMount() {
            fetch()
                .then(response => response.json())
                .then(response => {
                    this.setState({
                  
                    //  marspic:response.latest_photos[0].img_src
                     
                      
                    })
                })
        }*/
   
        render() {
    
    console.log()

    return (
      <>
      <h1 className="display-4 text-center border-bottom border-warning">EarthWeather</h1>
      <p className="text-md-center text-sm-left m-3"> Check it out.
        </p>
    <CitySearch></CitySearch>
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

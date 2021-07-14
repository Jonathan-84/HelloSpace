import React, {Component} from 'react';
//import Moment from 'react-moment';
import moment from 'moment';



const APIurl = 'https://api.maas2.apollorion.com/';

    class MarsWeather extends Component {
        constructor(props) {
            super(props);
            this.state = { 
              date:[],
              min:[],
              max:[], 
              overall:[], 
              wind:[], 
              pressure:[]
            //  marsweather: [],
           
            
             
    
            };
        }
      
    
        componentDidMount() {
    

            fetch(APIurl)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                      date:response.terrestrial_date,
                      min:response.min_temp,
                      max:response.max_temp,
                      overall: response.atmo_opacity,
                      wind: response.wind_speed,
                      pressure: response.pressure
                    //  marspic:response.latest_photos[0].img_src
                     
                
                    })
                })
                
        }
      
        render() {
          // Brings in the earth minimum temp child
          const earthLow= this.props.minEarth;
          
          // Converts to Fahrenheit
          const eLowFar= earthLow * 9 /5 +32;
          const efarMin=eLowFar.toFixed(2)

           // Brings in the earth minimum temp child
           const earthHi= this.props.maxEarth;

           const eHiFar= earthHi * 9 /5 +32;
           const efarMax=eHiFar.toFixed(2)

            // Brings in the earth press temp child
          const earthPress= this.props.earthPressure;

           // Brings in the earth wind to child
           const eWind= this.props.earthWind;

            // Brings in the earth press temp child
          const earthMain= this.props.condition;

          // Brings in the earth icon and set it for rendering
          const eIcon= this.props.icon;
          const iconUrl= `http://openweathermap.org/img/wn/${eIcon}@2x.png`
          
          
          

      const {date,max, min, overall, wind, pressure} = this.state;

      
      // The wind speeds which the rover hasn't been getting, really stands out, this adds text
      let marsWinds;
      if 
      (wind === null) {
        marsWinds = (
        <p  className='table-horizontal table-column-left table-header-text'>No data</p>
        )
      }
      else{
        marsWinds=(
          <td className=" table-horizontal table-column-left">{wind} </td>
       )
      }
/// If/else allows me to adjust overall Icon (using OpenWeather API Icons- I've only seen sunny so far)
      let marsIcon;
      if
      (overall === "Sunny") {
        marsIcon=(
        <td className=" table-horizontal table-column-left">{overall}<span><img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon for weather"></img></span> </td>
        )
      }
      else {
marsIcon=(
  <td className="table-horizontal table-column-left">{overall} </td>
)
      }

      
      
      const stDate = date;
      const fixedDate= moment(stDate).format('MMMM Do YYYY')
      //new Date(stDate)
      console.log (fixedDate)
    
      
////////////////////////////////////

//MARS
      // converted Celsius to Fahre for Min
      const cTempMin= min;
      const toFarMin= cTempMin * 9 /5 +32;
     const farMin=toFarMin.toFixed(2)
// converted Celsius to Fahr for Max (data comes in as Celsius)
      const  cTempMax= max;
      const toFarMax= cTempMax * 9/5 +32;
    
   const farMax=toFarMax.toFixed(2)
////////////////////////////////////////
    return (
      <>
      <h1 className="title">Mars Weather</h1>
      <p className='subtitle'> Mars Data is from the Curiosity Rover (Rover Environmental Monitoring Station)</p>
      <div className='w3-responsive'>
      <table className="w3-table-all table-header-text">
<tr >
  <th className=" w3-center table-header-text">Category</th>
  <th className=" w3-center table-column-left table-header-text">Mars</th>
  <th className=" w3-center table-column-left table-header-text">Earth (NYC*)</th>
</tr>
<tr>
  <td className="table-horizontal">Temp Low</td>
  <td className=" table-horizontal table-column-left">{cTempMin} C / {farMin} F</td>
  <td className=" table-horizontal table-column-left">  {earthLow} C/ {efarMin} F</td>
</tr>
<tr>
  <td className="table-horizontal">Temp High</td>
  <td className=" table-horizontal table-column-left">{cTempMax} C / {farMax} F</td>
  <td className=" table-horizontal table-column-left">{earthHi} C/ {efarMax} F</td>
</tr>
<tr>
  <td className="table-horizontal">Atmospheric Pressure</td>
  <td className="table-horizontal  table-column-left">{pressure}</td>
  <td className=" table-horizontal table-column-left">{ earthPress}</td>
</tr>
<tr>
  <td className="table-horizontal">Wind</td>
  {marsWinds}
  <td className=" table-horizontal table-column-left">{eWind} </td>
</tr>
<tr >
  <td className="table-horizontal">Overall Condition</td>
  {marsIcon}
  <td className=" table-horizontal table-column-left">{earthMain}<span><img src={iconUrl} alt="icon for weather"></img></span> </td>
</tr>
</table>
</div>

        <p>Date that Mar's weather data was last received: {fixedDate}</p>
        <p>* Future adjustments will use html Geolocation to present your local weather conditions in the NYC slot.</p>
<br>
</br>

<br>
</br>
<br></br>
      </>
    );
  }; 
}
  export default MarsWeather;
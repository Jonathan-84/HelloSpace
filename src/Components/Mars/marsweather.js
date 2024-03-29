import React, {Component} from 'react';
//import Moment from 'react-moment';
import moment from 'moment';

/* I could not use the Mars Insight API, unfortunately technical difficulties appeared
to greatly limite readings (last data was December 2020), so I needed to use the old 
Curiousity Rover API.

Feeling that comparing the weather we know vs Mars makes it real, I've
used conversions below so that everyone can see the Temperature compared
to their local metric.
*/

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
      // This was more for aesthetics
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
/// this If/else allows me to adjust overall Icon using OpenWeather API Icons. 
// (On Mars I've only seen sunny so far)- Again this is more for aesthetics
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

      // Used this process to convert the date to a more readable format 
      // Sorry Europe, rest of the world, used the common format in the US. 
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
// Used the below formula to convert the Longitude and Lattitude captured from
// the working City Search components geolocation, to a more presentable format,
// so the user could see the location feeding the weather API 
// This is currently commented out in the chart, since the Geolocation isn't fully
// functional and I'd like to avoid confusion
const lat=this.props.lat;
const latNum=Number(lat);
const cleanLat= latNum.toFixed(2)

const long=this.props.long;
const longNum=Number(long)
const cleanLong=longNum.toFixed(2)

console.log(cleanLat, cleanLong)

    return (
      <>
      <h1 className="title">Mars Weather</h1>
      <p className='explText'> Mars Data is from the Curiosity Rover (Rover Environmental Monitoring Station)</p>
      <div className='w3-responsive'>
      <table className="w3-table-all table-header-text">
<tr >
  <th className=" w3-center table-header-text">Category</th>
  <th className=" w3-center table-column-left table-header-text">Mars</th>
  <th className=" w3-center table-column-left table-header-text">Earth (NYC{/*Lat: {cleanLat} Long: {cleanLong} */}*)</th>
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
        <p className='explText'> For now the location is New York City from the Open Weather API, but this will be corrected to capture use your coordinates{/** If you browser doesn't support, or you don't accept HTML5 geolocation which captures your
          Longitude and Latitude, New York City will be the place holder 
    location.*/}
        </p>
<br>
</br>

<br>
</br>
<br></br>
<br></br>
      </>
    );
  }; 
}
  export default MarsWeather;

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
              max:[]
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
                      max:response.max_temp
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
          

          const {date,max, min} = this.state;
      console.log(max, min)

      
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
      <h1 className="display-4 text-center border-bottom border-warning">MarsWeather</h1>
      <table className="w3-table">
<tr>
  <th>Category</th>
  <th>Mars</th>
  <th>Earth
  </th>
</tr>
<tr>
  <td>Temp Low</td>
  <td>{cTempMin} C / {farMin} F</td>
  <td>  {earthLow} C/ {efarMin} F</td>
</tr>
<tr>
  <td>Temp High</td>
  <td>{cTempMax} C / {farMax} F</td>
  <td>{earthHi} C/ {efarMax}</td>
</tr>
</table>

        <p>Date that weather data was last received: {fixedDate}</p>
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

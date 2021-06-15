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
          const {date,max, min} = this.state;
      console.log(max, min)

      
      const stDate = date;
      const fixedDate= moment(stDate).format('MMMM Do YYYY')
      //new Date(stDate)
      console.log (fixedDate)
    
      
// Need to trim and reformat date


      // converted Celsius to Fahre for Min
      const cTempMin= min;
      const toFarMin= cTempMin * 9 /5 +32;
      console.log(toFarMin)
// converted Celsius to Fahr for Max (data comes in as Celsius)
      const  cTempMax= max;
      const toFarMax= cTempMax * 9/5 +32;
      console.log(toFarMax)

    return (
      <>
      <h1 className="display-4 text-center border-bottom border-warning">MarsWeather</h1>
      <p className="text-md-center text-sm-left m-3"> Check it out.
        </p>

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

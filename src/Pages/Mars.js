import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import EarthWeather from '../Components/Earth/earthweather';
//import MarsWeather from '../Components/Mars/marsweather';

    const api_key= process.env.REACT_APP_GOVT_API_KEY;
    
   /* Hold over from old approach to current photos
   const today= moment().format("YYYY-MM-DD");
    console.log(today)*/


const APIurl = `https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/latest_photos?api_key=${api_key}`;

class Mars extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          marspic: [],
       
        
         

        };
    }
  

    componentDidMount() {
        fetch(APIurl)
            .then(response => response.json())
            .then(response => {
                this.setState({
                  marspic:response.latest_photos[0].img_src
                 
                  
                })
            })
    }
  
    render() {

   const {marspic} = this.state;
      console.log(marspic)
        return (
          <>
          <div>
          <h3>Mars</h3>
          <a href={this.state.image}>
          <img  alt='mars from perseverance' src={this.state.marspic}  height="300" width="500"/>
          </a>
          <p>Perseverance's latest photo from Mars</p>
    
            </div>
            <br>
            </br>
            <br></br>
            <EarthWeather></EarthWeather>

</>
       )
   }
        }
export default Mars;
/*
The fetch itself works, and extracted JSON, fiddling with the format to better map the information and 
use it below. Not to mention, this would better allow me to use 

const baseUrl= 'https://api.nasa.gov/planetary/apod';
  const api_key= process.env.REACT_APP_GOVT_API_KEY;


  fetch(`${baseUrl}?api_key=${api_key}`)
    .then(response => response.json())
    .then(response => {
  console.log (response.hdurl, response.explanation);

     I believe the above link was the right one, need to find how to return the 
      link-- ran into request issues, too many while testing state
       console.log(response.originator.name)
    })
    .catch(err => {
      console.log(err);
    });

    
    return (
      <>
      <h1>Home</h1>
      <p> NASA is the bees knees.
        </p>
        <div className="pic-day">
          <p>Picture Goes Here</p>
      
        </div>


      </>
    );
    }
  export default Home;
*/

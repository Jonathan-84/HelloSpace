import React, {Component} from 'react';
//import moment from 'moment';
import '../App.css';
import CitySearch from '../Components/Earth/citySearch';

    const api_key= process.env.REACT_APP_GOVT_API_KEY;
    
   // This is the main Mars page and specifically- the parent of the children Components.
   // This page uses the NASA Mars Rover Photos API (specifically I've chosen Perserverance)
   // took some digging, API documentation not updated, so easy to miss the latest rover

   //This doesn't pass props to City Search, it just starts the Mars rendering process
   // as props are passed through the other components.
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
          <h1 className='title'>Mars</h1>
          <a href={this.state.image}>
          <img  alt='mars from perseverance' src={this.state.marspic}  className="planet-photo"/>
          </a>
          <p className='explText'>Perseverance's latest photo from Mars</p>
    
            </div>
            <br>
            </br>
            <br></br>
            <CitySearch></CitySearch>

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

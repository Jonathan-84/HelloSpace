import React, {Component} from 'react';
import moment from 'moment';
import '../App.css';

    const api_key= process.env.REACT_APP_GOVT_API_KEY;
    
    const today= moment().format("YYYY-MM-DD");
    console.log(today)

   // figure best way to do this... maybe use a static image for Mars Headers...

//full link https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${today}&api_key=${api_key}
//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${today}&camera=NAVCAM&api_key=${api_key}

const APIurl = `https://api.nasa.gov/mars-photos/api/v1/rovers/perserverance/latest_photos?api_key=${api_key}`;

class Mars extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          photos: [],
        
         

        };
    }
  

    componentDidMount() {
        fetch(APIurl)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    photos:response.img_src,
                  
                  
                })
            })
    }
  
    render() {


      const { photos} = this.state;
      console.log(photos)
        return (
          <>
          <div>
          <h3>Mars</h3>
          <a href={this.state.photos}>
          <img  alt='random astronomy' src={this.state.photos}  height="300" width="500"/>
          </a>
    
            </div>
            <br>
            </br>
            <br></br>
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

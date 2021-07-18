import React, {Component} from 'react';
import '../App.css';
import video from '../Assets/Images/video.png';

    const api_key= process.env.REACT_APP_GOVT_API_KEY;
    


//full link https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

const APIurl = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          image: [],
          title: [],
          explanation: [],
          type: []
         

        };
    }
  

    componentDidMount() {
        fetch(APIurl)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    image:response.url,
                    title:response.title,
                    explanation:response.explanation,
                    media: response.media_type

                  
                })
            })
            
    }
  
    render() {
 
      let showMedia;
      if (this.state.media==="video") {
        showMedia = (
          <span>
            <p>It's a video of the day! Click the icon to be redirected to it!</p>
            <a href={this.state.image}>
          <img  alt='random astronomy' src={video}  height="200" width="200"/>
          </a>
          
          </span>
        )
      } else {
        showMedia = (
          <a href={this.state.image}>
          <img  alt='random astronomy' src={this.state.image}  height="300" width="500"/>
          </a>
        )
      }
      const { image, title, explanation} = this.state;
      console.log(image, title, explanation)
        return (
          <>
          <div>
          <h1 className='title '>Welcome</h1>
          <p className='explText'>Like many, I love NASA. It's more than a government agency, it's... possiblity, potential, wonder, humanity at its best
            and much more. This mini-project as been an opportunity to geek out and experiment for the first time (undoubtably
            not the last time) with the NASA APIs.
          </p>
          <h3>Astronomy Photo of the Day</h3>
          {showMedia}
      
            <p>{this.state.title}</p>
            <p className='explText'>{this.state.explanation}</p>
            </div>
            <br>
            </br>
            <br></br>
</>
       )
   }
        }
export default Home;

//clean up afterwards, this was the original JSON pull
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

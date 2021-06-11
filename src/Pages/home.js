import React, {Component} from 'react';
import '../App.css';

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
                  
                })
            })
    }
  
    render() {


      const { image, title, explanation} = this.state;
      console.log(image, title, explanation)
        return (
          <>
          <div>
          <h1>Welcome</h1>
          <h3>Astronomy Photo of the Day</h3>
          <a href={this.state.image}>
          <img  alt='random astronomy' src={this.state.image}  height="300" width="500"/>
          </a>
      
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

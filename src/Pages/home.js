import React, {Component} from 'react';
import '../App.css';
import video from '../Assets/Images/video.png';

    const api_key= process.env.REACT_APP_GOVT_API_KEY;
    
// this page can only be accessed by clicking the website title, 
// maybe add button in future.

//This page uses the NASA Picture of the Day API- it really is awesome, I've
//gotten to see the amazing pictures/videos while building this

//full API request link: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

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
 // After Discovering that "Picture of the Day" could be a video, I needed to fix the ugly
 // site that was a picture error on the webpage
      let showMedia;
      if (this.state.media==="video") {
        showMedia = (
          <span>
            <p>It's a video of the day! Click the icon to be redirected to it!</p>
            <a href={this.state.image}>
          <img  className='planet-photo' alt='random astronomy' src={video}  height="200" width="200"/>
          </a>
          
          </span>
        )
      } else {
        showMedia = (
          <a href={this.state.image}>
          <img  className='planet-photo' alt='random astronomy' src={this.state.image}  height="300" width="500"/>
          </a>
        )
      }
      const { image, title, explanation} = this.state;
      console.log(image, title, explanation)
        return (
          <>
          <div>
          <h1 className='title'>Welcome</h1>
          <p className='explText'>Like many, I love NASA. It's more than a government agency, it's... possiblity, potential, wonder, humanity at its best
            and much more. This mini-project as been an opportunity to geek out and experiment for the first time (undoubtably
            not the last time) with the NASA APIs.
          </p>
          <h3 className="title">Astronomy Photo of the Day</h3>
          {showMedia}
      
            <p className='explText'>{this.state.title}</p>
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


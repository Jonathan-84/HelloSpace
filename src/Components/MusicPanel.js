import React, {Component} from 'react';


// Look into the ability to integrate the playe, rather than just the iframe. Iframe only gives sample of song,
//want the ability to play on-going, that's the purpose of keeping it the sameo on left panel

class Music extends Component {
 

  constructor(props) {
    super(props);
    this.state = {value: 'https://open.spotify.com/embed/playlist/792i0xmXcx6A9R3dYr3koO?theme=0'
  };


    this.handleChange = this.handleChange.bind(this);


  }

 
  
  handleChange(event) {
    this.setState({value: event.target.value
    });
  
  }

  render() {


    return (
      <>
      <br></br>
      <form className='row justify-content-around d-flex flex-column flex-lg-row align-content-center'>
        <label className= 'music-color'>  Space Radio </label>
          <select value={this.state.value} onChange={this.handleChange} className="music-color">
          <option value="https://open.spotify.com/embed/playlist/792i0xmXcx6A9R3dYr3koO?theme=0">Listen In Space</option>
            <option value='https://open.spotify.com/embed/album/5qdsq5YryqAynT65vpaumI'>Space Jam</option>
            <option value="60">2 Months</option>
            <option value="90">3 Months</option>
            <option value="180">6 Months</option>
            <option value="270">9 Months</option>
          </select>
     
      </form>
      <br></br>
      <div className=" center-music">
 <iframe src={this.state.value}
     width="100%" height="400" 
     frameBorder="0" title='Spotify'allowtransparency="true" allow="encrypted-media">Listen In Space</iframe>
        </div>
  <br>
  </br>
  <br></br>
  <br></br>
  

            
      </>
    );
}
}

export default Music;
    


/*import React from 'react';



const Music = () => {



    return (
      <>
     
     <iframe src="https://open.spotify.com/embed/playlist/792i0xmXcx6A9R3dYr3koO?theme=0" 
     width="100%" height="500" 
     frameBorder="0" title='Spotify'allowtransparency="true" allow="encrypted-media">Listen In Space</iframe>

      </>
    );
  }; 
  export default Music;

*/
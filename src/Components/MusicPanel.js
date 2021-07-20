import React, {Component} from 'react';


/* My original plan was to have the Spotify player stay and not refresh on the 
left panel at all times, that required a full stack app, which I wanted to avoid
this time. So instead, I followed the general idea of keeping a permenant left panel
but used their iFrame and the ability to select options- changing their 
addressess to update the iFrame
*/

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
      <form className=' align-content-center'>
        <label className= 'music-color'>  Space Radio </label>
          <select value={this.state.value} onChange={this.handleChange} className="music-color">
          <option className="music-color" value="https://open.spotify.com/embed/playlist/792i0xmXcx6A9R3dYr3koO?theme=0">Give Me Some Space</option>
            <option className="music-color" value="https://open.spotify.com/embed/episode/2RHNMVBEJ91SMisVu6NoPD">Star Talk</option>
            <option className="music-color" value="https://open.spotify.com/embed/playlist/6pcuzwZSIw7OgL149bgJmZ">Voyager Golden Record</option>
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
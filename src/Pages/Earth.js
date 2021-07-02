import React, {Component} from 'react';

const wevt = 'https://eonet.sci.gsfc.nasa.gov/api/v3/events?days=5'

class Earth extends Component {
  constructor(props) {
      super(props);
      this.state = { 
      //  marsweather: [],
     
      
       

      };
  }


  componentDidMount() {


      fetch(wevt)
          .then(response => response.json())
          .then(response => {
              this.setState({
              //  marspic:response.latest_photos[0].img_src
               
          
              })
          })
          
  }

  render() {
    return (
      <>
      <h1 className="display-4 text-center border-bottom border-warning">Home</h1>
      <p className="text-md-center text-sm-left m-3"> I am Earth.
        </p>


      </>
    );
  }; 
}
  export default Earth;


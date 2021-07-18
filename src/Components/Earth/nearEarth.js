import React, {Component} from 'react';
//import Moment from 'react-moment';

/// Laid the ground works to use Near Earth Object Web Service API
// This is currently not feeding into the functional app

const api_key= process.env.REACT_APP_GOVT_API_KEY;
const neoWs = `https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=${api_key}`

//const date = new Date ();


    class NearEarth extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                name: []
    
            //  marsweather: [],
           
            
             
    
            };
        }
      
    
        componentDidMount() {
    

            fetch(neoWs)
                .then(response => response.json())
                .then(response => {
                    this.setState({
         //           name: response.near_earth_objects.{date}.name,
                 
                    //  marspic:response.latest_photos[0].img_src
                     
                
                    })
                })
                
        }
      
        render() {
            const {name} = this.state;
            console.log(name)
       
    return (
      <>
      <h1 className="title">Nearest Object Passi</h1>

    
<br>
</br>

<br>
</br>
<br></br>
      </>
    );
  }; 
}
  export default NearEarth;

import React from 'react';

//insight API https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0
const api_key= process.env.REACT_APP_GOVT_API_KEY;
const APIurl = `https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`;

const MarsWeather = () => {



    return (
      <>
      <h1 className="display-4 text-center border-bottom border-warning">MarsWeather</h1>
      <p className="text-md-center text-sm-left m-3"> Check it out.
        </p>


      </>
    );
  }; 
  export default MarsWeather;

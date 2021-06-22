import React, { useState } from "react";



function CitySearch() {
  const [city, setCity] = useState(" ");

  const handleInput = event => {
    setCity(event.target.value);
  };

  const logValue = () => {
    console.log(city);
  };

  return (
    <>
    
    <div>
      <input onChange={handleInput} placeholder="Enter name"/>
      <button onClick={logValue}>Log value</button>
    </div>
    </>
  );
}


export default CitySearch;
import React, { useState } from "react";

function CitySearch() {
  const [name, setName] = useState(" ");

  const handleInput = event => {
    setName(event.target.value);
  };

  const logValue = () => {
    console.log(name);
  };

  return (
    <div>
      <input onChange={handleInput} placeholder="Enter name"/>
      <button onClick={logValue}>Log value</button>
    </div>
  );
}
export default CitySearch;
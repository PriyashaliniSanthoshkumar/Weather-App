
import React, { useState } from "react";
import Displayweather from "./Displayweather";

function Main() {
    const [weather, setWeather] = useState([]);
    
        const data = fetch(
           
          )
            .then((res) => res.json())
            .then((data) => data);
    
         setWeather({ data: data });
        
      
    return (
        <div>
            {weather.data !== undefined ? (
        <div>
        
          <Displayweather data={weather.data} />
        </div>
      ) : null}
        </div>
    )
}

export default Main

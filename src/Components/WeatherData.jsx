import React, { useState, useEffect } from "react";
import cloudImg from "../assets/cloudImg.jpg";
import hazeImg from "../assets/HazeImg.jpg";
import rainImg from "../assets/rainImg.jpg";
import sunnyImg from "../assets/SunnyImg.jpg";
import Ankur from '/src/assets/Ankur.svg'
import "./WeatherData.css";
import Loading from "./Loading";

function WeatherData() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = city.trim();
     if (!query) return;
      fetchWeather(query);
  };

  const bgImage = (currentWeather) => {
     if (!currentWeather) return "";

      const main = currentWeather.weather?.[0]?.main?.toLowerCase();

                if (main === "clear") return `url(${sunnyImg})`;
                if (main === "clouds") return `url(${cloudImg})`;
                if (main === "rain") return `url(${rainImg})`;
                if (main === "haze") return `url(${hazeImg})`;
                if (["cloud", "drizzle", "thunderstorm"].includes(main)) return `url(${rainImg})`;
                return `url(${cloudImg})`;
  };

  const showIcon = (currentWeather)=>{
    if (!currentWeather) return "";

      const main = currentWeather.weather?.[0]?.main?.toLowerCase();

                if (main === "clear") return "fa-sun";
                if (main === "clouds") return "fa-cloud";
                if (main === "rain") return "fa-cloud-rain";
                if (main === "haze") return "fa-smog";
                if (["cloud", "drizzle", "thunderstorm"].includes(main)) return "fa-cloud-sun-rain";
                return "fa-cloud";
  };
    
  useEffect(() => {
        if (!error) return;
        const timer = setTimeout(() => setError(null), 2000);
        return () => clearTimeout(timer);
        
    }, [error]);
 

  const formatTime = (unixSeconds, timezoneOffset) => {
        if (!unixSeconds || timezoneOffset === undefined) return "--";
        const localMs = (unixSeconds + timezoneOffset) * 1000; // city’s local timestamp
  return new Date(localMs).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
  };

  async function fetchWeather(query) {
    try {
      setError(null);
      setLoading(true);
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${WEATHER_KEY}&units=metric`);

           if (!res.ok) throw new Error("City not found !!!  Try Again...");

              const data = await res.json();
              setWeather(data);
              setLoading(false);
              } catch (err) {
                setWeather(null);
                setError(err.message);
                
              }finally{setLoading(false)};

              
  };

  return (
    <>
   
    <div className="weather-container "   style={{backgroundImage : bgImage(weather)}}>
       {loading ? (<div className="spinner"> <Loading /></div>)
      :( <div className="data-box"  >
        <div className="search-box">
          <form onSubmit={handleSubmit} className="search-box">
            <input type="search" className="search-bar" placeholder="Search For Any City" value={city} onChange={(event) => { setCity(event.target.value)}} />
            <button type="submit" className="search-btn"><i className="fa-solid fa-magnifying-glass"></i> </button>
          </form>
        </div>
          <div className="mainData-box">
            <div className="data-packet" id="box1">
              <h3>{weather ? `${weather.main.temp}°C ` : <div className="logo"> <img className='imgLogo' src={Ankur} alt="Ankur logo" /></div>}</h3>
              <div className="location-text">{weather ? (<p>{weather.name?.toUpperCase()}</p>) : (<span className="placeholder-text">Search For Any City In INDIA to Start</span>)}</div>
            </div>

        <div className="other-box">
          <div className="data-cubes" id="box2" >{weather ? weather.weather?.[0]?.description ?? "clouds" : "clouds"}{<i className={`fa-solid ${showIcon(weather)} iconClass`} ></i>}</div>
            <div className="data-cubes" id="box3">{<h3>Sunrise</h3>}
                                                  {<p>{weather?`${formatTime(weather.sys?.sunrise, weather.timezone)}`: "...."}</p>}
                                                  {<h3>Sunset : </h3>}
                                                  {<p>{weather? `${formatTime(weather.sys?.sunset,weather.timezone)}`: "...."}</p>}</div>

              <div className="data-cubes" id="box4"><h5>Wind Speed</h5><p>{weather ? `${weather.wind.speed} m/s` : "..."}</p> <h5>Humidity</h5><p>{weather? `${weather?.main?.humidity}`:"..."}</p> </div>
                <div className="data-cubes" id="box5"> <h5>Longitude</h5><p>{weather ? `${weather.coord.lon}`: "..."}</p> <h5>Lattitude</h5> <p>{weather?`${weather.coord.lat}` : "..."}</p></div>

          </div>
        </div>
        {error && <div className="error"><i className="fa-solid fa-triangle-exclamation"></i>{error}</div>}
      </div>)}
    </div>
    </>
  );
}

export default WeatherData;
      




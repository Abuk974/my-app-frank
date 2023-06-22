import React,{useState} from "react";
import axios from "axios"
import"./Weather.css"
export default function Weather(){
const[weatherData, setWeatherData]=useState({ready:false})

    function handleResponse(response){
        console.log(response.data)
        setWeatherData({
            ready:true,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date:"wednesday:7:00",
            description:response.data.Weather[0].description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind:response.data.wind.speed,
            city:response.data.name,
        })
       
    }

    if(weatherData.ready){
        return(
            <div className="weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" 
                    placeholder="Enter a city.."
                    className="form-control"
                    autoFocus="on"
                    />
                    </div>
                    <div className="col-3">
                    <input type="submit"
                    value="search"
                    className="btn btn-primary w-100"
                    />
                    </div>
                    </div>
                </form>
    
                <h2>{weatherData.city}</h2>
                <ul>
                    <li>{weatherData.date}</li>
                    <li>{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearFix">
                        <img src={weatherData.iconUrl} 
                        alt={weatherData.description}
                        className="float-left"
                        />
                        <div className="float-left">
                       <span className="temperature">{Math.round(weatherData.temperature)}</span>
                       <span className="units">°C</span>
                       </div>
                       </div>
                    </div>
    
                    <div className="col-6">
                        <ul>
                            <li>Humidity:{weatherData.humidity}%</li>
                            <li>Wind:{Math.round(weatherData.wind)}km/hr</li>
                        </ul>
                    </div>
    
                </div>
            </div>
        )
    } else{
    let apiKey="e7be0e09c2bc8e3d45069a7681cd06a3";
    let city="New York";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse)
    return"Loading"
    }
}
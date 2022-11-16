import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./homePage.css";
import { useNavigate } from "react-router-dom";



function HomePage() {

    const [countries, setCountries] = useState();
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`https://countriesnow.space/api/v0.1/countries`).then((res)=>{
            setCountries(res.data.data)
            
        }).catch((err)=>{
          console.log(err)
        })
      
    },[])

    async function getCountryCoordinates(countryName){
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${countryName}&key=${"AIzaSyByYF8xglRa9Hvc4PlFzixarju6wCc5TEg"}`)
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=7ad52457aacaf7945c177e18aa5fd3d3`);
        
        console.log(res.data.main.humidity)
        console.log(res.data.main.temp)
        console.log(res.data.wind)
        navigate("/CountryWeather", {state:{humidity:res.data.main.humidity, temp:res.data.main.temp, wind:res.data.wind, country:countryName}});


    }


  return (
    <div className="home-page">
      { countries && countries.map((val)=>(
        <div key={val.idso2} className="countries-div" onClick={()=>getCountryCoordinates(val.country)}>{val.country}<hr/></div>
        
      ))}
      
    </div>
  );

}

export default HomePage;
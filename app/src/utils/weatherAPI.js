import React from "react";

const BASEURL = "http://api.weatherapi.com/v1/forecast.json?key="

export default {
    search: function(query) {
        return axios.get(BASEURL + process.env.REACT_APP_WEATHER_API_KEY + "&q=" + query + "&days=5&aqi=no&alerts=no")
    }
}
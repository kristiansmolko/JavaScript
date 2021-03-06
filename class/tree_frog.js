import { Animal } from './animal.js';
import { apiForCoords, apiForStats } from './api.js'

export class TreeFrog extends Animal{
    constructor(name, colour, news, gender){
        super(name, colour, news);
        this.gender = gender;
        this.weather = this.#createWeatherForecast();
        this.place= document.getElementById("place");
        chrome.storage.sync.get(['weatherAPIKey'], (uni) => {
            this.weatherKey = uni.weatherAPIKey;
        });
        chrome.storage.sync.get(['geoAPIKey'], (uni) => {
            this.geoKey = uni.geoAPIKey;
        })
    }

    

    informWorld(message){
        super.informWorld(message);
        if (!this._dead){
            this.news.innerHTML += (' quack');
        } 
    }

    #createWeatherForecast() {
        let weatherParagraph = document.getElementById("weather")
        if(!weatherParagraph){
            weatherParagraph = document.createElement("p")
            weatherParagraph.id = "weather"
            document.body.appendChild(weatherParagraph)
            return weatherParagraph
        }
        return document.getElementById("weather")
    }

    makeForecast(){
        // const forecast = "will be sunny weather";
        // if (!this._dead) this.informWorld("Won't say anything now");
        // else this.weather.innerHTML += this.name + " says, that " + forecast;
        //window.open('http://www.shmu.sk/');
        
        /*const apiKey = '23327a396626a08d88a34dfaecf23f09';
        const lat = 48.6667;
        const lon = 21.3333;
        //const mestoKrajina = 'Kosice,SK';
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + "&lon=" + lon + "&exclude=hourly,current,minutely,alerts" + '&appid=' + apiKey + '&units=metric')
        //fetch('https://api.openweathermap.org/data/2.5/weather?q=' + mestoKrajina + '&appid=' + apiKey + '&units=metric')
            .then( resp => {
                if( !resp.ok ){//ine ako 200
                    return (resp.statusText + " " + resp.status)
                } else {                
                    return resp.json() 
                }
            })
            .then(json => {
                this.weather.innerHTML += ("<br>" + this.constructor.name + " " + this.name + " tommorows temperature: " + JSON.stringify(json.daily[0].temp.day))
                //this.weather.innerHTML += "<br>" + json.name + " " +  json.main.temp + " " + json.daily[0].;
            })
            .catch(error => {
                console.log(error)
            });*/
        const btn = document.getElementById('submit');
        btn.addEventListener("click", () => {
            var inputCity = document.getElementById("city").value;
            var inputCountry = document.getElementById("country").value;
            //var api = apiForCoords;
            fetch('https://api.opencagedata.com/geocode/v1/json?q=' + inputCity + ',' + inputCountry + '&key=' + this.weatherKey)
            .then( resp => {
                if( !resp.ok ){//ine ako 200
                    return (resp.statusText + " " + resp.status)
                } else {                
                    return resp.json() 
                }
            })
            .then(json => {
                var lat = json.results[0].geometry.lat;
                var lon = json.results[0].geometry.lng;
                const apiKey = apiForStats;
                fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + "&lon=" + lon + "&exclude=hourly,daily,minutely,alerts" + '&appid=' + this.geoKey + '&units=metric')
                .then( resp => {
                    if( !resp.ok ){//ine ako 200
                        return (resp.statusText + " " + resp.status)
                    } else {                
                        return resp.json() 
                    }
                })
                .then(json2 => {
                    this.weather.innerHTML += "<p style=\"padding: 1em; display: flex; flex-direction: column; border: solid 4px black; width: 150px; text-align: center;' \"> <label>" + inputCity + ", " + inputCountry + "</label>"
                     + "<br> <label>" + Math.round(json2.current.temp) + " ??C </label>"
                     + "<br> <label>" + json2.current.weather[0].description + "</label>"
                     + "<br> <img src=\"http://openweathermap.org/img/wn/" + json2.current.weather[0].icon + "@2x.png\" width=\"50\" height=\"50\" style=\"width=50%; margin-left: auto; margin-right: auto;\"> <br>"
                     + "</p>";
                })
                .catch(error => {
                    console.log(error)
                });
            })
            .catch(error => {
                console.log(error)
            });
        });
    }
}
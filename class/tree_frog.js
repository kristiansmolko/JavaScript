class TreeFrog extends Animal{
    constructor(name, colour, news, gender){
        super(name, colour, news);
        this.gender = gender;
        this.weather = this.#createWeatherForecast();
        this.place= document.getElementById("place");
    }

    informaWorld(message){
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
            var api = "83c0b441cb2647389ae4c49381dfe123";
            fetch('https://api.opencagedata.com/geocode/v1/json?q=' + inputCity + ',' + inputCountry + '&key=' + api)
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
                const apiKey = '23327a396626a08d88a34dfaecf23f09';
                fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + "&lon=" + lon + "&exclude=hourly,daily,minutely,alerts" + '&appid=' + apiKey + '&units=metric')
                .then( resp => {
                    if( !resp.ok ){//ine ako 200
                        return (resp.statusText + " " + resp.status)
                    } else {                
                        return resp.json() 
                    }
                })
                .then(json2 => {
                    this.weather.innerHTML += "<label> Statistics for: " + inputCity + ", " + inputCountry + "<label>";
                    this.weather.innerHTML += "<br> Temperature: " + json2.current.temp;
                    this.weather.innerHTML += "<br> Description: " + json2.current.weather[0].description;
                    this.weather.innerHTML += "<img src=\"http://openweathermap.org/img/wn/" + json2.current.weather[0].icon + "@2x.png\" width=\"30\" height=\"30\"> <br>";
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
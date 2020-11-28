
//var url = ('http://api.openweathermap.org/data/2.5/weather?lat=13&lon=122&appid=935a49720a0db725e8ed75c7424b9fdf&units=metric', gotData);

//935a49720a0db725e8ed75c7424b9fdf

var input = document.querySelector('.input_text');
var main = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
//var rain = document.querySelector('.rain');
//var wind = document.querySelector('.wind');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=935a49720a0db725e8ed75c7424b9fdf&units=metric')
	.then(response => response.json())
	.then(data => {
  		var tempValue = data['main']['temp'];
  		var nameValue = data['name'];
  		var descValue = data['weather'][0]['description'];
  		//var rainValue = data['rain']['1h'];
  		//var windValue = data['wind']['speed'];

  		main.innerHTML = nameValue;
  		desc.innerHTML = "Description - " + descValue;
  		temp.innerHTML = "Temperature - " + tempValue;
  		//rain.innerHTML = "Rain - "+ rainValue + "mm for the last hour";
 		 //wind.innerHTML = "Wind Speed - " + windValue + " m/s";
  		//input.value = "";

	})

.catch(err => alert("Error!"));
})


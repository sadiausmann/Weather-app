var x = document.querySelector("demo");
let div = document.querySelector(".data")
let latitude; 
let longitude;


const apiKey = ;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`)
  .then(response => response.json())
  .then(data => { console.log(data)
    div.innerHTML = `
    <h2>${data.location.name}</h2>
    <img src="${data.current.condition.icon}">
    <p>${data.current.temp_c} Celcius</p>

    
    `
  
  })
  .catch(error => {
    console.log('An error occurred while fetching the weather:', error);
  });
  
}
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.content.tripadvisor.com/api/v1/location/20936952/photos?key=11D6F5DEDB084B01BC1E8972CDD1E662&language=de', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

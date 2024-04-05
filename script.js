const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.content.tripadvisor.com/api/v1/location/20936952/photos?key=11D6F5DEDB084B01BC1E8972CDD1E662&language=de', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// Assuming 'response' is your JSON object from the API call
const data = response.data[0]; // Get the first item from the data array

const imageUrl = data.images.thumbnail.url; // Extract the URL of the thumbnail

// Create a new img element
const imgElement = document.createElement('img');
imgElement.src = imageUrl; // Set the source of the image to the URL we extracted
// imgElement.alt = data.caption; // Use the caption as the alt text for accessibility

// Optionally, set the width and height
// imgElement.width = data.images.thumbnail.width;
// imgElement.height = data.images.thumbnail.height;

// Append the img element to the div where you want the image to appear
document.getElementById('image-container').appendChild(imgElement);

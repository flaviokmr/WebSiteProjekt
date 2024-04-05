const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.content.tripadvisor.com/api/v1/location/20936952/photos?key=11D6F5DEDB084B01BC1E8972CDD1E662&language=de', options)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const firstImageData = data.data[0]; // Get the first item from the data array

    const imageUrl = firstImageData.images.thumbnail.url; // Extract the URL of the thumbnail

    // Create a new img element
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl; // Set the source of the image to the URL we extracted
    imgElement.alt = firstImageData.caption; // Use the caption as the alt text for accessibility

    // Optionally, set the width and height
    imgElement.width = firstImageData.images.thumbnail.width;
    imgElement.height = firstImageData.images.thumbnail.height;

    // Append the img element to the div where you want the image to appear
    const imageContainer = document.getElementById('image-container');
    if (imageContainer) { // Check if the element exists to avoid null errors
      imageContainer.appendChild(imgElement);
    }
  })
  .catch(err => {
    console.error('Fetch error:', err);
  });

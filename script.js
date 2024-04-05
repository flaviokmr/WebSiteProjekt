/* const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.content.tripadvisor.com/api/v1/location/20936952/photos?key=11D6F5DEDB084B01BC1E8972CDD1E662&language=de', options)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    data.data.forEach(item => {
    const imageUrl = item.images.thumbnail.url; // Extract the URL of the thumbnail

    // Create a new img element
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl; // Set the source of the image to the URL we extracted
    imgElement.alt = item.caption || 'Thumbnail image'; // Use the caption as the alt text for accessibility
    imgElement.classList.add('thumbnail-image'); // Assign a class for styling

    // Append the img element to the div where you want the image to appear
    const imageContainer = document.getElementById('image-container');
    if (imageContainer) {
      imageContainer.appendChild(imgElement);
    }
  });
    }
  })
  .catch(err => {
    console.error('Fetch error:', err);
  });
*/


const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.content.tripadvisor.com/api/v1/location/20936952/photos?key=11D6F5DEDB084B01BC1E8972CDD1E662&language=de', options)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Make sure the data.data is an array and has more than one image
    console.log(data); // Log the data to the console to check what you received

    // Assuming data.data is an array of images
    data.data.forEach(item => {
      // Extract the URL for each image
      const imageUrl = item.images.thumbnail.url;

      // Create a new img element for each image
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl; // Set the source of the image
      imgElement.alt = item.caption; // Set the alt text
      imgElement.classList.add('thumbnail-image'); // Add any necessary classes

      // Append the img element to the div
      document.getElementById('image-container').appendChild(imgElement);
    });
  })
  .catch(err => {
    console.error('Fetch error:', err);
  });

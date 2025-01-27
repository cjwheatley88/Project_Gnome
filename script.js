// Add an event listener to the DOM content load event
document.addEventListener('DOMContentLoaded', async (event) => {
  try {
    // Fetch the gnome names from the local JSON file
    const response = await fetch('./data/gnomeNames.json');
    // Parse the JSON data
    const data = await response.json();
    // Access the GnomeNames array
    const dataNames = data.gnomeNames;
    console.log('Data = ', dataNames);

    // Select a random gnome name from the array
    const randomIndex = Math.floor(Math.random() * dataNames.length);
    const gnomeName = dataNames[randomIndex];

    // Get references to the HTML elements
    const gnomeElement = document.getElementById('gnome');

    // Update the gnome element with a welcome message and the random gnome name
    gnomeElement.innerHTML = `<p>Ahh.. welcome to my humble patch of the earth friend...... My name is ${gnomeName} and I am the gnome on shift right now. Got some green thumb questions? I am your gnome!</p>`;
  } catch (error) {
    // Log any errors that occur during the fetch or JSON parsing
    console.error("Error on DomConentLoad:", error);
  }

  // Add an event listener, enter key = send request to server, await response from gemini api, render response
  document.addEventListener('keypress', async function(e) {
    if (e.key === 'Enter') {
      // Get references to the HTML elements
      const gnomeElement = document.getElementById('gnome');
      const userIntElement = document.getElementById('userInt');
      const gnomeResponseElement = document.getElementById('gnomeResponse');  

      // Get the user input value
      const userInt = userIntElement.value;

      // Call the server endpoint gemini.js to generate content
      try {
        const response = await fetch('http://localhost:3000/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: userInt }),
        });
        const data = await response.json();
        const apiResponse = data.response;

        // Update the gnome response element with the user input and the API response
        gnomeResponseElement.innerHTML = `<p>User Input: ${userInt} <br> <br> ${apiResponse}</p>`;
        // Fade-in the gnome response element
        gnomeResponseElement.style.opacity = 0;
        gnomeResponseElement.style.filter = 'blur(4px)';
        gnomeResponseElement.style.animation = 'fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0)';
      } catch (error) {
        gnomeResponseElement.innerHTML = `<p>User Input: ${userInt}, ERROR> fetching response..</p>`;
      }
      // Hide the gnome element
      gnomeElement.style.display = 'none';
      // Clear the input field
      userIntElement.value = '';
    }
  });
});
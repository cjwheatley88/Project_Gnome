// Add an event listener to the DOM content load event
document.addEventListener('DOMContentLoaded', async (event) => {
  try {
    //Call gnome name from server > endpoint generateGnomeName
    const response = await fetch('http://localhost:3000/api/name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    const gnomeName = data.response;

    // Get references to the HTML elements
    const gnomeElement = document.getElementById('gnome');
    const loaderElement = document.getElementById('loaderDiv');
    const transcriptElement = document.getElementById('transcript');

    //Hide elements not required on initial load
    loaderElement.style.display = 'none';
    transcriptElement.style.display = 'none';

    // Update the gnome element with a welcome message and the random gnome name
    gnomeElement.innerHTML = `<p>Ahh.. welcome to my humble patch of the earth friend.. My name is ${gnomeName} and I am the gnome on shift right now. Got some green thumb questions? I am your gnome!</p>`;
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
      const loaderElement = document.getElementById('loaderDiv');
      const transcriptElement = document.getElementById('transcript');

      // Get the user input value
      const userInt = userIntElement.value;

      // Show the loader element 
      loaderElement.style.display = 'block';

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
        gnomeResponseElement.innerHTML = `<p class="response" id="response">User Input: ${userInt} <br> <br> ${apiResponse}</p>`;
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
      loaderElement.style.display = 'none';
      // Show the transcript element
      transcriptElement.style.display = 'block';
    }
  });
});

//Event listener for the transcript button
document.getElementById('btnTranscript').addEventListener('click', function() {
  // Get references to the HTML elements
  console.log('Transcript button clicked');
  // assign the gnom response innerHTML to a variable
  //write the gnomeResponse to a text file
  //Download the transcript as a text file
});


/* The script.js file contains general HTML JavaScript code that will be executed */

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
    console.log('Random Gnome Name =', gnomeName);

    // Get references to the HTML elements
    const userIntElement = document.getElementById('userInt');
    const gnomeResponseElement = document.getElementById('gnomeResponse');
    const gnomeElement = document.getElementById('gnome');

    // Update the gnome element with a welcome message and the random gnome name
    gnomeElement.innerHTML = `<p class="typing-effect">Ahh.. welcome to my humble patch of the earth friend...... My name is ${gnomeName} and I am the gnome on shift right now. Got some green thumb questions? I am your gnome!</p>`;
  } catch (error) {
    // Log any errors that occur during the fetch or JSON parsing
    console.error("Error on DomConentLoad:", error);
  }

  /*
    The code below is an event listener that listens for the 'Enter' key to be pressed.
    When the 'Enter' key is pressed, the code will get the value of the userIntElement
    and log it to the console. It will also display the user input in the gnomeResponseElement
    and hide the gnomeElement.
  */
  document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      // Get the user input value
      const userInt = userIntElement.value;
      const apiResponse = "I'm a gnome!";

      // Update the gnome response element with the user input and a placeholder response
      gnomeResponseElement.innerHTML = `<p>User Input: ${userInt}</p> <br> <p class="typing-effect">Gnome Response Placeholder: Calling API - Cx console log..</p>`;
      // Hide the gnome element
      gnomeElement.style.display = 'none';
      // Clear the input field
      userIntElement.value = '';
    }
  });
});

/* API function to googleAPI //

import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

async function googleApi(userInt) {
  if (userInt !== "") {
    try {
      const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `${userInt}`;

      const result = await model.generateContent(prompt);
      console.log(result.response); // Adjust this based on the actual response structure
    } catch (error) {
      console.error("Error generating content:", error);
    }
  } else {
    console.log("User input is empty");
  }
}
*/
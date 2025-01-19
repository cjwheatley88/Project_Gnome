/* The script.js file contains general HTML JavaScript code that will be executed */

document.addEventListener('DOMContentLoaded', (event) => {
  const userIntElement = document.getElementById('userInt');
  const gnomeResponseElement = document.getElementById('gnomeResponse');
  const gnomeElement = document.getElementById('gnome'); // Fixed typo
  
  /*
    The code below is an event listener that listens for the 'Enter' key to be pressed.
    When the 'Enter' key is pressed, the code will get the value of the userIntElement
    and log it to the console. It will also display the user input in the gnomeResponseElement
    and hide the gnomeElement.
  */
  document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const userInt = userIntElement.value;
      const apiResponse = "I'm a gnome!";
      //console.log('User input:', userInt); // Debugging log
      //gnomeResponseElement.innerText = 'User Input: ' + userInt;
      gnomeResponseElement.innerHTML = `<p>User Input: ${userInt}</p> <br> <p class="typing-effect">Gnome Response: Calling API - Cx console log..</p>`;
      //googleApi(userInt);
      gnomeElement.style.display = 'none';
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
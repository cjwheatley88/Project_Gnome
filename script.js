
/*
  The script.js file contains the JavaScript code that will be executed
  The code below is the initial code that will be executed upon the page loading.
*/
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
      gnomeResponseElement.innerHTML = `<p>User Input: ${userInt}</p> <br> <p> Gnome Response: ${apiResponse}</p>`; 
      gnomeElement.style.display = 'none';
    }
  });
});
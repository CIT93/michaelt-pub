// Get references to HTML elements
const form = document.getElementById('greetingForm');
const input = document.getElementById('username');
const output = document.getElementById('greetingOutput');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form behavior (page reload)
    event.preventDefault();
    //Get the value from the input field
    const name = input.value.trim();
    // Create the greeting message
    const greeting = `Hello, ${name}!`;
    //Display the greeting in the ouput element
    output.textContent = greeting;
    //Reset the form input
    form.reset();
});
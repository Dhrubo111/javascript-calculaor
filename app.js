// Get the result display element
const resultDisplay = document.getElementById('resultDisplay');

// Get all the buttons
const buttons = document.querySelectorAll('.buttons button');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonText = event.target.innerText;

    switch (buttonText) {
        case 'AC':
            // Clear the display
            resultDisplay.innerText = '0';
            break;
        case '=':
            try {
                // Evaluate and display the result
                resultDisplay.innerText = eval(resultDisplay.innerText);
            } catch (error) {
                resultDisplay.innerText = 'Error';
            }
            break;
        default:
            // Append the button text to the display
            appendToDisplay(buttonText);
    }
}

// Function to append text to the display
function appendToDisplay(text) {
    // If the current display is '0', replace it; otherwise, append
    resultDisplay.innerText = resultDisplay.innerText === '0' ? text : resultDisplay.innerText + text;
}

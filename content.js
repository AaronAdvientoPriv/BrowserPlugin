// Background script for the browser plugin
// Add functionality for the features: color inversion, raw text view, joke generation, and redirecting.

// Jokes Array
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call fake spaghetti? An impasta!",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    "What did one ocean say to the other ocean? Nothing, they just waved!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the math book look sad? Because it had too many problems!",
    "What do you call a bear with no teeth? A gummy bear!"
];

// Function to invert colors of the current page
function invertColors() {
    const style = document.createElement('style');
    style.id = 'color-inversion';
    style.textContent = `
        html {
            filter: invert(1) hue-rotate(180deg);
            background-color: #000;
        }
        img, video {
            filter: invert(1) hue-rotate(180deg);
        }
    `;
    if (!document.getElementById('color-inversion')) {
        document.head.appendChild(style);
    } else {
        document.getElementById('color-inversion').remove();
    }
}

// Function to display raw text content of the webpage
function displayRawText() {
    const rawText = document.body.innerText;
    const textWindow = window.open('', '_blank');
    textWindow.document.write(`<pre style="white-space: pre-wrap; font-family: Arial, sans-serif; padding: 20px;">${rawText}</pre>`);
    textWindow.document.close();
}

// Function to display a random joke
function tellAJoke() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    alert(randomJoke);
}

// Function to redirect to "Never Gonna Give You Up" YouTube video
function rickRoll() {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}

// Create the plugin UI
function createPluginUI() {
    const pluginContainer = document.createElement('div');
    pluginContainer.id = 'plugin-container';
    pluginContainer.style.position = 'fixed';
    pluginContainer.style.bottom = '20px';
    pluginContainer.style.right = '20px';
    pluginContainer.style.padding = '15px';
    pluginContainer.style.backgroundColor = '#fff';
    pluginContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    pluginContainer.style.borderRadius = '10px';
    pluginContainer.style.zIndex = '9999';

    // Create buttons
    const invertButton = document.createElement('button');
    invertButton.textContent = 'Invert Colors';
    invertButton.style.margin = '5px';
    invertButton.style.padding = '10px';
    invertButton.style.border = 'none';
    invertButton.style.backgroundColor = '#FF83C1';
    invertButton.style.color = '#fff';
    invertButton.style.borderRadius = '5px';
    invertButton.style.cursor = 'pointer';
    invertButton.addEventListener('click', invertColors);

    const rawTextButton = document.createElement('button');
    rawTextButton.textContent = 'Show Raw Text';
    rawTextButton.style.margin = '5px';
    rawTextButton.style.padding = '10px';
    rawTextButton.style.border = 'none';
    rawTextButton.style.backgroundColor = '#28a745';
    rawTextButton.style.color = '#fff';
    rawTextButton.style.borderRadius = '5px';
    rawTextButton.style.cursor = 'pointer';
    rawTextButton.addEventListener('click', displayRawText);

    const jokeButton = document.createElement('button');
    jokeButton.textContent = 'Tell me a joke!';
    jokeButton.style.margin = '5px';
    jokeButton.style.padding = '10px';
    jokeButton.style.border = 'none';
    jokeButton.style.backgroundColor = '#007bff';
    jokeButton.style.color = '#fff';
    jokeButton.style.borderRadius = '5px';
    jokeButton.style.cursor = 'pointer';
    jokeButton.addEventListener('click', tellAJoke);

    const rickRollButton = document.createElement('button');
    rickRollButton.textContent = 'Rick Roll';
    rickRollButton.style.margin = '5px';
    rickRollButton.style.padding = '10px';
    rickRollButton.style.border = 'none';
    rickRollButton.style.backgroundColor = '#dc3545';
    rickRollButton.style.color = '#fff';
    rickRollButton.style.borderRadius = '5px';
    rickRollButton.style.cursor = 'pointer';
    rickRollButton.addEventListener('click', rickRoll);

    // Append buttons to container
    pluginContainer.appendChild(invertButton);
    pluginContainer.appendChild(rawTextButton);
    pluginContainer.appendChild(jokeButton);
    pluginContainer.appendChild(rickRollButton);

    // Append container to the body
    document.body.appendChild(pluginContainer);
}

// Initialize plugin on page load
window.onload = createPluginUI;

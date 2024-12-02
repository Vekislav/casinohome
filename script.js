const lightModeButton = document.getElementById('light-mode-toggle');
// Array of possible gradient color combinations for light mode
const gradients = [
    'linear-gradient(135deg, #ff4d4d, #6a0dad)', // Red to Purple
    'linear-gradient(135deg, #ffcc00, #ff6699)', // Yellow to Pink
    'linear-gradient(135deg, #ff8000, #800080)', // Orange to Purple
    'linear-gradient(135deg, #33cc33, #3399ff)', // Green to Blue
    'linear-gradient(135deg, #ff1a1a, #4d4dff)', // Bright Red to Blue
    'linear-gradient(135deg, #ff5c8d, #b20000)', // Pink to Dark Red
    'linear-gradient(135deg, #ffad33, #ff66b2)', // Light Orange to Pink
    'linear-gradient(135deg, #ff0080, #ffcc00)', // Pink to Yellow
    'linear-gradient(135deg, #0052cc, #66ccff)', // Blue to Light Blue
    'linear-gradient(135deg, #006400, #32cd32)', // Dark Green to Light Green
    'linear-gradient(135deg, #7f00ff, #9c27b0)', // Violet to Purple
    'linear-gradient(135deg, #ff6347, #ffb6c1)', // Tomato to Light Pink
    'linear-gradient(135deg, #ff99cc, #ff0066)', // Light Pink to Deep Pink
    'linear-gradient(135deg, #00008b, #6495ed)', // Dark Blue to Cornflower Blue
    'linear-gradient(135deg, #ff7f00, #d2691e)', // Orange to Chocolate
    'linear-gradient(135deg, #a52a2a, #8b0000)', // Brown to Dark Red
    'linear-gradient(135deg, #ffff00, #ffcc99)', // Yellow to Light Yellow
    'linear-gradient(135deg, #4169e1, #7b68ee)', // Royal Blue to Medium Slate Blue
    'linear-gradient(135deg, #00bfff, #1e90ff)', // Deep Sky Blue to Dodger Blue
    'linear-gradient(135deg, #32cd32, #00ff00)', // Lime Green to Lime
    'linear-gradient(135deg, #ff1493, #ff69b4)', // Deep Pink to Hot Pink
    'linear-gradient(135deg, #8b008b, #da70d6)', // Dark Magenta to Orchid
    'linear-gradient(135deg, #800000, #d3d3d3)', // Maroon to Light Gray
    'linear-gradient(135deg, #d2691e, #ff6347)', // Chocolate to Tomato
    'linear-gradient(135deg, #7fffd4, #00ced1)', // Aquamarine to Dark Turquoise
    'linear-gradient(135deg, #f08080, #f5fffa)', // Light Coral to Mint Cream
    'linear-gradient(135deg, #20b2aa, #5f9ea0)', // Light Sea Green to Cadet Blue
    'linear-gradient(135deg, #00fa9a, #98fb98)', // Medium Spring Green to Pale Green
    'linear-gradient(135deg, #ff8c00, #b22222)', // Dark Orange to Firebrick
    'linear-gradient(135deg, #3cb371, #2e8b57)', // Medium Sea Green to Sea Green
    'linear-gradient(135deg, #00bfff, #87cefa)', // Deep Sky Blue to Sky Blue
    'linear-gradient(135deg, #b8860b, #ffebcd)', // Dark Goldenrod to Blanched Almond
    'linear-gradient(135deg, #8a2be2, #9370db)', // Blue Violet to Medium Purple
    'linear-gradient(135deg, #9acd32, #228b22)', // Yellow Green to Forest Green
    'linear-gradient(135deg, #a0e9b7, #66cdaa)', // Light Green to Medium Aquamarine
    'linear-gradient(135deg, #ffc0cb, #ff1493)', // Pink to Deep Pink
    'linear-gradient(135deg, #dcdcdc, #696969)', // Gainsboro to Dim Gray
    'linear-gradient(135deg, #f0f8ff, #00008b)', // Alice Blue to Dark Blue
    'linear-gradient(135deg, #ff6347, #ff8c00)', // Tomato to Dark Orange
    'linear-gradient(135deg, #5f9ea0, #66cdaa)', // Cadet Blue to Medium Aquamarine
    'linear-gradient(135deg, #3b9a85, #005f69)', // Teal to Deep Teal
    'linear-gradient(135deg, #f0e68c, #ffd700)', // Khaki to Gold
    'linear-gradient(135deg, #d8bfd8, #dda0dd)', // Thistle to Plum
    'linear-gradient(135deg, #ff4500, #ff6347)', // Orange Red to Tomato
    'linear-gradient(135deg, #4682b4, #b0e0e6)', // Steel Blue to Powder Blue
    'linear-gradient(135deg, #ff1493, #d700ff)', // Deep Pink to Purple
    'linear-gradient(135deg, #8b4513, #a0522d)', // Saddle Brown to Sienna
    'linear-gradient(135deg, #00ffff, #40e0d0)', // Cyan to Turquoise
    'linear-gradient(135deg, #ff00ff, #8a2be2)', // Magenta to Blue Violet
    'linear-gradient(135deg, #f5f5f5, #800000)', // White Smoke to Maroon
    'linear-gradient(135deg, #fffafa, #ffb6c1)', // Snow to Light Pink
    'linear-gradient(135deg, #ff69b4, #ff1493)', // Hot Pink to Deep Pink
    'linear-gradient(135deg, #db7093, #d3d3d3)', // Pale Violet Red to Light Gray
    'linear-gradient(135deg, #ffffe0, #d3d3d3)', // Light Yellow to Light Gray
    'linear-gradient(135deg, #db7093, #ff6347)', // Pale Violet Red to Tomato
    'linear-gradient(135deg, #2e8b57, #008000)', // Sea Green to Green
    'linear-gradient(135deg, #ffdead, #f4a460)', // Navajo White to Sandy Brown
    'linear-gradient(135deg, #ff00ff, #8b008b)', // Magenta to Dark Magenta
    'linear-gradient(135deg, #fafad2, #ff6347)', // Light Goldenrod Yellow to Tomato
    'linear-gradient(135deg, #ffd700, #f0e68c)', // Gold to Khaki
    'linear-gradient(135deg, #b22222, #ff6347)', // Firebrick to Tomato
    'linear-gradient(135deg, #98fb98, #00ff00)', // Pale Green to Lime
    'linear-gradient(135deg, #8b0000, #ff4500)', // Dark Red to Orange Red
    'linear-gradient(135deg, #ff1493, #ffb6c1)', // Deep Pink to Light Pink
    'linear-gradient(135deg, #f5fffa, #dcdcdc)', // Mint Cream to Gainsboro
    'linear-gradient(135deg, #00ced1, #5f9ea0)', // Dark Turquoise to Cadet Blue
    'linear-gradient(135deg, #ba55d3, #8a2be2)', // Medium Orchid to Blue Violet
    'linear-gradient(135deg, #d8bfd8, #dda0dd)', // Thistle to Plum
    'linear-gradient(135deg, #e9967a, #ff6347)', // Dark Salmon to Tomato
    'linear-gradient(135deg, #f0f8ff, #4169e1)', // Alice Blue to Royal Blue
    'linear-gradient(135deg, #20b2aa, #66cdaa)', // Light Sea Green to Medium Aquamarine
    'linear-gradient(135deg, #00fa9a, #98fb98)', // Medium Spring Green to Pale Green
];
// Function to set a random gradient
function setRandomGradient() {
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    document.body.style.background = randomGradient; // Apply gradient when in light mode
}
// Toggle light/dark mode on button click
lightModeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Change button icon based on the mode
    if (document.body.classList.contains('light-mode')) {
        lightModeButton.textContent = '🌙'; // Switch to dark mode icon
        setRandomGradient(); // Set a random gradient when switching to light mode
    } else {
        lightModeButton.textContent = '🌞'; // Switch to light mode icon
        document.body.style.background = '#212121'; // Keep black background in dark mode
    }
});
// Set a random gradient when the page loads or reloads if in light mode
window.addEventListener('load', () => {
    if (document.body.classList.contains('light-mode')) {
        setRandomGradient();
    }
});

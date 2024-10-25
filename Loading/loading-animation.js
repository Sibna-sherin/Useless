function setup() {
    createCanvas(windowWidth, windowHeight); // Create canvas to fit the screen
    noFill(); // No fill for shapes
    strokeWeight(1); // Thickness of the shape lines
}

function draw() {
    background(18, 18, 18, 30); // Slightly transparent background for fading effect

    // Center of the canvas
    translate(width / 2, height / 2);

    let numRipples = 10; // Number of rippling circles
    let maxRadius = min(width, height) * 0.5; // Maximum size of the largest ripple

    // Array of colors for the ripples
    let colors = [
        color(255, 0, 0),   // Red
        color(0, 255, 0),   // Green
        color(0, 0, 255),   // Blue
        color(255, 255, 0), // Yellow
        color(255, 0, 255), // Magenta
        color(0, 255, 255), // Cyan
        color(255, 165, 0), // Orange
        color(128, 0, 128), // Purple
        color(255, 192, 203), // Pink
        color(255, 255, 255) // White
    ];

    // Loop to draw each expanding circle
    for (let i = 0; i < numRipples; i++) {
        let progress = (frameCount - i * 20) % 200; // Offset each ripple for delay
        let radius = (progress / 200) * maxRadius; // Scale radius based on progress
        let alpha = map(progress, 0, 200, 255, 0); // Fade out as the circle expands

        // Use colors array for each ripple, wrapping around if necessary
        stroke(colors[i % colors.length].levels[0], alpha); // Set stroke color with fading effect
        noFill(); // Hollow circles

        // Draw each expanding circle
        ellipse(0, 0, radius * 2); // Multiply by 2 to get diameter
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight); // Create canvas to fit the screen
    noFill(); // No fill for shapes
    strokeWeight(1); // Thickness of the shape lines
}

function setup() {
    createCanvas(windowWidth, windowHeight); // Create canvas to fit the screen
    noFill(); // No fill for shapes
    strokeWeight(2.5); // Thickness of the shape lines
}

function draw() {
    clear();
    

    // Center of the canvas
    translate(width / 2, height / 2);

    let numRipples = 4; // Number of rippling circles
    let maxRadius = min(width, height) * 0.5; // Maximum size of the largest ripple
    let minRadius = 110;
    // Loop to draw each expanding circle
    for (let i = 0; i < numRipples; i++) {
        let progress = (frameCount - i * 20) % 200;        // Offset each ripple for delay
        let radius =max ((progress / 200) * maxRadius,minRadius);         // Scale radius based on progress
        let alpha = map(progress, 0, 200, 255, 0); // Fade out as the circle expands

        stroke(255, alpha); // Set stroke color with fading effect
        noFill(); // Hollow circles

        // Draw each expanding circle
        ellipse(0, 0, radius * 2); // Multiply by 2 to get diameter
    }
}

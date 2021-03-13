const colors = [
    ['162447', '1f4068', '1f4068', 'e43f5a'],
    ['1a1a2e', '16213e', '0f3460', 'e94560'],
    ['17223b', '263859', '6b778d', 'ff6768'],
    ['182952', '2b3595', '7045af', 'e14594'],
    ['1d3e53', '254b62', '476d7c', '77abb7'],
    ['4c5f7a', '393e6f', '3d2e4f', '321d2f'],
]

const slides = Array.from(document.getElementsByClassName('slide'));
let random = colors[Math.floor(Math.random() * colors.length)];

const createColors = () => {
    slides.map((slide, index) => slide.style.backgroundColor = `#${random[index]}`);
}

window.onload = createColors();
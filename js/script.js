const colors = [
    ['162447', '1f4068', '1b1b2f', 'e43f5a'],
    ['1a1a2e', '16213e', '0f3460', 'e94560'],
    ['17223b', '263859', '6b778d', 'ff6768'],
    ['182952', '2b3595', '7045af', 'e14594'],
    ['1d3e53', '254b62', '476d7c', '77abb7'],
    ['4c5f7a', '393e6f', '3d2e4f', '321d2f'],
]

let random = colors[Math.floor(Math.random() * colors.length)];

    const assignColors = () => {

        random.map((color, index) => {
            let varname = `--color${index}`;
            document.documentElement.style.setProperty(varname, `#${color}`);
        })
    }

window.onload = assignColors();

const links = document.querySelectorAll('.menu__item a');

const slides = document.querySelectorAll('.slide');
    const heights = [];
    const checkpoints = [];

    slides.forEach(slide => heights.push(getComputedStyle(slide).height.split('px')[0]));
    heights.reduce((acc, height) => {
        height = parseFloat(height);
        checkpoints.push(acc-20);
        return acc + height;
    }, 0)

    console.log(checkpoints);

document.addEventListener('scroll', function(e) {
    let pos = window.scrollY;

    if (pos > checkpoints[1] && pos < checkpoints[2]) {
        links.forEach(link => link.classList.remove('active'));
        links[1].classList.add('active');
    } else if (pos > checkpoints[2] && pos < checkpoints[3]) {
        links.forEach(link => link.classList.remove('active'));
        links[2].classList.add('active');
    } else if (pos > checkpoints[3] && pos < checkpoints[4]) {
        links.forEach(link => link.classList.remove('active'));
        links[3].classList.add('active');
    } else if (pos > checkpoints[4] && pos < checkpoints[5]) {
        links.forEach(link => link.classList.remove('active'));
    } else if (pos < checkpoints[1]) {
        links.forEach(link => link.classList.remove('active'));
        links[0].classList.add('active');
    } 
    
});
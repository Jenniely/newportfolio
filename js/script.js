const colors = [
    ['#955670', '#275070', '#EBAAB0', '#F3E1C0'],
    ['#81ABBC', '#313E61', '#FBD2C9', '#774A62'],
    ['#BDC6D9', '#52688F', '#E3E7F1', '#7391C8'],
    ['#432F70', '#713770', '#B34270', '#E95670'],
    ['#2F5061', '#E57F84', '#F4EAE6', '#4297A0'],
    ['#0B1320', '#1C3F60', '#AFC1D0', '#B1D4E0'],
    ['#ADC8D2', '#9F9C93', '#54627B', '#F4F4F6'],
]

const slides = Array.from(document.getElementsByClassName('slide'));
let random = colors[Math.floor(Math.random() * colors.length)];

const createColors = () => {
    slides.map((slide, index) => slide.style.backgroundColor = random[index]);
}

window.onload = createColors();
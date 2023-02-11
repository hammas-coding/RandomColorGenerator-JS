let button = document.getElementById('btn');
let text = document.getElementById('hex');
button.addEventListener('click', () => {

    let symbols = "0123456789ABCDEF";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors = colors + symbols[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = colors;
    text.innerHTML = colors;
});
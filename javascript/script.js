const navbar = document.getElementById('navbar');
const hum = document.getElementById('hum');
const hum1 = document.getElementById('hum-1');
const hum2 = document.getElementById('hum-2');
const hum3 = document.getElementById('hum-3');
const close_nav = document.getElementById('close_nav');

if (hum) {
    hum.addEventListener('click', () => {
        navbar.classList.add('active');
        hum.classList.add('remove');
    })
}

if (close_nav) {
    close_nav.addEventListener('click', () => {
        navbar.classList.remove('active');
        hum.classList.remove('remove');
    })
}

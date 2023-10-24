const bar = document.getElementById('bar');
const navBar = document.getElementById('navBar');

if (bar) {
    bar.addEventListener('click', () => {
        navBar.classList.add('active');
    })
}
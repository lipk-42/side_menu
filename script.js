const menuBars = document.getElementById('menu-bars');
const lipk = document.getElementById('lipk');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animetion
function navAnimation(remove,add) {
        navItems.forEach((nav, i) => {
            nav.classList.replace(`slide-${remove}-${i+1}`, `slide-${add}-${i+1}`);
        });
    }

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toglle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate In - Nav Items
        navAnimation('out', 'in');
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate In - Nav Items
        navAnimation('in', 'out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});

// Attempt scroll responsive icon color
window.addEventListener('scroll', () => {
    if (window.scrollY >= document.body.offsetHeight * 0.19) {

        menuBars.classList.add('white');
        lipk.style.borderBottomColor = 'white';
        lipk.style.color = 'white';
    } else {
        menuBars.classList.remove('white');
        lipk.style.borderBottomColor = '#EF233C';
        lipk.style.color = '#EF233C';
    }
});
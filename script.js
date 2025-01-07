const hamburger = document.querySelector('.hamburger');
const navbarItems = document.querySelector('.navbar-items');
const icon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
    // Toggle klassen "active" på menyn
    navbarItems.classList.toggle('active');

    // Byt ikonen beroende på menyns tillstånd
    if (navbarItems.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times'); // Byt till kryss
    } else {
        icon.classList.replace('fa-times', 'fa-bars'); // Byt till hamburgare
    }
});
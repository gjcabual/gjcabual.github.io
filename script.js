document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

window.onscroll = function () {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-blur');
    } else {
        navbar.classList.remove('navbar-blur');
    }
};


//for preloader

const greetings = ['• Hello', '• Nǐ hǎo', '• Hola', '• Hallo', '• Ciao', '• Olá', '• Aloha', '• Bonjour', '• नमस्ते'];
const helloText = document.getElementById('helloText');
const preloader = document.getElementById('preloader');
const content = document.querySelector('.content');

let index = 0;

function showNextGreeting() {
    if (index < greetings.length) {
        helloText.innerText = greetings[index];
        index++;
        setTimeout(showNextGreeting, 208); // Repeat every 180ms
    } else {
        // Freeze on the last greeting
        setTimeout(() => {
            preloader.classList.remove('visible'); // Fade out preloader
            setTimeout(() => {
                preloader.classList.add('hidden'); // Hide preloader completely
                content.style.display = 'block'; // Show content
                document.body.style.overflow = 'auto'; // Enable scrolling
            }, 500); // Wait for the fade-out transition to complete
        }, 1000); // Show last greeting for 1 second
    }
}

// Fade in preloader and start showing greetings
window.onload = function () {
    preloader.classList.add('visible');
    setTimeout(showNextGreeting, 800); // Start after 500ms
};



document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector('.preloader');



    // Simulate preloader animation duration
    setTimeout(() => {
        preloader.style.display = 'none'; // Hide the preloader
        document.body.style.visibility = 'visible'; // Show the body content to ensure preloader is visible
        mainContainer.style.display = 'block'; // Show the main content
    }, 3500); // Change 3000 to the duration of your preloader animation (in milliseconds)
});
//end for prel
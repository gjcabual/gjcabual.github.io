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
document.getElementsByClassName('contents')[0].style.visibility = 'hidden';

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    document.getElementsByClassName('contents')[0].style.visibility = 'visible';
  });




//for preloader

const greetings = ['• Nǐ hǎo', '• Hola', '• Hallo', '• Ciao', '• Olá', '• Aloha', '• Bonjour', '• नमस्ते'];
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




//end for prel



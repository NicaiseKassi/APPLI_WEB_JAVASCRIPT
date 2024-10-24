// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Changer le texte toutes les 2 secondes
    const texts = [
        "Bienvenue sur mon application web.",
        "Ceci est une application moderne.",
        "Profitez de nos services uniques.",
        "Rejoignez-nous dès aujourd'hui."
    ];
    
    let index = 0;
    const changingText = document.getElementById('changing-text');

    setInterval(() => {
        changingText.textContent = texts[index];
        index = (index + 1) % texts.length; // Réinitialiser après le dernier texte
    }, 2000); // 2000 millisecondes = 2 secondes
});


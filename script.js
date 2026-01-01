// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Add click tracking or other interactive features here in the future
    const links = document.querySelectorAll('.link-card');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            // Optional: Add a subtle click effect or analytics tracking
            console.log('Link clicked:', this.querySelector('.link-text').textContent.trim());
        });
    });

    // Share button specific logic could go here if we add a share button
});

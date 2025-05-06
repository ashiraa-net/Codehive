// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Example: Toggle a navigation menu
    const menuButton = document.querySelector('#menu-button');
    const menu = document.querySelector('#menu');

    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // Example: Simple form validation
    const form = document.querySelector('#contact-form');
    const emailInput = document.querySelector('#email');
    const errorMessage = document.querySelector('#error-message');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form from submitting
            if (!validateEmail(emailInput.value)) {
                errorMessage.textContent = 'Please enter a valid email.';
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
                alert('Form submitted successfully!');
                form.reset(); // Reset the form
            }
        });
    }

    // Simple email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Example: Change content dynamically
    const changeContentButton = document.querySelector('#change-content-button');
    const contentArea = document.querySelector('#content-area');

    if (changeContentButton && contentArea) {
        changeContentButton.addEventListener('click', () => {
            contentArea.innerHTML = '<h2>New Content Loaded!</h2><p>This is the updated content.</p>';
        });
    }
});

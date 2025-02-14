// ... existing code ...
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('leadForm');
    
    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const country = document.getElementById('country').value;
        
        // Basic validation
        if (!validateName(name)) {
            alert('Please enter a valid name');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        if (!validatePhone(phone)) {
            alert('Please enter a valid phone number');
            return;
        }
        
        if (!country) {
            alert('Please select a preferred country');
            return;
        }
        
        // If validation passes, track the event
        fbq('track', 'Lead');
        gtag('event', 'generate_lead', {
            'event_category': 'form',
            'event_label': country
        });
        
        // Here you would typically send the form data to your backend
        alert('Thank you for your interest! We will contact you soon.');
        form.reset();
    });
});

// Validation functions
function validateName(name) {
    return name.length >= 2;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\+?[\d\s-]{10,}$/;
    return re.test(phone);
}
// Scroll reveal functionality
function handleScrollReveal() {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
            element.classList.add('revealed');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollReveal);
// Initial check for elements in view
handleScrollReveal();
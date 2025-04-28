// script.js

// Simple form validation for creating events
document.getElementById('create-event-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('event-name').value;
    const type = document.getElementById('event-type').value;
    const description = document.getElementById('event-description').value;
    const date = document.getElementById('event-date').value;
    const location = document.getElementById('event-location').value;
    const pricing = document.getElementById('event-pricing').value;

    if (name && type && description && date && location && pricing) {
        alert('Event Created Successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});

// Event registration logic
document.getElementById('registration-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;

    if (userName && userEmail) {
        document.getElementById('confirmation-message').style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
});

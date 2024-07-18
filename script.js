// typing text

const typedTextSpan = document.getElementById("typed-text");
const textArray = ["PAVAN SEERVI"];
const typingDelay = 100;
const erasingDelay = 90;
const newTextDelay = 200;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

function showContactModal() {
    var myModal = new bootstrap.Modal(document.getElementById('contactModal'));
    myModal.show();
}


// Function to handle form submission
function submitForm() {
    // Get form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var suggestion = document.getElementById('suggestion').value;

    // Validate form inputs
    if (name === "" || email === "" || message === "" || suggestion === "") {
        alert("Please fill in all required fields.");
        return;
    }

    // Simulate form submission
    // You can add your form submission logic here (e.g., AJAX request)
    console.log("Form Submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Suggestion:", suggestion);

    // Reset form after submission
    document.getElementById('contactForm').reset();

    // Hide contact modal and then show rating modal
    var contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
    contactModal.hide();

    // Use a small delay to ensure the contact modal is fully closed before showing the alert
    setTimeout(function() {
        alert("Submitted Successfully.");

        // Show rating modal after submission
        var myModal = new bootstrap.Modal(document.getElementById('ratingModal'));
        myModal.show();
    }, 500); // 500ms delay to ensure smooth transition
}


// Function to handle rating selection and title display
document.addEventListener('DOMContentLoaded', function() {
    var stars = document.querySelectorAll('.rating input[type="radio"]');
    var ratingTitle = document.getElementById('ratingTitle');

    // Event listener for rating input changes
document.querySelectorAll('.rating input').forEach(input => {
    input.addEventListener('change', function() {
        // Get the selected rating's title
        var title = this.nextElementSibling.getAttribute('data-title');
        // Display the title below the rating section
        document.getElementById('ratingTitle').innerText = title;
    });
});
});

// Function to handle rating submission
function submitRating() {
    // Get selected rating
    var rating = document.querySelector('input[name="rating"]:checked').value;

    // Simulate rating submission
    // You can add your rating submission logic here (e.g., AJAX request)
    console.log("Rating Submitted:", rating);

    // Hide rating modal
    var ratingModal = bootstrap.Modal.getInstance(document.getElementById('ratingModal'));
    ratingModal.hide();

    // Use a small delay to ensure the rating modal is fully closed before showing the alert
    setTimeout(function() {
        alert("Rating Submitted Successfully.");
    }, 500); // 500ms delay to ensure smooth transition
}
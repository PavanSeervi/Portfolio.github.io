// JS
const typedTextSpan = document.getElementById("typed-text");
const textArray = ["Hello, I'm Pavan Seervi !!", "A Developer", "A Programmer"];
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

function submitForm() {
    // Handle form submission logic here
    // For simplicity, just showing the rating modal after submission
    var myModal = new bootstrap.Modal(document.getElementById('ratingModal'));
    myModal.show();
    alert("Submitted Successfully.");
}
document.addEventListener('DOMContentLoaded', function() {
    const ticketIDDisplay = document.getElementById('ticketID');
    const generateButton = document.getElementById('generateButton');

    generateButton.addEventListener('click', function() {
        const ticketID = generateTicketID(8); // Generate ticket ID with 8 digits
        ticketIDDisplay.textContent = ticketID;
    });
});

function generateTicketID(length) {
    let ticketID = '';

    for (let i = 0; i < length; i++) {
        ticketID += Math.floor(Math.random() * 10); // Append random number from 0 to 9
    }

    return ticketID;
}

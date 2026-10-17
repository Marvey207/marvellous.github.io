const booking = require('./booking');

bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    alert("Thank you! Your booking has been submitted.");

    bookingForm.reset();
});

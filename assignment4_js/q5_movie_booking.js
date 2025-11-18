// Q5: Movie Ticket Booking (Objects + RegExp)
// Save as: q5_movie_booking.js
// Browser-oriented JS to validate and store booking info.

const movieValidators = {
    name: name => /^[A-Za-z ]+$/.test(name),
    email: email => /^[\w.-]+@[A-Za-z\d.-]+\.[A-Za-z]{2,}$/.test(email),
    seats: seats => {
        const n = Number(seats);
        return Number.isInteger(n) && n >= 1 && n <= 10;
    }
};

function bookTicket(name, email, seats) {
    if (!movieValidators.name(name)) return { success: false, message: 'Invalid name' };
    if (!movieValidators.email(email)) return { success: false, message: 'Invalid email' };
    if (!movieValidators.seats(seats)) return { success: false, message: 'Seats must be 1-10' };

    const booking = { name: name.trim(), email: email.trim(), seats: Number(seats) };
    // In real app, save to server/localStorage. Here we just return it.
    return { success: true, booking };
}

// Demo
console.log(bookTicket('Alice', 'alice@example.com', '3'));
console.log(bookTicket('Bob1', 'bob@example', '0'));

if (typeof module !== 'undefined') module.exports = { movieValidators, bookTicket };

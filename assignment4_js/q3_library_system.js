// Q3: Library Management System (Classes + Objects)
// Save as: q3_library_system.js

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) return false;
        this.isIssued = true;
        return true;
    }

    returnBook() {
        if (!this.isIssued) return false;
        this.isIssued = false;
        return true;
    }

    details() {
        return `${this.title} by ${this.author} (ISBN: ${this.isbn}) ${this.isIssued ? '[ISSUED]' : '[AVAILABLE]'}`;
    }
}

class Library {
    constructor(books = []) {
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
    }

    displayAvailable() {
        return this.books.filter(b => !b.isIssued);
    }

    findByISBN(isbn) {
        return this.books.find(b => b.isbn === isbn);
    }

    issueByISBN(isbn) {
        const book = this.findByISBN(isbn);
        if (!book) return { success: false, message: 'Book not found' };
        if (book.issueBook()) return { success: true, book };
        return { success: false, message: 'Book already issued' };
    }
}

// Demo
const lib = new Library([
    new Book('The Alchemist', 'Paulo Coelho', 'ISBN001'),
    new Book('Clean Code', 'Robert C. Martin', 'ISBN002'),
    new Book('You Don\'t Know JS', 'Kyle Simpson', 'ISBN003'),
]);

console.log('Available books:');
lib.displayAvailable().forEach(b => console.log(b.details()));

console.log('\nIssuing ISBN002:');
console.log(lib.issueByISBN('ISBN002'));

console.log('\nAvailable now:');
lib.displayAvailable().forEach(b => console.log(b.details()));

if (typeof module !== 'undefined') module.exports = { Book, Library, lib };

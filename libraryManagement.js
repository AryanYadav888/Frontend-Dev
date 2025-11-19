class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued === false) {
      this.isIssued = true;
      console.log(`Book Issued: ${this.title}`);
    } else {
      console.log(`Sorry! Book already issued: ${this.title}`);
    }
  }

  returnBook() {
    if (this.isIssued === true) {
      this.isIssued = false;
      console.log(`Book Returned: ${this.title}`);
    } else {
      console.log(`Book was not issued: ${this.title}`);
    }
  }
}

let library = [
  new Book("The Alchemist", "Paulo Coelho", "101"),
  new Book("Atomic Habits", "James Clear", "102"),
  new Book("Think and Grow Rich", "Napoleon Hill", "103"),
  new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "104")
];

function showAvailableBooks() {
  console.log("\nAvailable Books:");
  library.forEach(book => {
    if (!book.isIssued) {
      console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
    }
  });
}

function issueBookByISBN(isbn) {
  let found = library.find(book => book.isbn === isbn);
  if (found) {
    found.issueBook();
  } else {
    console.log("Book not found!");
  }
}

showAvailableBooks();
issueBookByISBN("102");
issueBookByISBN("102");
showAvailableBooks();
library[1].returnBook();
showAvailableBooks();

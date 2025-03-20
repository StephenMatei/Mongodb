// Connect to MongoDB and create the 'library' database
use library;

// Create the 'books' collection and insert book records
db.books.insertMany([
  { title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937, genre: "Fantasy", ISBN: "978-0-261-10221-7" },
  { title: "1984", author: "George Orwell", publishedYear: 1949, genre: "Dystopian", ISBN: "978-0-452-28423-4" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960, genre: "Fiction", ISBN: "978-0-06-112008-4" },
  { title: "The Da Vinci Code", author: "Dan Brown", publishedYear: 2003, genre: "Thriller", ISBN: "978-0-385-50420-8" },
  { title: "The Alchemist", author: "Paulo Coelho", publishedYear: 1988, genre: "Adventure", ISBN: "978-0-06-112241-5" }
]);

// Update the publishedYear of a specific book
db.books.updateOne({ title: "1984" }, { $set: { publishedYear: 1950 } });

// Add a new field called 'rating' to all books and set a default value
db.books.updateMany({}, { $set: { rating: 4.5 } });

// Delete a book by its ISBN
db.books.deleteOne({ ISBN: "978-0-452-28423-4" });

// Remove all books of a particular genre
db.books.deleteMany({ genre: "Dystopian" });

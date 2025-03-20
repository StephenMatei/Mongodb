// Retrieve all books from the collection
db.books.find().pretty();

// Find books by a specific author
db.books.find({ author: "George Orwell" }).pretty();

// Find books published after the year 2000
db.books.find({ publishedYear: { $gt: 2000 } }).pretty();

// Aggregation: Count books per genre
db.books.aggregate([
  { $group: { _id: "$genre", count: { $sum: 1 } } }
]);

// Aggregation: Calculate the average published year of all books
db.books.aggregate([
  { $group: { _id: null, avgYear: { $avg: "$publishedYear" } } }
]);

// Aggregation: Identify the top-rated book
db.books.find().sort({ rating: -1 }).limit(1);

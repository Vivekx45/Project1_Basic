/**
 * =====================================================
 * 📚 Book Data Filtering Project
 * -----------------------------------------------------
 * A simple real-world example demonstrating how to use
 * JavaScript Array.filter() to fetch specific data.
 * =====================================================
 */

// ------------------------------
// 📦 Dataset: Collection of Books
// ------------------------------

const books = [
  { title: "Book One", genre: "Fictional", publishYear: 1999, editionYear: 2012 },
  { title: "Book Two", genre: "Non-Fictional", publishYear: 1990, editionYear: 2005 },
  { title: "Book Three", genre: "History", publishYear: 1996, editionYear: 2024 },
  { title: "Book Four", genre: "Science", publishYear: 1993, editionYear: 2019 },
  { title: "Book Five", genre: "History", publishYear: 1989, editionYear: 2004 },
  { title: "Book Six", genre: "Non-Fictional", publishYear: 1999, editionYear: 2012 },
  { title: "Book Seven", genre: "Fictional", publishYear: 1990, editionYear: 2010 },
  { title: "Book Eight", genre: "History", publishYear: 1991, editionYear: 2012 },
  { title: "Book Nine", genre: "Fictional", publishYear: 1997, editionYear: 2008 },
  { title: "Book Ten", genre: "Science", publishYear: 1993, editionYear: 2005 },
  { title: "Book Eleven", genre: "History", publishYear: 1990, editionYear: 2007 },
];

// ------------------------------
// 🎯 Function 1: Get History Books
// ------------------------------

const getHistoryBooks = (bookList) => {
  return bookList.filter((book) => book.genre === "History");
};

// ------------------------------
// 🎯 Function 2: Get Fictional Books Published After 1995
// ------------------------------

const getFictionAfter1995 = (bookList) => {
  return bookList.filter(
    (book) => book.publishYear >= 1995 && book.genre === "Fictional"
  );
};

// ------------------------------
// 🖨️ Output Section
// ------------------------------

console.log("📘 History Books:");
console.table(getHistoryBooks(books));

console.log("\n📗 Fictional Books Published After 1995:");
console.table(getFictionAfter1995(books));

/**
 * -----------------------------------------------------
 * Conclusion:
 * The Array.filter() method allows efficient data
 * extraction from datasets based on given conditions.
 * -----------------------------------------------------
 */


const Book = require("../models/book.model");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBook = async (req, res) => {
  const book = new Book(req.body);
  try {
    await book.save();
    res
      .status(201)
      .json({ success: true, message: "Book created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    book.title = req.body.title;
    book.author = req.body.author;
    book.genre = req.body.genre;
    book.review = req.body.review;
    book.rating = req.body.rating;
    book.image = req.body.image;
    await book.save();
    res.json({ message: "Book updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    await book.deleteOne();
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};

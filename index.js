const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/booksRoute")
const logger = require("./middlewares/books.logger")
const books = require("./books")




dotenv.config();
const app = express();
// middlewares
app.use(express.json());
app.use(logger);


//route

app.get("/", (req, res) => {
  res.send("<h1>Welcome our library stockpile</h1>");
});

// get all books

app.get("/books", (req, res) => {
  res.json(books);
});




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));

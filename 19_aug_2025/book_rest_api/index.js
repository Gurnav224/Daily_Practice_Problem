const express = require('express');
const app = express();
const router = express.Router();

const PORT = 3000

const books_db = [
    {
        id: 1,
        title: "book title",
        author: "book author",
        price: 99.99
    }
]

app.use(express.json());

router.get('/books', (req, res) => {
    res.status(200).json({ message: "get all books", books_db })
})

router.post('/books', (req, res) => {
    const { title, author, price } = req.body

    const newId = books_db.length > 0 ? Math.max(...books_db.map(book => book.id)) + 1 : 1

    books_db.push({ id: newId, title, author, price })

    res.status(201).json({ message: "book created", books_db })
})

router.put('/books/:id', (req, res) => {
    const { id } = req.params
    const { title, author, price } = req.body

    const bookId = parseInt(id)
    const bookIndex = books_db.findIndex(book => book.id === bookId)

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" })
    }

    books_db[ bookIndex ] = { id: bookId, title, author, price }

    res.status(200).json({ message: "book updated", books_db })
})

router.delete('/books/:id', (req, res) => {
    const { id } = req.params

    const bookId = parseInt(id)
    const bookIndex = books_db.findIndex(book => book.id === bookId)

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" })
    }

    books_db.splice(bookIndex, 1)

    res.status(200).json({ message: "book deleted", books_db })
})

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
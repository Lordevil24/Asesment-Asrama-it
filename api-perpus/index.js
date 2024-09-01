const express = require('express');
const { Pool } = require('pg');
const path = require('path');  // Tambahkan baris ini
const cors = require('cors');
const app = express();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db_perpus',
  password: 'rajaluqmanbangkit',
  port: 5432,
});
app.use(cors());

// Middleware untuk parsing JSON
app.use(express.json());


app.post('/buku', async (req, res) => {
  const { judul, penulis, penerbit, tahun_terbit } = req.body;
  try {
    const newBook = await pool.query(
      'INSERT INTO buku (judul, penulis, penerbit, tahun_terbit) VALUES ($1, $2, $3, $4) RETURNING *',
      [judul, penulis, penerbit, tahun_terbit]
    );  
    res.status(201).json(newBook.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/buku', async (req, res) => {
  try {
    const allBooks = await pool.query('SELECT * FROM buku');
    res.status(200).json(allBooks.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/buku/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await pool.query('SELECT * FROM buku WHERE id = $1', [id]);
    if (book.rows.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.put('/buku/:id', async (req, res) => {
  const { id } = req.params;
  const { judul, penulis, penerbit, tahun_terbit } = req.body;
  try {
    const updatedBook = await pool.query(
      'UPDATE buku SET judul = $1, penulis = $2, penerbit = $3, tahun_terbit = $4 WHERE id = $5 RETURNING *',
      [judul, penulis, penerbit, tahun_terbit, id]
    );
    if (updatedBook.rows.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(updatedBook.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.delete('/buku/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await pool.query('DELETE FROM buku WHERE id = $1 RETURNING *', [id]);
    if (deletedBook.rows.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(204).send()({ message: 'Book successfully deleted' }); ; // No Content
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
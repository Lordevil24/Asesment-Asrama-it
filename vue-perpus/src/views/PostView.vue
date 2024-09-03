<template>
  <div class="container mt-5">
    <h1 class="h1 text-center mt-5 mb-5 fw-bold">PERPUSTAKAAN</h1>
    <div class="card mb-5">
      <div class="card-header bg-info text-white">
        <h2 class="h5">Tambah Buku</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="addBook">
          <div class="mb-3">
            <label for="title" class="form-label">Judul Buku</label>
            <input type="text" id="title" v-model="newBook.judul" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="author" class="form-label">Penulis</label>
            <input type="text" id="author" v-model="newBook.penulis" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="publisher" class="form-label">Penerbit</label>
            <input type="text" id="publisher" v-model="newBook.penerbit" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="year" class="form-label">Tahun Terbit</label>
            <input type="number" id="year" v-model="newBook.tahun_terbit" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-primary">Tambah Buku</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const newBook = ref({
  judul: '',
  penulis: '',
  penerbit: '',
  tahun_terbit: '',
});

const router = useRouter();

const addBook = async () => {
  try {
    const response = await axios.post('http://localhost:3000/buku', newBook.value);
    
    // Reset form setelah penambahan buku berhasil
    newBook.value = {
      judul: '',
      penulis: '',
      penerbit: '',
      tahun_terbit: '',
    };
    
    // Navigasi kembali ke halaman daftar buku
    router.push('/');
    alert('Book successfully added!');
  } catch (error) {
    console.error('Error adding book:', error);
  }
};
</script>

<style scoped>
/* Tambahkan gaya kustom jika diperlukan */
.h1 {
  color: #60ffca;
}
</style>

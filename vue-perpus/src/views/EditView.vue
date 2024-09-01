<template>
  <div class="container mt-5 mb-5">
    <h1 class="h1 text-center mt-5 fw-bold">PERPUSTAKAAN</h1>
    <div class="card">
      <div class="card-header bg-info text-white">
        <h2 class="h5">Edit Buku</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="updateBook">
          <div class="mb-3">
            <label for="editTitle" class="form-label">Judul Buku</label>
            <input type="text" id="editTitle" v-model="currentBook.judul" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="editAuthor" class="form-label">Penulis</label>
            <input type="text" id="editAuthor" v-model="currentBook.penulis" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="editPublisher" class="form-label">Penerbit</label>
            <input type="text" id="editPublisher" v-model="currentBook.penerbit" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="editYear" class="form-label">Tahun Terbit</label>
            <input type="number" id="editYear" v-model="currentBook.tahun_terbit" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-primary">Update Buku</button>
        </form>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const currentBook = ref({
  id: null,
  judul: '',
  penulis: '',
  penerbit: '',
  tahun_terbit: '',
});

const fetchBook = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/buku/${route.params.id}`);
    currentBook.value = response.data;
  } catch (error) {
    console.error('Error fetching book:', error);
  }
};

const updateBook = async () => {
  try {
    await axios.put(`http://localhost:3000/buku/${currentBook.value.id}`, currentBook.value);
    router.push({ name: 'home' });
  } catch (error) {
    console.error('Error updating book:', error);
  }
};

onMounted(fetchBook);
</script>

<style scoped>
/* Tambahkan gaya kustom jika diperlukan */
.h1{
  color: #60ffca;
}
</style>


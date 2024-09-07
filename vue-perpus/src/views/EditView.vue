<template>
  <div class="container mt-5 mb-5">
    <h1 class="h1 text-center mt-5 mb-5 fw-bold">PERPUSTAKAAN</h1>
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
import Swal from 'sweetalert2';

const route = useRoute();
const router = useRouter();
const currentBook = ref({
  id: null,
  judul: '',
  penulis: '',
  penerbit: '',
  tahun_terbit: '',
});

const originalBook = ref({}); // Menyimpan data asli untuk perbandingan

const fetchBook = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/buku/${route.params.id}`);
    currentBook.value = response.data;
    originalBook.value = { ...response.data }; // Salin data asli ke originalBook
  } catch (error) {
    console.error('Error fetching book:', error);
  }
};

const updateBook = async () => {
  // Periksa apakah ada perubahan data
  if (JSON.stringify(currentBook.value) === JSON.stringify(originalBook.value)) {
    Swal.fire({
      icon: 'info',
      title: 'Tidak Ada Perubahan',
      text: 'Tidak ada data yang diubah',
    });
    router.push({ name: 'home' });
    return;
  }

  // Jika ada perubahan, lakukan update
  try {
    await axios.put(`http://localhost:3000/buku/${currentBook.value.id}`, currentBook.value);
    Swal.fire({
      icon: 'success',
      title: 'Berhasil',
      text: 'Buku berhasil diupdate',
    });
    router.push({ name: 'home' });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Gagal',
      text: 'Gagal mengupdate buku, silakan coba lagi',
    });
    console.error('Error updating book:', error);
  }
};

onMounted(fetchBook);
</script>

<style scoped>
.h1{
  color: #60ffca;
}
</style>

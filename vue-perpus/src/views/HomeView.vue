<template>
  <div class="container">
    <h1 class="h1 text-center mt-5 fw-bold">PERPUSTAKAAN</h1>
    <div class="card mb-4 mt-5">
      <div class="card-header bg-info text-white d-flex justify-content-between align-items-center">
        <h2 class="h5 mb-0">Daftar Buku</h2>
        <div class="d-flex">
          <div class="input-group w-50 me-3">
    <span class="input-group-text" id="basic-addon1">
      <i class="bi bi-search"></i> <!-- Ikon search -->
    </span>
    <input
      type="text"
      v-model="searchTerm"
      class="form-control"
      placeholder="Cari buku..."
      aria-label="Search"
      aria-describedby="basic-addon1"
    />
  </div>  
          <button class="btn btn-success" @click="goToPost">
            <i class="bi bi-plus"></i> Tambah Buku
          </button>
        </div>
      </div>
      <div class="card-body text-center">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Judul Buku</th>
              <th>Penulis</th>
              <th>Penerbit</th>
              <th>Tahun Terbit</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(book, index) in filteredBooks" :key="book.id">
              <td>{{ index + 1 }}</td>
              <td>{{ book.judul }}</td>
              <td>{{ book.penulis }}</td>
              <td>{{ book.penerbit }}</td>
              <td>{{ book.tahun_terbit }}</td>
              <td>
                <button class="btn btn-warning btn-sm m-2" @click="editBook(book)">
                  <i class="bi bi-pencil-fill"></i> Edit
                </button>
                <button class="btn btn-danger btn-sm" @click="deleteBook(book.id)">
                  <i class="bi bi-trash"></i> Hapus
                </button>
              </td>
            </tr>
            <tr v-if="filteredBooks.length === 0">
              <td colspan="6">Tidak ada buku yang ditemukan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'; // Import SweetAlert

const buku = ref([]);
const searchTerm = ref('');
const router = useRouter();

const fetchBooks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/buku');
    buku.value = response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

// Filter buku berdasarkan kata kunci pencarian
const filteredBooks = computed(() => {
  if (searchTerm.value.trim() === '') {
    return buku.value;
  }
  return buku.value.filter(book =>
    book.judul.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    book.penulis.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    book.penerbit.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    book.tahun_terbit.toString().includes(searchTerm.value)
  );
});

const goToPost = () => {
  router.push({ name: 'post' });
};

const editBook = (buku) => {
  if (buku && buku.id) {
    router.push({ name: 'edit', params: { id: buku.id } });
  } else {
    console.error('Buku tidak valid atau tidak memiliki ID');
  }
};

// Konfirmasi sebelum hapus
const deleteBook = async (id) => {
  Swal.fire({
    title: 'Apakah kamu yakin?',
    text: 'Buku ini akan dihapus secara permanen!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya, hapus!',
    cancelButtonText: 'Batal'
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/buku/${id}`);
        buku.value = buku.value.filter(book => book.id !== id);
        Swal.fire('Terhapus!', 'Buku telah dihapus.', 'success');
      } catch (error) {
        console.error('Error deleting book:', error);
        Swal.fire('Gagal', 'Terjadi kesalahan saat menghapus buku.', 'error');
      }
    }
  });
};

// Ambil data saat komponen dimuat
onMounted(() => {
  fetchBooks();
});
</script>


<style scoped>
/* Tambahkan gaya kustom jika diperlukan */
.input{
  width: 200px;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
}
.h1{
  color: #60ffca;
}
</style>

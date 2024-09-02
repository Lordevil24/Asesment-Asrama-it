1. Backend API dengan Express.js dan PostgreSQL:
Membuat API: Saya memanfaatkan Express.js untuk membuat API yang akan mengelola data perpustakaan. API ini memungkinkan Saya untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data buku.
Database PostgreSQL: Saya menggunakan PostgreSQL sebagai database utama. Dengan bantuan client pg, Saya telah menghubungkan Express.js dengan PostgreSQL untuk menyimpan dan mengambil data buku dari database.
Autoloading: Saya telah mengatur Express.js untuk mendukung autoloading, yang berarti perubahan kode akan otomatis di-refresh tanpa perlu restart server secara manual.
Postman untuk Dokumentasi API: Saya menggunakan Postman untuk menguji dan mendokumentasikan API yang telah Saya buat. Ini mempermudah pengujian endpoint API dan memastikan semuanya berfungsi sesuai yang diharapkan.
Untuk link Postmannya siapa saja bisa mencarinya dengan cara buka di tab baru link ini: <a href="https://documenter.getpostman.com/view/37601094/2sAXjM3WwJ"  target="blank">link Postman<a> 

3. Frontend dengan Vue.js:
Integrasi dengan API: Saya telah berhasil menghubungkan frontend yang dibuat dengan Vue.js ke API backend. Data buku dari API diambil dan ditampilkan dalam aplikasi Vue.js.
Vue 3 dengan script setup: Dalam pengembangan frontend, Saya menggunakan Vue 3 dengan sintaks script setup, yang mempermudah penulisan komponen dan menjaga kode tetap rapi dan terstruktur.
Penggunaan Axios: Saya menggunakan Axios untuk berkomunikasi dengan API. Axios memungkinkan Saya untuk membuat permintaan HTTP (GET, POST, PUT, DELETE) ke API dan memanipulasi data yang diperoleh atau dikirim.
Struktur Halaman: Aplikasi Vue.js Saya dibagi menjadi beberapa halaman, seperti HomeView, EditView, dan PostView, yang mempermudah navigasi dan pemeliharaan kode.
CSS dengan Bootstrap: Untuk styling, Saya telah menambahkan CSS Bootstrap di Vue.js. Bootstrap disimpan di folder assets dan memberikan gaya standar yang membuat aplikasi terlihat lebih profesional.

4. Aplikasi Perpustakaan:
Data Buku: Data buku yang ditangani dalam aplikasi terdiri dari beberapa properti, termasuk judul, penulis, penerbit, dan tahun_terbit.
Navigasi dan UI: Saya telah menyelesaikan tugas navigasi dan penambahan buku di aplikasi. Setiap halaman dalam aplikasi memiliki fungsionalitas khusus seperti menampilkan daftar buku, menambah buku baru, dan mengedit informasi buku yang ada.
Interaksi dengan Pengguna: Pengguna aplikasi dapat dengan mudah menambah, melihat, mengedit, dan menghapus buku dari database melalui antarmuka yang user-friendly.

5. Teknologi Tambahan:
Vue Router: Meskipun tidak disebutkan secara eksplisit, Vue Router mungkin telah digunakan untuk mengelola navigasi antar halaman dalam aplikasi Vue.js.
Penggunaan Logo di Navbar: Saya juga telah menambahkan logo di samping link Home di navbar, yang memberikan identitas visual pada aplikasi.

6. Penyelesaian:
   Saya telah menyelesaikan semua fitur utama untuk aplikasi perpustakaan dan sudah memiliki sistem yang berfungsi dengan baik, baik dari sisi backend (API dan database) maupun frontend (antarmuka pengguna dengan Vue.js).

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>  
  <nav :class="['navbar', { scrolled: isScrolled }]" class="navbar mt-5 p-3 align-items-center sticky-top">
    <div class="container text-white">
      <div class="row">
        <div class="col-6">
          <div class="align-items-center">
            <img src="../public/smk nj.png" alt="Logo" class="logo" />
            <span class="ms-3 logo-text">SMK NURUL JADID</span> <!-- Nama di samping logo -->
          </div>
        </div>
        <div class="col-6">
          <RouterLink to="/" class="home navbar-brand fw-bold text-white">Home</RouterLink>
          <RouterLink to="/post" class="post navbar-brand fw-bold text-white">Post</RouterLink>
        </div>
      </div>
    </div>
  </nav>
  
  <RouterView />
</template>

<style scoped>
.navbar {
  background: transparent;
  transition: background-color 0.3s ease;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  margin-bottom: 3rem;
}

.navbar.scrolled {
  background-color: rgb(0, 180, 180);
}

.logo {
  height: 50px; /* Sesuaikan ukuran logo */
  padding-left: 15px;
}

.logo-text {
  font-size: 25px; /* Sesuaikan ukuran teks */
  font-weight: bold; /* Tambahkan gaya teks jika perlu */
  align-items: center;
}

.home {
  font-size: 25px; 
  padding-left: 420px;
}

.post {
  font-size: 25px;
  padding-left: 40px;
}
</style>

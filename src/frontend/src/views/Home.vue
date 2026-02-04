<template>
  <Header/>
  <div class="home">
    <main class="main-content">
      <section class="intro">
        <h1>Welcome to Maria Fifi Artes</h1>
        <p>Diverse handmade crafts made with love and a sprinkle of magic ✨</p>
        <router-link to="/shop" class="btn">Shop Now</router-link>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<style scoped lang="scss">
.home {
  background-color: $color-yellow;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.intro {
  margin: 10rem;
  border: 2px solid $color-yellow;

  h1 {
    font-family: $font-main;
    font-size: 2.5rem;
    color: $color-pink;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
    margin-bottom: 2rem;
  }
}
</style>
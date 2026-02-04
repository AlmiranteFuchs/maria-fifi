<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/logo/maria_fifi_logo.svg" alt="Maria Fifi Artes Logo" class="logo-img-icon" />
      <span class="logo-text">Maria Fifi Artes</span>
    </div>

    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
  background: $color-yellow;
  border-bottom: 2px solid $color-pink-light;
  border-radius: 0 0 1rem 1rem;
}

.logo {
  display: flex;
  align-items: center;

  .logo-text {
    font-family: $font-fancy;
    font-weight: bold;
    font-style: normal;
    font-size: 2.8rem;
    color: $color-pink;
  }

  .logo-img-icon {
    height: 5rem;
    width: 5rem;
  }
}
</style>

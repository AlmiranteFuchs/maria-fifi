<template>
  <header class="header">
    <div class="logo">
      Maria Fifi Artes
    </div>

    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <div class="cart">
      🛒 <span class="cart-count">3</span>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">

.nav-links a {
  margin: 0 1rem;
  text-decoration: none;
  color: $color-pink;
  font-weight: bold;
  transition: color 0.2s;
}

.nav-links a.router-link-active {
  color: $color-blue-mint;
}

.nav-links a:hover {
  color: $color-blue-mint;
}

.cart {
  font-size: 1.2rem;
  position: relative;
}

.cart-count {
  background: #ff3399;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  position: absolute;
  top: -8px;
  right: -10px;
}
</style>

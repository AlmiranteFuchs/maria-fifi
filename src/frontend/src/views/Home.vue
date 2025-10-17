<template>
  <header class="header">
    <div class="logo">
      🐇 Crafty Bunnies
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

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #ffebf0; /* cute pastel pink */
  border-bottom: 2px solid #ff99cc;
  font-family: 'Comic Sans MS', cursive, sans-serif; /* artsy vibes >:3 */
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #ff3399;
}

.nav-links a {
  margin: 0 1rem;
  text-decoration: none;
  color: #cc0066;
  font-weight: bold;
  transition: color 0.2s;
}

.nav-links a.router-link-active {
  color: #ff0066;
}

.nav-links a:hover {
  color: #ff3399;
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

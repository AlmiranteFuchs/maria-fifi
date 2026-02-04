<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-footer">
        <span class="product-price">${{ product.price.toFixed(2) }}</span>
        <button class="btn-add-cart" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

defineProps<{
  product: Product;
}>();

const addToCart = () => {
  // Placeholder for cart functionality
  console.log('Added to cart');
};
</script>

<style scoped lang="scss">
.product-card {
  background: white;
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all $transition;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(242, 181, 212, 0.3);
  }
}

.product-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: $color-pink-lighter;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform $transition;
  }
  
  .product-card:hover & img {
    transform: scale(1.05);
  }
}

.product-info {
  padding: 1.5rem;
}

.product-name {
  font-family: $font-main;
  font-size: 1.25rem;
  font-weight: 600;
  color: $color-pink;
  margin-bottom: 0.5rem;
}

.product-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: $color-pink;
}

.btn-add-cart {
  background: $color-pink;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: $border-radius;
  font-family: $font-main;
  font-weight: 600;
  cursor: pointer;
  transition: all $transition;
  
  &:hover {
    background: darken($color-pink, 10%);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.98);
  }
}
</style>

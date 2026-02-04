<template>
  <Header/>
  <div class="shop">
    <main class="main-content">
      <section class="shop-header">
        <h1>Our Handmade Crafts</h1>
        <p>Discover unique, lovingly crafted items made just for you ✨</p>
      </section>
      
      <section class="products-grid">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product"
        />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import ProductCard from '@/components/ProductCard.vue';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Handwoven Basket',
    description: 'Beautiful handwoven basket perfect for storage or decoration',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1594068797082-9e6b2c3d1d1d?w=500&h=500&fit=crop'
  },
  {
    id: 2,
    name: 'Ceramic Mug Set',
    description: 'Set of 2 hand-painted ceramic mugs with unique patterns',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop'
  },
  {
    id: 3,
    name: 'Macramé Wall Hanging',
    description: 'Bohemian macramé wall art to brighten any room',
    price: 58.00,
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=500&fit=crop'
  },
  {
    id: 4,
    name: 'Knitted Throw Blanket',
    description: 'Cozy hand-knitted blanket in soft pastel colors',
    price: 78.00,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=500&fit=crop'
  },
  {
    id: 5,
    name: 'Scented Candle Set',
    description: 'Hand-poured soy candles with natural essential oils',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1602874801006-96e0686c0e1e?w=500&h=500&fit=crop'
  },
  {
    id: 6,
    name: 'Embroidered Cushion',
    description: 'Decorative cushion with intricate floral embroidery',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=500&fit=crop'
  },
  {
    id: 7,
    name: 'Wooden Jewelry Box',
    description: 'Hand-carved wooden box with velvet lining',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=500&h=500&fit=crop'
  },
  {
    id: 8,
    name: 'Pressed Flower Art',
    description: 'Framed pressed flower arrangement in vintage frame',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500&h=500&fit=crop'
  }
];
</script>

<style scoped lang="scss">
.shop {
  background-color: $color-yellow;
  min-height: 100vh;
}

.main-content {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.shop-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  
  h1 {
    font-family: $font-main;
    font-size: 3rem;
    color: $color-pink;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: #555;
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>

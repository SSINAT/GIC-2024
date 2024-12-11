<template>
    <div>
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <button>Add to Cart</button>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/productStore';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const productStore = useProductStore();
  
      const productId = route.params.productId;
      const product = productStore.getProductById(productId);
  
      return { product };
    },
  };
  </script>
  
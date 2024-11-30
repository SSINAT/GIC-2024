<template>
    <div class="product-list">
      <div
        class="product-card"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} USD</p>
        <p>Rating: {{ product.rating }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useProductStore } from '../stores/product';
  
  export default {
    props: ['currentGroup', 'currentCategory'],
    setup(props) {
      const productStore = useProductStore();
  
      const filteredProducts = computed(() => {
        if (props.currentCategory) {
          return productStore.getProductsByCategory(props.currentCategory);
        }
        if (props.currentGroup) {
          return productStore.getProductsByGroup(props.currentGroup);
        }
        return productStore.products;
      });
  
      return { filteredProducts };
    },
  };
  </script>
  
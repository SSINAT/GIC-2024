<template>
    <div>
      <!-- Category Container -->
      <div class="category_container">
        <div v-for="category in categories" :key="category.id">
          <h3>{{ category.name }}</h3>
          <ul>
            <li v-for="product in getProductsByCategory(category.id)" :key="product.id">
              {{ product.name }}
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Popular Products Container -->
      <div class="popular_products_container">
        <h3>Popular Products</h3>
        <div v-for="product in popularProducts" :key="product.id">
          <p>{{ product.name }} (Sold: {{ product.countSold }})</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/productStore';
  import { mapState } from 'pinia';
  
  export default {
    name: 'CategoryPage',
    data() {
      return {
        currentGroupName: 'Group A',
      };
    },
    computed: {
      ...mapState(useProductStore, {
        popularProducts: 'getPopularProducts', // Maps popular products
      }),
      categories() {
        const store = useProductStore();
        return store.getCategoriesByGroup(this.currentGroupName);
      },
      getProductsByCategory() {
        const store = useProductStore();
        return store.getProductsByCategory;
      },
    },
    async mounted() {
      const store = useProductStore();
      await store.loadData(); // Ensure data is loaded before rendering
    },
  };
  </script>
  
  <style scoped>
  .category_container {
    margin-bottom: 20px;
  }
  
  .popular_products_container {
    margin-top: 20px;
  }
  
  h3 {
    color: #333;
  }
  
  ul {
    padding-left: 20px;
    list-style-type: disc;
  }
  
  li {
    margin: 5px 0;
  }
  </style>
  
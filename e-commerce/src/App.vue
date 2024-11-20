<template>
  <div>
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

    <div class="popular_products_container">
      <h3>Popular Products</h3>
      <div v-for="product in popularProducts" :key="product.id">
        <p>{{ product.name }} (Sold: {{ product.countSold }})</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from './stores/productStore'
import { mapState } from 'pinia'

export default {
  name: 'App',
  data() {
    return {
      currentGroupName: 'Group A'
    }
  },
  computed: {
    ...mapState(useProductStore, {
      popularProducts: 'getPopularProducts',
      categories(store) {
        return this.$store.getCategoriesByGroup(this.currentGroupName)
      },
      getProductsByCategory(store) {
        return store.getProductsByCategory
      }
    })
  },
  mounted() {
    const store = useProductStore()
    store.loadData()
  }
}
</script>

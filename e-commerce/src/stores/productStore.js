
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: []
  }),
  getters: {
 
    getCategoriesByGroup: (state) => {
      return (groupName) => state.categories.filter(category => category.group === groupName)
    },

    getProductsByGroup: (state) => {
      return (groupName) => state.products.filter(product => product.group === groupName)
    },

    getProductsByCategory: (state) => {
      return (categoryId) => state.products.filter(product => product.categoryId === categoryId)
    },

    getPopularProducts: (state) => {
      return state.products.filter(product => product.countSold > 10)
    }
  },
  actions: {

    async loadData() {
      try {
        const [groupsResponse, promotionsResponse, categoriesResponse, productsResponse] = await Promise.all([
          axios.get('http://localhost:3000/api/groups'),
          axios.get('http://localhost:3000/api/promotions'),
          axios.get('http://localhost:3000/api/categories'),
          axios.get('http://localhost:3000/api/products')
        ])

        this.groups = groupsResponse.data
        this.promotions = promotionsResponse.data
        this.categories = categoriesResponse.data
        this.products = productsResponse.data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  }
})

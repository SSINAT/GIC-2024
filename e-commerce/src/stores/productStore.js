import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      { id: 1, name: 'Product A', categoryId: 1, price: 100, description: 'Description A' },
      { id: 2, name: 'Product B', categoryId: 2, price: 200, description: 'Description B' },
    ],
    categories: [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ],
  }),
  getters: {
    getProductsByCategory: (state) => (categoryId) => {
      return state.products.filter((product) => product.categoryId == categoryId);
    },
    getProductById: (state) => (productId) => {
      return state.products.find((product) => product.id == productId);
    },
    getCategoryById: (state) => (categoryId) => {
      return state.categories.find((category) => category.id == categoryId);
    },
    getPromotedProducts: (state) => {
      return state.products.filter((product) => product.isPromoted);
    },
  },
  actions: {
    async fetchData() {
      const categories = await fetch('http://localhost:3000/api/categories').then((res) =>
        res.json()
      );
      const products = await fetch('http://localhost:3000/api/products').then((res) =>
        res.json()
      );
      const groups = await fetch('http://localhost:3000/api/groups').then((res) =>
        res.json()
      );
      const promotions = await fetch('http://localhost:3000/api/promotions').then((res) =>
        res.json()
      );

      this.categories = categories;
      this.products = products;
      this.groups = groups;
      this.promotions = promotions;
    },
  },
});

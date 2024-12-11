<template>
  <div class="menu">
    <!-- Navigation Bar -->
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/categories/1" class="nav-link">Category 1</router-link>
      <router-link to="/products/1" class="nav-link">Product 1</router-link>
    </nav>

    <!-- Dynamic Group List -->
    <ul class="group-list">
      <li 
        v-for="group in groups" 
        :key="group.id" 
        @click="selectGroup(group)"
        class="group-item"
      >
        <router-link :to="`/categories/${group.id}`">{{ group.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore'; // Make sure the path is correct

export default {
  setup() {
    const productStore = useProductStore();

    const selectGroup = (group) => {
      productStore.currentGroup = group.name;
    };

    return {
      groups: productStore.groups, // Bind groups from the store
      selectGroup, // Method to set the current group
    };
  },
};
</script>

<style scoped>
.menu {
  padding: 20px;
}

.nav-link {
  margin-right: 15px;
  text-decoration: none;
  color: #333;
}

.nav-link:hover {
  color: #007BFF;
}

.group-list {
  list-style-type: none;
  padding: 0;
}

.group-item {
  margin: 5px 0;
}

.group-item a {
  text-decoration: none;
  color: #333;
}

.group-item a:hover {
  color: #007BFF;
}
</style>

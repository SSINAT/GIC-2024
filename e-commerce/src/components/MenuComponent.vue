<template>
    <div class="menu">
      <ul>
        <li v-for="group in groups" :key="group.id" @click="selectGroup(group)">
          {{ group.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/product';
  
  export default {
    setup() {
      const productStore = useProductStore();
  
      const selectGroup = (group) => {
        productStore.currentGroup = group.name;
      };
  
      return { groups: productStore.groups, selectGroup };
    },
  };
  </script>
  
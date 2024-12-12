<template>
  <div class="page">
    <h2>Welcome to Page {{ $route.params.id }}</h2>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Page",
};
</script>

<style scoped>
.page {
  padding: 20px;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}
</style>

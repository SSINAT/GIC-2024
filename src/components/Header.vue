<template>
  <header>
    <nav>
      <router-link to="/" :class="{ active: isActive('/') }">Page 1</router-link>
      <router-link to="/page2" :class="{ active: isActive('/page2') }">Page 2</router-link>
      <router-link to="/page3" :class="{ active: isActive('/page3') }">Page 3</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<style>
.active {
  color: red;
  font-weight: bold;
}
</style>

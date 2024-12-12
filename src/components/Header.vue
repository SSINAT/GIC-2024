<template>
  <header>
    <h3 class="menu-title">Header</h3>
    <nav>
      <router-link to="/page/1" :class="{ active: isActive(1) }" aria-label="Navigate to Page 1" title="Go to Page 1">Page 1</router-link>
      <router-link to="/page/2" :class="{ active: isActive(2) }" aria-label="Navigate to Page 2" title="Go to Page 2">Page 2</router-link>
      <router-link to="/page/3" :class="{ active: isActive(3) }" aria-label="Navigate to Page 3" title="Go to Page 3">Page 3</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    isActive(pageId) {
      return this.$route.path.includes(`/page/${pageId}`);
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  background-color: #f3f2f2;
  padding: 0.1rem;
}

.menu-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;

}

nav {
  display: flex;
  justify-content: space-around;
  width: 40%; 
}

nav a {
  color: #333; 
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

nav a:hover {
  background-color: #444;
  color: #fff;
}

nav a.active {
  font-weight: bold;
  color: #fff;
  background-color: #007BFF; 
}
</style>

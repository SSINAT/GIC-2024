<template>
  <aside class="menu">
    <h3 class="menu-title">Menu</h3>
    <router-link
      v-for="section in sections"
      :key="section.id"
      :to="generateSectionLink(section.id)"
      :class="{ active: isActive(section.id) }"
    >
      {{ section.name }}
    </router-link>
  </aside>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      sections: [
        { id: 1, name: "Section 1" },
        { id: 2, name: "Section 2" },
        { id: 3, name: "Section 3" },
        { id: 4, name: "Section 4" },
      ],
    };
  },
  methods: {
    generateSectionLink(sectionId) {
      const pageId = this.$route.params.id; // Get the current page ID dynamically
      return `/page/${pageId}/section/${sectionId}`;
    },
    isActive(sectionId) {
      const { id, sectionId: currentSectionId } = this.$route.params;
      return String(currentSectionId) === String(sectionId); // Ensure both IDs are compared as strings
    },
  },
};
</script>

<style scoped>
.menu {
  width: 20%;
  background: #f4f4f4;
  border-right: 2px solid #000;
  border-left: 2px solid #000;
 
}

.menu-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
 
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
}

.menu a {
  display: block;
  text-decoration: none;
  font-size: 1.5rem;
  color: black;
  text-align: center; 
  padding: 1rem;
  background: #f4f4f4;
  border-bottom: 2px solid #000;
  transition: background-color 0.3s, color 0.3s;
}

.menu a:hover {
  background-color: #ddd;
  color: #333;
}

.menu a.active {
  font-weight: bold;
  color: white;
  background: #007BFF;
  padding: 1rem;
}
</style>

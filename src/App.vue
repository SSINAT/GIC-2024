<template>
  <div id="app">
    <Header />
    <div class="container">
      <section/>
      <main>
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import section from './views/section.vue';
export default {
  components: {
    Header,
    Footer,
    section,
  },
};
</script>

<style>
.container {
  display: flex;
}
main {
  flex-grow: 1;
  padding: 20px;
}
</style>

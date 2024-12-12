<template>
  <div id="app">
    <Header />
    <div class="content">
      <Menu />
      <main class="main-content">
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Menu,
  },
};
</script>

<style>
#app {
  background-color: #fff;
  color: #000;
  width: 90%;
  margin: 20px auto;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
}

header,
footer {
  background: #f4f4f4;
  text-align: center;
  padding: 0.1rem;
  border: 2px solid #000;
}

.content {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  padding: 20px;
  text-align: center;
  border-right: 2px black;
  background:white;
  border-right: 2px solid #000;
}
</style>

<template>
    <div class="category_card" :style="style">
      <img :src="image" :alt="title" />
      <h3>{{ title }}</h3>
      <p>{{ quantity }} items</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      title: String,
      quantity: Number,
      style: Object,
    },
  };
  </script>
  
  <style>
  .category_card {
    text-align: center;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .category_card img {
    max-width: 100%;
    height: auto;
    margin-bottom: 0.5rem;
  }
  </style>
  
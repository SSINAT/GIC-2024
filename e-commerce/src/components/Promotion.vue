<template>
    <div class="promotion_card" :style="style">
      <img :src="Image" :alt="content" />
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      Image: String,
      content: String,
      style: Object,
    },
  };
  </script>
  
  <style>
  .promotion_card {
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .promotion_card img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  </style>
  
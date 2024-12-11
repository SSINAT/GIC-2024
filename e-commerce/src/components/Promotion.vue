<script>
export default {
  name: "PromotionCard",
  props: {
    Image: {
      type: String,
      required: true,
      default: "default-image.jpg", 
    },
    content: {
      type: String,
      required: true,
      default: "Special Promotion!",
    },
    style: {
      type: Object,
      default: () => ({}), 
    },
  },
};
</script>

<template>
  <div class="promotion_card" :style="style">
    <img :src="Image" :alt="content || 'Promotion Image'" />
    <p>{{ content }}</p>
  </div>
</template>

<style>
.promotion_card {
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9; 
}
.promotion_card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px; 
}
</style>

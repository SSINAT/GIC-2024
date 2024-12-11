<template>
  <div class="category_card" :style="style" @click="onCardClick" tabindex="0" role="button">
    <img :src="image" :alt="altText" />
    <h3>{{ title }}</h3>
    <p>{{ quantity }} items</p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "Category",
    },
    quantity: {
      type: Number,
      default: 0,
    },
    style: {
      type: Object,
      default: () => ({}),
    },
    altText: {
      type: String,
      default: "Category image",
    },
  },
  methods: {
    onCardClick() {
      this.$emit("click", this.title); // Emit event when the card is clicked
    },
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
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.category_card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.category_card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
  border-radius: 8px;
}
.category_card:focus {
  outline: 2px solid #007bff;
}
</style>

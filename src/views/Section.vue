<template>
  <div>
    <h3>This is Section {{ $route.params.sectionId }} of Page {{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  name: "Section",
};
</script>

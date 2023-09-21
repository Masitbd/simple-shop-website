<script>
export default {
  props: {
    products: Array,
  },
};
</script>

<template>
   <div>
    <div v-for="product in products" :key="product.id">
      <img :src="product.image" alt="Product Image" />
      <h2>{{ product.title }}</h2>
      <p>Price: {{ product.price }}</p>
      <router-link :to="'/product/' + product.id">View Details</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>


</style>
<script>
  import ProductDetails from "@/components/ProductDetails.vue";
  
  export default {
    components: {
      ProductDetails,
    },
    data() {
      return {
        product: null,
      };
    },
    created() {
      // Fetch and set the product details based on the route parameter (this.$route.params.id)
    },
  };
  </script>
  
<template>
    <div>
      <h1>Product Details</h1>
      <product-details :product="product" />
    </div>
  </template>
  
  
<script>
  import ProductList from "@/components/ProductList.vue";
  
  export default {
    components: {
      ProductList,
    },
    data() {
      return {
        products: [
          // Your list of products here
        ],
      };
    },
  };
  </script>
  
<template>
    <div>
      <h1>Product List</h1>
      <product-list :products="products" />
    </div>
  </template>
  
  
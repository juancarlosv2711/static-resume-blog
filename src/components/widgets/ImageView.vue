<template>
    <div class="image-view">
      <img :src="src" :alt="alt" />
    </div>
  </template>
  
  <script>
  export default {
    name: "ImageView",
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: "Profile Picture",
      },
    },
  };
  </script>
  
  <style scoped>
  .image-view {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .image-view img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ddd;
  }
  </style>
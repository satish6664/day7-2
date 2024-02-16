<!-- App.vue -->

<template>

  <div id="app">
 
   <ImageGallery />
 
  </div>
 
 </template>
 
 
 <script>
 
 import ImageGallery from './components/ImageGallery.vue';
 
 
 export default {
 
  components: {
 
   ImageGallery,
 
  },
 
 };
 
 </script>
 
 
 <style>
 
 /* Add your global styles as needed */
 
 #app {
 
  text-align: center;
 
  margin-top: 20px;
 
 }
 
 </style>
 
 
 
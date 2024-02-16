<template>

    <div>
    
    <input type="file" @change="handleImageUpload" />
    
    <div v-for="(image, index) in images" :key="index" class="image-item">
    
    <img :src="image.url" alt="Gallery Image" />

    
    <button @click="deleteImage(index)">Delete</button>
    
    </div>
    
    </div>
    
    </template>
    
    
    <script>
    
    
    import { useStore } from 'vuex';
    
    
    export default {
    
    setup() {
    
    const store = useStore();
    
    const images = store.getters.getAllImages;
    
    
    const handleImageUpload = (event) => {
    
    const file = event.target.files[0];
    
    const reader = new FileReader();
    
    
    reader.onload = (e) => {
    
    const imageUrl = e.target.result;
    
    const image = { url: imageUrl, metadata: {}, category: '' };
    
    
    store.dispatch('addImage', image);
    
    };
    
    
    if (file) {
    
    reader.readAsDataURL(file);
    
    }
    
    };
    
    
    const deleteImage = (index) => {
    
    store.dispatch('deleteImage', index);
    
    };
    
    
    return { images, handleImageUpload, deleteImage };
    
    },
    
    };
    
    </script>
<template>
  <div class="product-card" @click="emit('open-modal', product)">
    <img :src="product.thumbnail" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p class="price">{{ product.price }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { Sofa } from '@/types/sofa';

const props = defineProps<{
  product: Sofa;
}>();

const emit = defineEmits(['open-modal']);
</script>

<style scoped>
.product-card {
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 10px;
}

.product-card img {
  width: 100%;
  height: auto;
}

.product-card h3 {
  margin-top: 10px;
  font-size: 1.2em;
}

.product-card .price {
  font-weight: bold;
  color: #007bff;
}
</style>

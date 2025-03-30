<template>
  <div class="catalog-page">
    <SofaViewer :modelSrc="modelPath" />
  </div>
</template>

<script setup>
import SofaViewer from '@/components/SofaViewer.vue'
import modelPath from '@/assets/models/sofaWhite.glb'


</script>

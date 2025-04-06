<template>
  <div>
    <model-viewer
      class="modal-viewer"
      :src="props.modelSrc"
      alt="Sofá"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      shadow-intensity="1"
      ar-scale="auto"
    >
      <button slot="ar-button">Ver en mi espacio</button>
    </model-viewer>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue';

const props = defineProps({
  modelSrc: {
    type: String,
    required: true,
  },
});

onMounted(async () => {
try {
  await import('https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js');
} catch (error) {
  console.error('Error al cargar model-viewer:', error);

}
});
</script>
<style scoped>
  .modal-viewer {
    height: 315px;
    width: 100%;
    background-color: var(--color-gray-light);
  }
</style>

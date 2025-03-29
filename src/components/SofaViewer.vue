<template>
  <div>
    <model-viewer
      class="modal-viewer"
      :src="modelSrc"
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

<script>
export default {
  name: 'SofaViewer',
  props: {
    modelSrc: {
      type: String,
      required: true
    }
  },
  mounted() {
    import('https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js');
  }
}
</script>
<style scoped>
  .modal-viewer {
    height: 200px;
    width: 200px;
  }
</style>

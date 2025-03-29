<template>
  <div class="home">
    <h1>AR Sofa Demo</h1>
    <SofaViewer modelSrc="/models/sofa.glb" />
  </div>
</template>

<script>
import SofaViewer from '@/components/SofaViewer.vue'

export default {
  name: 'HomeView',
  components: {
    SofaViewer
  }
}
</script>

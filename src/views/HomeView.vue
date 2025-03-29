<template>
  <div class="home">
    <h1>AR Sofa Demo</h1>
    <SofaViewer :modelSrc="modelPath" />
  </div>
</template>

<script>
import SofaViewer from '@/components/SofaViewer.vue'
import modelPath from '@/assets/models/sofa.glb'

export default {
  name: 'HomeView',
  components: {
    SofaViewer
  },
  data() {
    return {
      modelPath: modelPath
    }
  }
}
</script>

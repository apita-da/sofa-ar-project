<template>
  <div class="catalog-view"
    :class="{
      'desktop-layout': deviceType === 'desktop',
      'tablet-layout': deviceType === 'tablet',
      'mobile-layout': deviceType === 'mobile'
    }"
  >
    <div v-if="isLoading">Cargando...</div>
    <div v-if="error">{{ error }}</div>
    <div v-else class="grid-container">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @open-modal="openModal"
      />
    </div>

    <teleport to="body">
      <div v-if="selectedProduct" class="modal"  :class="{ 'modal-bottom': isMobile }">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">{{ selectedProduct.name }}</h2>
            <button class="button-close" @click="closeModal">Cerrar</button>
          </div>
          <div class="modal-body">
            <div class="product-container">
              <div class="gallery">
                <swiper
                  :modules="modules"
                  :slides-per-view="1"
                  :navigation="true"
                  :pagination="{ clickable: true }"
                  class="gallery__swiper"
                >
                  <swiper-slide v-for="(image, index) in selectedProduct.images" :key="index">
                    <img :src="image.path" :alt="selectedProduct.name" class="product-img" />
                  </swiper-slide>
                  <swiper-slide v-if="selectedProduct.modelPath">
                    <SofaViewer :modelSrc="selectedProduct.modelPath" />
                  </swiper-slide>
                </swiper>
              </div>
              <div class="product-description">
                <p v-if="isMobile">Estás viendo la versión móvil del catálogo.</p>
                <p v-if="isTablet">Estás viendo la versión tablet del catálogo.</p>
                <p v-if="isDesktop">Estás viendo la versión desktop del catálogo.</p>
                <p>{{ selectedProduct.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useData } from '@/composables/sofaData';
import { injectDeviceType } from '@/composables/deviceType'
import type { Sofa } from '@/types/sofa';
import ProductCard from '@/components/ProductCard.vue';
import SofaViewer from '@/components/SofaViewer.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const { deviceType, isMobile, isTablet, isDesktop } = injectDeviceType()



const { data: sofas, isLoading, error } = useData<Sofa[]>('/data/sofas.json');

const products = sofas;
const modules = [Navigation, Pagination];



const selectedProduct = ref<Sofa | null>(null)
const show3DModel = ref(false)

const openModal = (product: Sofa) => {
  selectedProduct.value = product
  show3DModel.value = false
}

const closeModal = () => {
  selectedProduct.value = null;
}
//TODO: get heigth of slide to apply to model-viewer
//TODO: in mobile show button to AR and hide modelviewer if posible. Modal 100% full screen
</script>

<style scoped>
.catalog-view {
  padding: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}


.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  max-width: 60%;
  min-height: 200px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin: 10% auto;
  overflow-y: auto;
}
.modal-header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}
.modal-body {
  width: 100%;
}
.modal-title {
  font-size: 20px;
  font-weight: 600;
}
.button-close {
  cursor: pointer;
}
.product-container {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
.gallery {
  width: 100%;
  max-width: 100%;
}
.product-img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16/9;
}

.modal.modal-bottom {
  align-items: flex-end;
}

.modal.modal-bottom .modal-content {
  max-width: 100%;
  width: 100%;
  margin: 0;
  border-radius: 10px 10px 0 0;
  max-height: 80vh;
  overflow-y: auto;
}
body.is-mobile {
  .product-img {

  aspect-ratio: 1/1;
}
}
</style>

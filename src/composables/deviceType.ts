import { ref, onMounted, provide, readonly, computed, inject, type Ref } from 'vue';

const deviceType = ref('');

function detectDeviceType() {
  const width = window.innerWidth;

if (width >= 1200) {
    return 'desktop';
  } else if (width >= 768) {
    return 'tablet';
  } else {
    return 'mobile';
  }
}

export function useDeviceType() {
  onMounted(() => {
    deviceType.value = detectDeviceType();
    updateBodyClass();

    window.addEventListener('resize', () => {
      deviceType.value = detectDeviceType();
      updateBodyClass();
      console.log(deviceType.value);
    });
  });

  const isMobile = computed(() => deviceType.value === 'mobile');
  const isTablet = computed(() => deviceType.value === 'tablet');
  const isDesktop = computed(() => deviceType.value === 'desktop');

  function updateBodyClass() {
    if (typeof document !== 'undefined') {
      document.body.classList.remove('is-mobile', 'is-tablet', 'is-desktop');

      if (isMobile.value) {
        document.body.classList.add('is-mobile');
      } else if (isTablet.value) {
        document.body.classList.add('is-tablet');
      } else if (isDesktop.value) {
        document.body.classList.add('is-desktop');
      }
    }
  }

  return {
    deviceType: readonly(deviceType),
    isMobile: readonly(isMobile),
    isTablet: readonly(isTablet),
    isDesktop: readonly(isDesktop),
  };
}

const DEVICE_TYPE_KEY = Symbol('deviceType'); // Clave única para provide/inject

export function provideDeviceType() {
  const { deviceType, isMobile, isTablet, isDesktop } = useDeviceType();
  provide(DEVICE_TYPE_KEY, { deviceType, isMobile, isTablet, isDesktop });
}

export function injectDeviceType() {
  const injected = inject(DEVICE_TYPE_KEY);
  if (!injected) {
    throw new Error('useDeviceType must be used within a component that provides DeviceType');
  }
  return injected as {
    deviceType: Ref<string>;
    isMobile: Ref<boolean>;
    isTablet: Ref<boolean>;
    isDesktop: Ref<boolean>;
  };
}

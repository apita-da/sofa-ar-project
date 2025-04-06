import { ref, onMounted } from 'vue';

export function useData<T>(url: string) {
const data = ref<T | null>(null);
const isLoading = ref(true);
const error = ref<string | null>(null);

const fetchData = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al cargar los datos: ${response.status}`);
    }
    data.value = await response.json();
  } catch (e: any) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchData);


return { data, isLoading, error };
}

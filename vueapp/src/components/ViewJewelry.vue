<template>
  <div class="app-container">
    <h1 class="page-title">Просмотр ювелирного изделия</h1>
    <div v-if="loading" class="loading-message">Загрузка данных...</div>
    <div v-else-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-else-if="jewelry" class="pet-details">
      <div class="pet-image-container">
        <img v-if="jewelry.image" :src="`${backendUrl}${jewelry.image}`" alt="Jewelry Image" class="pet-image" />
        <span v-else>Нет изображения</span>
      </div>
      <div class="pet-info">
        <p><strong>Название:</strong> {{ jewelry.name || 'N/A' }}</p>
        <p><strong>Категория:</strong> {{ jewelry.category || 'N/A' }}</p>
        <p><strong>Материал:</strong> {{ jewelry.material || 'N/A' }}</p>
        <p><strong>Вес:</strong> {{ jewelry.weight ? Math.floor(jewelry.weight) + ' г' : 'N/A' }}</p>
        <p><strong>Цена:</strong> {{ jewelry.price ? Math.floor(jewelry.price) + ' ₽' : 'N/A' }}</p>
        <p>
          <strong>В наличии:</strong>
          <span :class="['status', jewelry.in_stock ? 'available' : 'unavailable']">
            {{ jewelry.in_stock ? 'Да' : 'Нет' }}
          </span>
        </p>
      </div>
      <div class="action-buttons">
        <button class="btn-secondary" @click="$router.push('/jewelry')">Вернуться к списку</button>
      </div>
    </div>
    <div v-else class="error-message">Не удалось загрузить данные о ювелирном изделии.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jewelry: null,
      loading: true,
      errorMessage: null,
      backendUrl: 'http://localhost:3000',
    };
  },
  async created() {
    const jewelryId = this.$route.params.id;
    if (!/^\d+$/.test(jewelryId)) {
      this.errorMessage = 'Некорректный ID';
      this.loading = false;
      return;
    }
    await this.fetchJewelry(jewelryId);
  },
  methods: {
    async fetchJewelry(jewelryId) {
      try {
        const response = await fetch(`${this.backendUrl}/api/view-jewelry/${jewelryId}`, {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          if (response.status === 401) {
            this.$router.push('/login');
            return;
          }
          if (response.status === 404) {
            throw new Error('Ювелирное изделие не найдено');
          }
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.jewelry = data;
      } catch (err) {
        console.error('Ошибка при получении данных ювелирного изделия:', err);
        this.errorMessage = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a, #333333); /* Черный градиент */
  color: #d4af37; /* Золотой текст */
  padding: 20px;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #d4af37;
}

.pet-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: rgba(26, 26, 26, 0.2); /* Полупрозрачный черный фон */
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
}

.pet-image-container img {
  max-width: 200px;
  max-height: 200px;
  border-radius: 8px;
  border: 2px solid #d4af37; /* Золотая рамка */
}

.pet-info {
  text-align: center;
  width: 100%;
  word-wrap: break-word;
}

.pet-info p {
  margin: 10px 0;
  color: #d4af37;
}

.pet-info strong {
  color: #ffd700; /* Яркий золотой для акцента */
}

.status {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  color: #1a1a1a;
}

.status.available {
  background: #d4af37; /* Золотой */
}

.status.unavailable {
  background: #b8860b; /* Темный золотой */
}

.action-buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn-secondary {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  background: rgba(212, 175, 55, 0.2); /* Полупрозрачный золотой */
  color: #d4af37;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.btn-secondary:hover {
  background: rgba(212, 175, 55, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.loading-message,
.error-message {
  text-align: center;
  font-size: 1.2rem;
  color: #d4af37;
}
</style>
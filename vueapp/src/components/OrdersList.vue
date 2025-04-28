<template>
  <div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div class="app-container">
      <h1 class="page-title">Список заказов</h1>
      <div class="table-container">
        <table class="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя клиента</th>
              <th>Дата заказа</th>
              <th>Сумма (₽)</th>
              <th>Статус</th>
              <th>Адрес доставки</th>
              <th>Изображение</th>
              <th class="actions-column">Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders" :key="order.id" class="table-row">
              <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
              <td>{{ order.client_name || 'N/A' }}</td>
              <td>{{ order.order_date ? order.order_date.split('T')[0] : 'N/A' }}</td>
              <td>{{ order.total_amount ? Math.floor(order.total_amount) + ' ₽' : 'N/A' }}</td>
              <td>
                <span :class="['status', order.status ? `status-${order.status.replace(' ', '-')}` : '']">
                  {{ order.status || 'N/A' }}
                </span>
              </td>
              <td>{{ order.delivery_address || 'N/A' }}</td>
              <td>
                <img v-if="order.image" :src="`${backendUrl}${order.image}`" alt="Order Image" class="pet-image" />
                <span v-else>N/A</span>
              </td>
              <td class="actions-column">
                <div class="action-button-container" @click="viewOrder(order.id)">
                  <i class="fas fa-eye"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-if="!orders.length" class="no-pets-message">Нет доступных заказов.</p>
        <div class="pagination" v-if="totalPages > 1">
          <button @click="prevPage" :disabled="currentPage === 1">← Предыдущая</button>
          <span>Страница {{ currentPage }} из {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">Следующая →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      backendUrl: 'http://localhost:3000',
    };
  },
  async created() {
    await this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await fetch(`${this.backendUrl}/api/orders?page=${this.currentPage}`, {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          if (response.status === 401) {
            this.$router.push('/login');
            return;
          }
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.orders = data.orders || [];
        this.totalPages = data.totalPages || 0;
        this.currentPage = data.currentPage || 1;
      } catch (err) {
        console.error('Error fetching orders:', err);
        this.orders = [];
        this.totalPages = 0;
      }
    },
    async prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        await this.fetchOrders();
      }
    },
    async nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        await this.fetchOrders();
      }
    },
    viewOrder(id) {
      this.$router.push(`/view-order/${id}`);
    },
    editOrder(id) {
      this.$router.push(`/edit-order/${id}`);
    },
    async deleteOrder(id) {
      if (!confirm('Вы уверены, что хотите удалить этот заказ?')) {
        return;
      }
      try {
        const response = await fetch(`${this.backendUrl}/delete-order/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        });
        if (!response.ok) {
          const errorText = await response.json();
          throw new Error(`Ошибка сервера: ${response.status} ${errorText.error}`);
        }
        await this.fetchOrders(); // Обновить список
      } catch (err) {
        console.error('Error deleting order:', err);
        alert(`Ошибка: ${err.message}`);
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

.table-container {
  width: 100%;
  max-width: 1200px;
  background: rgba(26, 26, 26, 0.2); /* Полупрозрачный черный фон */
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  padding: 20px;
}

.styled-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 16px;
  overflow: hidden;
  margin-top: 20px;
}

.styled-table th {
  background: rgba(26, 26, 26, 0.3); /* Темный черный фон */
  color: #d4af37;
  font-weight: bold;
  padding: 15px;
  text-align: center;
  border-bottom: none;
  border-right: none;
}

.styled-table td {
  background: rgba(26, 26, 26, 0.1);
  color: #d4af37;
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid rgba(212, 175, 55, 0.3); /* Золотая граница */
  border-right: 1px solid rgba(212, 175, 55, 0.3);
}

.styled-table th:last-child,
.styled-table td:last-child {
  border-right: none;
}

.styled-table tbody tr:last-child td {
  border-bottom: none;
}

.styled-table tbody tr:hover {
  background-color: rgba(212, 175, 55, 0.1); /* Полупрозрачный золотой ховер */
  cursor: pointer;
}

.actions-column {
  width: 150px;
}

.pet-image {
  max-width: 100px;
  max-height: 100px;
  border-radius: 8px;
  border: 2px solid #d4af37; /* Золотая рамка */
}

.no-pets-message {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
  color: #d4af37;
}

.status {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  color: #1a1a1a;
}

.status.status-в-обработке {
  background: #d4af37; /* Золотой */
}

.status.status-доставлен {
  background: #ffd700; /* Яркий золотой */
}

.status.status-отправлен {
  background: #b8860b; /* Темный золотой */
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
}

.pagination button {
  background: #d4af37; /* Золотой фон */
  color: #1a1a1a;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.pagination button:disabled {
  background: #2a2a2a; /* Темный серый */
  cursor: not-allowed;
  box-shadow: none;
}

.pagination button:hover:not(:disabled) {
  background: #b8860b; /* Темный золотой */
  transform: translateY(-2px);
}

.pagination span {
  color: #d4af37;
  font-weight: bold;
}

.action-button-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px; /* Увеличенный размер */
  height: 40px;
  background-color: #d4af37; /* Золотой фон */
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 0 5px;
}

.action-button-container:hover {
  background-color: #b8860b; /* Темный золотой */
  transform: scale(1.1);
}

.action-button-container i {
  color: #1a1a1a; /* Черный для контраста */
  font-size: 1.2rem; /* Увеличенный шрифт */
}
</style>
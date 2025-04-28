<template>
  <div class="container">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" v-model="username" required class="form-input" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required class="form-input" />
      </div>
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required class="form-input" />
      </div>
      <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        error: '',
      };
    },
    methods: {
      async register() {
        try {
          console.log('Registering user with data:', {
            username: this.username,
            email: this.email,
            password: this.password,
          });

          const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: this.username,
              email: this.email,
              password: this.password,
            }),
          });

          const data = await response.json();
          console.log('Registration response:', data);

          if (response.ok) {
            this.$router.push('/login');
          } else {
            this.error = data.message || 'Ошибка регистрации';
          }
        } catch (err) {
          console.error('Error during registration:', err);
          this.error = 'Ошибка сервера';
        }
      },
    },
  };
</script>

<style scoped>
  .container {
    width: 100%; /* Ширина контейнера */
    max-width: 400px; /* Максимальная ширина */
    margin: 0 auto; /* Выравнивание по центру по горизонтали */
    padding: 20px; /* Отступы внутри контейнера */
    text-align: center; /* Выравнивание текста по центру */
    position: absolute; /* Абсолютное позиционирование */
    top: 50%; /* Сдвигаем контейнер на 50% от верха */
    left: 50%; /* Сдвигаем контейнер на 50% от левого края */
    transform: translate(-50%, -50%); /* Смещение контейнера на половину его ширины и высоты */
  }

  .error {
    color: red;
    margin-top: 10px;
  }
</style>

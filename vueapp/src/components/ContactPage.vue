<template>
  <main class="container fade-in">
    <h1 class="page-title">Контакты</h1>
    <div class="row employees-row mt-5">
      <div class="col-md-4 employee-card" style="transform: rotate(-2deg);">
        <div class="card">
          <img src="/images/11.jpeg" class="card-img-top" alt="Елена Смирнова">
          <div class="card-body">
            <h5 class="card-title">Елена Смирнова</h5>
            <p class="card-text"><strong>Должность:</strong> Директор магазина</p>
            <p class="card-text"><strong>Стаж:</strong> 10 лет</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 employee-card" style="transform: rotate(1deg);">
        <div class="card">
          <img src="/images/22.jpg" class="card-img-top" alt="Софья Волкова">
          <div class="card-body">
            <h5 class="card-title">Софья Волкова</h5>
            <p class="card-text"><strong>Должность:</strong> Ювелир-дизайнер</p>
            <p class="card-text"><strong>Стаж:</strong> 8 лет</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 employee-card" style="transform: rotate(-1deg);">
        <div class="card">
          <img src="/images/33.jpg" class="card-img-top" alt="Ольга Николаева">
          <div class="card-body">
            <h5 class="card-title">Ольга Николаева</h5>
            <p class="card-text"><strong>Должность:</strong> Консультант по драгоценным камням</p>
            <p class="card-text"><strong>Стаж:</strong> 3 года</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 employee-card" style="transform: rotate(2deg); margin-top: 20px;">
        <div class="card">
          <img src="/images/44.jpeg" class="card-img-top" alt="Виктория Лебедева">
          <div class="card-body">
            <h5 class="card-title">Виктория Лебедева</h5>
            <p class="card-text"><strong>Должность:</strong> Администратор салона</p>
            <p class="card-text"><strong>Стаж:</strong> 6 лет</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 employee-card" style="transform: rotate(-1deg); margin-top: 30px;">
        <div class="card">
          <img src="/images/55.jpg" class="card-img-top" alt="Игорь Соколов">
          <div class="card-body">
            <h5 class="card-title">Игорь Соколов</h5>
            <p class="card-text"><strong>Должность:</strong> Специалист по часовым механизмам</p>
            <p class="card-text"><strong>Стаж:</strong> 7 лет</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 employee-card" style="transform: rotate(1deg); margin-top: 40px;">
        <div class="card">
          <img src="/images/66.jpeg" class="card-img-top" alt="Дарья Петрова">
          <div class="card-body">
            <h5 class="card-title">Дарья Петрова</h5>
            <p class="card-text"><strong>Должность:</strong> Менеджер по продажам</p>
            <p class="card-text"><strong>Стаж:</strong> 4 года</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
}

.employee-card {
  transition: transform 0.3s ease;
}

.employee-card:hover {
  transform: scale(1.05) !important;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  max-width: 300px;
  margin: 0 auto;
}

.card-img-top {
  width: 100%;
  height: auto;
  border-bottom: 2px solid #ddd;
}

.card-body {
  padding: 15px;
  text-align: center;
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card-text strong {
  font-weight: bold;
  color: #333;
}

.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
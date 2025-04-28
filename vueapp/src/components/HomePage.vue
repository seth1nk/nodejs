<template>
  <main class="container fade-in">
    <h1 class="page-title mb-4"><b>ЮВЕЛИРНЫЙ МАГАЗИН «КРОН»</b></h1>
    <div class="content-block text-center mb-5">
      <div class="image-block-centered">
        <img src="/images/1.jpg" class="img-block" alt="Ювелирные изделия">
      </div>
      <div class="text-block">
        <p class="fs-5">
          Добро пожаловать в ювелирный магазин «Крон» — место, где воплощаются мечты о совершенстве и роскоши! 
          Мы предлагаем эксклюзивные ювелирные украшения: кольца, серьги, ожерелья, браслеты и другие изделия, созданные с использованием драгоценных камней и металлов высочайшего качества.
        </p>
      </div>
    </div>
    <div class="content-block text-center mb-5">
      <div class="image-block-centered">
        <img src="/images/2.jpg" class="img-block" alt="Элитные часы">
      </div>
      <div class="text-block">
        <p class="fs-5">
          В нашем ассортименте вы найдете украшения для любого случая — от элегантных повседневных аксессуаров до роскошных изделий для особых событий. Кроме того, мы предлагаем коллекцию элитных часов от ведущих мировых брендов, сочетающих в себе утонченный дизайн и безупречную точность.
        </p>
      </div>
    </div>
    <div class="content-block text-center mb-5">
      <div class="image-block-centered">
        <img src="/images/3.jpg" class="img-block" alt="Ювелирные мастера">
      </div>
      <div class="text-block">
        <p class="fs-5">
          Мы сотрудничаем с лучшими ювелирными мастерами и часовыми брендами, чтобы каждое изделие отвечало самым высоким стандартам качества и дизайна. Покупая в «Крон», вы выбираете утонченность, надежность и вечную красоту, будь то ювелирное украшение или роскошные часы.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.content-block {
  margin-bottom: 50px;
}

.image-block-centered {
  max-width: 600px;
  margin: 0 auto 20px;
}

.img-block {
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 2px solid #000;
}

.text-block {
  text-align: center;
}

.fs-5 {
  font-size: 1.25rem;
}

.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
<template>
  <main class="container fade-in">
    <h1 class="page-title">О нас</h1>
    <div class="content-block mb-5">
      <div class="row align-items-center">
        <div class="col-md-6 image-block">
          <img src="/images/kol.jpg" class="img-block" alt="Кольца">
        </div>
        <div class="col-md-6 text-block">
          <p class="fs-5">
            Кольца — воплощение элегантности и утонченности. В нашем магазине «Крон» представлены кольца с драгоценными камнями и уникальными дизайнами, подходящие для помолвки, свадьбы или повседневной носки.
            <br><strong>Примерная стоимость:</strong> от 10 000 до 500 000 рублей.
          </p>
        </div>
      </div>
    </div>
    <div class="content-block mb-5">
      <div class="row align-items-center flex-md-row-reverse">
        <div class="col-md-6 image-block">
          <img src="/images/ser.jpg" class="img-block" alt="Серьги">
        </div>
        <div class="col-md-6 text-block">
          <p class="fs-5">
            Серьги — идеальный способ подчеркнуть вашу индивидуальность. От классических моделей с бриллиантами до современных асимметричных дизайнов, у нас есть украшения на любой вкус.
            <br><strong>Примерная стоимость:</strong> от 5 000 до 300 000 рублей.
          </p>
        </div>
      </div>
    </div>
    <div class="content-block mb-5">
      <div class="row align-items-center">
        <div class="col-md-6 image-block">
          <img src="/images/ozher.jpg" class="img-block" alt="Ожерелья">
        </div>
        <div class="col-md-6 text-block">
          <p class="fs-5">
            Ожерелья — изысканные украшения, которые добавляют шарма любому образу. Мы предлагаем как минималистичные цепочки, так и роскошные ожерелья с драгоценными камнями.
            <br><strong>Примерная стоимость:</strong> от 15 000 до 700 000 рублей.
          </p>
        </div>
      </div>
    </div>
    <div class="content-block mb-5">
      <div class="row align-items-center flex-md-row-reverse">
        <div class="col-md-6 image-block">
          <img src="/images/brasl.jpg" class="img-block" alt="Браслеты">
        </div>
        <div class="col-md-6 text-block">
          <p class="fs-5">
            Браслеты — стильные аксессуары, которые подчеркивают утонченность и вкус. Наши коллекции включают как изящные цепочки, так и массивные украшения с инкрустацией.
            <br><strong>Примерная стоимость:</strong> от 8 000 до 400 000 рублей.
          </p>
        </div>
      </div>
    </div>
    <div class="content-block mb-5">
      <div class="row align-items-center">
        <div class="col-md-6 image-block">
          <img src="/images/clock.jpg" class="img-block" alt="Часы">
        </div>
        <div class="col-md-6 text-block">
          <p class="fs-5">
            Часы — сочетание функциональности и роскоши. Мы предлагаем элитные часы от ведущих мировых брендов, которые станут не только стильным аксессуаром, но и символом статуса.
            <br><strong>Примерная стоимость:</strong> от 20 000 до 1 500 000 рублей.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AboutPage',
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

.image-block {
  text-align: center;
}

.img-block {
  max-width: 400px;
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
<script setup lang="ts">

</script>

<template>
<div class="route">
  <span class="route__root-style">Главная</span>
  <img class="route__icon-style" src="public/icon/arrow-right.svg" alt="arrow-right">
  <span class="route__path-style">Корзина</span>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  .route {
    padding-top: 30px;
    padding-left: 80px;
    padding-bottom: 60px;
  }

  .route__root-style {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #33374E;
  }

  .route__path-style {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #797B86;
  }

  .route__icon-style {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
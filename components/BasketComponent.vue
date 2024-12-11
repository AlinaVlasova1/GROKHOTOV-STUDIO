<script setup lang="ts">

</script>

<template>
  <div class="basket">
    <div class="basket__block-position">
      <img class="basket__logo-style" src="public/icon/ant-design_shopping-cart-outlined.svg" alt="shopping-cart">
      <div class="basket__description">
        <span class="basket__title-style">Ваша корзина</span>
        <span class="basket__count-style">3 товара</span>
        <span class="basket__cost-style">50 576 ₽</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  .basket__block-position {
    display: flex;
    justify-content: right;
    margin-top: 64px;
    margin-right: 82px;
    margin-bottom: 25px;

    .basket__logo-style {
      margin-right: 10px;
    }

    .basket__title-style {
      margin: 0;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #1F2432;
    }

    .basket__count-style {
      display: block;
      width: 100%;
      font-family: "Lato", sans-serif;
      font-size: 12px;
      line-height: 17px;
      color: #797B86;
    }

    .basket__cost-style {
      font-family: "Lato", sans-serif;
      font-size: 12px;
      line-height: 17px;
      color: #1F2432;
    }
  }
</style>